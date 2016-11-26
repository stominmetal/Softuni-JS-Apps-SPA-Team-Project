/*Initialize image resizing library*/
let resize = new window.resize();
resize.init();

/*Listen for changes on the input*/
function getFilesFromInput(event) {
    for (let image of event.target.files) {
        resizeImageAndGetMetadata(image);
    }
}

function resizeImageAndGetMetadata(file) {
    /*Get metadata of image (GPS Coordinates)*/
    EXIF.getData(file, function (dat) {
        let lat = EXIF.getTag(file, 'GPSLatitude');
        let longt = EXIF.getTag(file, 'GPSLongitude');

        lat = lat[0].numerator + lat[1].numerator /
            (60 * lat[1].denominator) + lat[2].numerator / (3600 * lat[2].denominator);
        longt = longt[0].numerator + longt[1].numerator /
            (60 * longt[1].denominator) + longt[2].numerator / (3600 * longt[2].denominator);
        console.log(lat)
        console.log(longt)
        let metadata = {
            latitude: lat,
            longitude: longt,
            fileName: file.name
        };

        /*Resize image (500px is small but that's what kinvey allows to upload as base64)*/
        resize.photo(file, 500, 'dataURL', function (resizedImage) {
            let objectToUpload = {
                image: resizedImage,
                latitude: metadata.latitude,
                longitude: metadata.longitude,
                fileName: metadata.fileName
            };

            /*After both actions are completed - start upload of current image*/
            if (file.name.split(".")[1].toUpperCase() != "JPG" && file.name.split(".")[1].toUpperCase() != "JPEG") {
                showErrorAlert("Invalid Image")
            } else if (!objectToUpload.latitude || !objectToUpload.longitude) {
                showErrorAlert("Image doesn't contain GPS data")
            } else {
                uploadImage(objectToUpload);
            }
        });
    });
}

function uploadImage(image) {
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures",
        headers: getSampleUserAuthHeaders(),
        data: image
    }).then(imageUploadSuccess).catch(handleAjaxError);

    function imageUploadSuccess(data) {
        /*Requests uploaded images*/
        getUploadedImages(data);
        showSuccessAlert(`${data.fileName} uploaded`)
    }
}

function getUploadedImages(data) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + data._id,
        headers: getSampleUserAuthHeaders()
    }).then(visualizeUploadedImages).catch(handleAjaxError);

    /*Displays requested images*/
    function visualizeUploadedImages(data) {
        $("#uploadedImagesText").show();
        $(".section .uploadedImages").prepend(`
            <p>File Name: ${data.fileName}</p>
            <div style="width: 70%">
             <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${data.image}">
             </div>
             <div class="divider"></div>`
        );
        /*Makes images enlargeable when clicked*/
        $('.materialboxed').materialbox();
    }
}