function prepareDescriptionView(data) {
    $("#editContainer").empty();
    let editButton = $(`<a style="margin-bottom: 15px;" class="waves-effect waves-light btn">Edit Description</a>`).click(function () {
        data.description = $("#editedDescription").val();
        editDescription(data)
    });

    let entryToDisplay = $(`
         <div>
            <p>${data.fileName}</p>
            <div style="width: 70%">
                <img style="border-radius: 2px;" class="materialboxed responsive-img z-depth-1" src="${data.image}">
            </div>
            <div style="width: 70%" class="input-field col s12">
                <textarea id="editedDescription" class="materialize-textarea">${data.description}</textarea>
                <label class="active">Description</label>
            </div>
         </div>`);

    entryToDisplay.append(editButton);
    $("#editContainer").append(entryToDisplay);
}

function editDescription(data) {
    let id = data._id;
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + id,
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
    let id = data._id;
    data.description = description;
    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/pictures/" + id,
        headers: getKinveyUserAuthHeaders(),
        data: data
    }).then(setDescriptionSuccess).catch(handleAjaxError);

    function setDescriptionSuccess(response) {
        $(button).parent().find(".descriptionContainer").remove();
        $(button).parent().find("img").after(`
            <div class="descriptionContainer">
             <blockquote style="width: 70%">${response.description}</blockquote>
            </div>`);
        showSuccessAlert("Added Description!");
        $(button).parent().find("textarea").val("")
    }
}