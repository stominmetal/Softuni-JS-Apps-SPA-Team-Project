/*Add navigation here*/
function showHomeView() {
    showView("homeView");
}

function showUploadView() {
    showView("uploadView");
}

function showView(view) {
    $('main > section').hide();
    $(`#${view}`).show();
}