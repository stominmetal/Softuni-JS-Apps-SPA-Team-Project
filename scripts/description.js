function prepareDescriptionView(that) {
    console.log();
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
             <h6>Description</h6>
             <blockquote style="width: 70%">${response.description}</blockquote>
            </div> `);
        showSuccessAlert("Added Description!");
        $(button).parent().find("textarea").val("")
    }

}