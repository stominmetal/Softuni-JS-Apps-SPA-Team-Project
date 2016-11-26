/*Add navigation here*/
function showHomeView() {
    showView("homeView");
    loadImagesOnMap();
}

function showUploadView() {
    showView("uploadView");
}

function showView(view) {
    $('main > section').hide();
    $('nav div ul li.active').removeAttr("class");
    $(`#${view}`).show();
    $(`.${view}Button`).parent().addClass("active");
}