let resize = new window.resize();
resize.init();

$("#uploadSlector").change(function (evt) {
    let files = evt.target.files;
    for (let i = 0; i < files.length; i++) {
        let image = evt.target.files[i];
        resizeImageAndGetMetadata(image);
    }
});

function resizeImageAndGetMetadata(file) {
    EXIF.getData(file, function () {
        let lat = EXIF.getTag(file, 'GPSLatitude');
        let longt = EXIF.getTag(file, 'GPSLongitude');
        lat = lat[0].numerator + lat[1].numerator /
            (60 * lat[1].denominator) + lat[2].numerator / (3600 * lat[2].denominator);
        longt = longt[0].numerator + longt[1].numerator /
            (60 * longt[1].denominator) + longt[2].numerator / (3600 * longt[2].denominator);
        let metadata = {
            latitude: lat,
            longitude: longt,
            fileName: file.name
        };

        resize.photo(file, 500, 'dataURL', function (resizedImage) {
            let objectToUpload = {
                image: resizedImage,
                latitude: metadata.latitude,
                longitude: metadata.longitude,
                fileName: metadata.fileName
            };

            /*After both actions are completed start upload*/
            uploadImage(objectToUpload);
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
        getUploadedImages(data);
        showSuccessAlert("Picture upload success")
    }
}

function getUploadedImages(data) {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + data._id,
        headers: getSampleUserAuthHeaders()
    }).then(visualizeUploadedImages).catch(handleAjaxError);

    function visualizeUploadedImages(data) {
        $("#uploadedImagesText").show();
        $(".section .uploadedImages").prepend(`
            <p>${data.fileName}</p>
             <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${data.image}">
             <div class="divider"></div>`
        );
        $('.materialboxed').materialbox();
    }
}