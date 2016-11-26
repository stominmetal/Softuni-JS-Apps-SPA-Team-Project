/*Add navigation here*/
function showHomeView() {
    showView("homeView");
}

function showUploadView() {
    showView("uploadView");
}

function showView(view) {
    $('main > section').hide();
    $('.active').removeAttr("class")
    $(`#${view}`).show();
    $(`.${view}Button`).parent().addClass("active");
}