function prepareDescriptionView(data) {
    $("#editButton").remove();
    let editButton = $(`<a id="editButton" style="margin-bottom: 15px;" class="waves-effect waves-light btn">Edit Description</a>`).click(function () {
        let newDescription = $("#editedDescription").val();
        if(newDescription.length){
            data.description = newDescription;
        }else{
            data.description = "*No Description Available"
        }
        editDescription(data)
    });

    $("#editPictureName").text(data.fileName);
    $("#editPicture").attr("src", data.image);
    $("#editedDescription").val(data.description);
    $("#editContainer").append(editButton);
}

function editDescription(data) {
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + data._id,
        headers: getKinveyUserAuthHeaders(),
        data: data
    }).then(setDescriptionSuccess).catch(handleAjaxError);

    function setDescriptionSuccess(response) {
        showSuccessAlert("Edit Success!");
        showGalleryView();
    }
}

function setDescription(data, button) {
    let description = $(button).parent().find("textarea").val();
    data.description = description;
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + data._id,
        headers: getKinveyUserAuthHeaders(),
        data: data
    }).then(setDescriptionSuccess).catch(handleAjaxError);

    function setDescriptionSuccess(response) {
        $(button).parent().find(".descriptionContainer").remove();
        $(button).parent().find("img").after(`
            <div class="descriptionContainer">
             <blockquote style="width: 70%">${escape(response.description)}</blockquote>
            </div>`);
        showSuccessAlert("Added Description!");
        $(button).parent().find("textarea").val("")
    }
}