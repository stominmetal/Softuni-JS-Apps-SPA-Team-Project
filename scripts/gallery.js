/* Draw images in gallery view*/

function loadImages() {
    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures",
        headers: getKinveyUserAuthHeaders()
    }).then(visualizeUploadedImages).catch(handleAjaxError);

    /*Displays requested images*/
    function visualizeUploadedImages(imageDataGallery) {
        $("#galleryImagesHeading").show();
        $("#galleryImagesContainer").empty();
        for (let image of imageDataGallery) {
            $(".section #galleryImagesContainer").prepend(`
            <p>${image.fileName}</p>
            <div style="width: 70%">
             <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${image.image}">
             </div>
             <blockquote style="width: 70%">
                 This is an example quotation that uses the blockquote tag. asdddddg. asdddddg. asdddddg. asdddddg. asddddd g. asdddddg. asdddddg. asdddddg. asddddd
            </blockquote>
             <div class="divider"></div>`
            );
            /*Makes images enlargeable when clicked*/
            $('.materialboxed').materialbox();
        }
    }
}
