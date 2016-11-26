let resize = new window.resize();
resize.init();

$("#uploadSlector").change(function (evt) {
    let files = evt.target.files;
    for (let i = 0; i < files.length; i++) {
        let image = evt.target.files[i];
        resizeImage(image);
    }
});

function resizeImage(file) {
    EXIF.getData(file, function () {
        let metadata = getMetadata(file);
        resize.photo(file, 500, 'dataURL', function (resizedImage) {
            let objectToUpload = {
                image: resizedImage,
                latitude: metadata.latitude,
                longitude: metadata.longitude,
                fileName: metadata.fileName
            };
            uploadImage(objectToUpload);
        });
    });
}

function getMetadata(file) {
    let fileName = file.name;
    let lat = EXIF.getTag(file, 'GPSLatitude');
    let longt = EXIF.getTag(file, 'GPSLongitude');
    lat = lat[0].numerator + lat[1].numerator /
        (60 * lat[1].denominator) + lat[2].numerator / (3600 * lat[2].denominator);
    longt = longt[0].numerator + longt[1].numerator /
        (60 * longt[1].denominator) + longt[2].numerator / (3600 * longt[2].denominator);
    return {
        latitude: lat,
        longitude: longt,
        fileName: fileName
    }
}

function uploadImage(image) {
    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures",
        headers: getSampleUserAuthHeaders(),
        data: image
    }).then(imageUploadSuccess).catch(handleAjaxError);

    function imageUploadSuccess(data) {
        alertify.success("Picture upload success")
    }
}