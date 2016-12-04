/*Add navigation here*/
function showHomeView() {
    showView("homeView");
    loadImagesOnMap();
}

function showUploadView() {
    showView("uploadView");
}

function showRegisterView() {
    showView("registerView");
}

function showLoginView() {
    showView("loginView");
}

function showView(view) {
    $('main > section').hide();
    $(`#${view}`).show();
    /*Takes care of highligiting in menus and navs */
    $('nav div ul li.active').removeAttr("class");
    $(`.${view}Button`).parent().addClass("active");
}