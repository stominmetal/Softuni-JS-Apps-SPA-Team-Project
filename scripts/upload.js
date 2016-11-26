$("#uploadSlector").change(function (evt) {
    let files = evt.target.files;
    for (let i = 0; i < files.length; i++) {
        let file = evt.target.files[i];
        uploadFile(file);


    }
});

function uploadFile(file) {
    let src = URL.createObjectURL(file);
    let fileName = file.name.split(".")[0];
    let fileExt = file.name.split(".")[1];
    EXIF.getData(file, function () {
        let location = getLocaiton(file);
        console.log(location)
    });
}

function getLocaiton(file) {
    let lat = EXIF.getTag(file, 'GPSLatitude');
    let longt = EXIF.getTag(file, 'GPSLongitude');
    lat = lat[0].numerator + lat[1].numerator /
        (60 * lat[1].denominator) + lat[2].numerator / (3600 * lat[2].denominator);
    longt = longt[0].numerator + longt[1].numerator /
        (60 * longt[1].denominator) + longt[2].numerator / (3600 * longt[2].denominator);
    return {
        latitude: lat,
        longitude: longt
    }
}