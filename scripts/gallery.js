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
            let description;
            if (image.description) {
                description = image.description;
            } else {
                description = "*No Description Available";
            }

            $(".section #galleryImagesContainer").prepend(`
            <div>
                <div style="width: 70%">
                     <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${image.image}">
                 </div>
                <blockquote style="width: 70%">
                   ${description}
                </blockquote>
                 <div class="divider"></div>
             </div>`
            );
            /*Makes images enlargeable when clicked*/
            $('.materialboxed').materialbox();
        }
    }
}
