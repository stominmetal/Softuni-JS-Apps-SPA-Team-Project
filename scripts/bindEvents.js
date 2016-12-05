/*Add events handling here*/
$(document).ready(function () {
    $(".homeViewButton").click(showHomeView);
    $(".galleryViewButton").click(showGalleryView);
    $(".uploadViewButton").click(showUploadView);
    $(".usersViewButton").click(showUsersView);
    $(".registerViewButton").click(showRegisterView);
    $(".loginViewButton").click(showLoginView);
    $(".logoutButton").click(logoutUser);
    $("#loginButton").click(loginUser);
    $("#registerButton").click(registerUser);
    $("#uploadSlector").change(getFilesFromInput);
    $("#uploadLogoSlector").change(getFilesFromInput);
    $(".setDescriptionButton").click(showDescriptionView);
    $("#homeMap").on('click', '.leaflet-marker-icon', makeImageOnMapResponsive);
});