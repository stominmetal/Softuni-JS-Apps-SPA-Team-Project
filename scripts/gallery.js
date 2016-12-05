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

            let buttonsRow = $(`<div class="row"></div>`);
            let descrButton = $(`<a style="margin-left: 15px" class="waves-effect waves-light yellow darken-3 btn setDescriptionButton" data-id="${image._id}">Edit</a>`).click(function () {

            });
            let deleteButton = $(`<a style="margin-left: 15px" class="waves-effect waves-light red darken-3 btn setDescriptionButton" data-id="${image._id}">Delete</a>`).click(function () {

            });

            buttonsRow.append(descrButton);
            buttonsRow.append(deleteButton);
            let entryToDisplay = $(`
            <div>
                <div style="width: 70%">
                     <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${image.image}">
                 </div>
                <blockquote style="width: 70%">
                   ${description}
                </blockquote>
                 
             </div>`);

            if(image._acl.creator == sessionStorage.getItem("userId")){
                entryToDisplay.append(buttonsRow).append($(`<div class="divider"></div>`)).append($(`<div class="divider"></div>`));
            }else{
                entryToDisplay.append($(`<div class="divider"></div>`));
            }

            $(".section #galleryImagesContainer").prepend(entryToDisplay);

            /*Makes images enlargeable when clicked*/
            $('.materialboxed').materialbox();
        }
    }
}
