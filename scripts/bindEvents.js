/*Add events handling here*/
$(document).ready(function () {
    $(".homeViewButton").click(showHomeView);
    $(".uploadViewButton").click(showUploadView);
    $(".registerViewButton").click(showRegisterView);
    $(".loginViewButton").click(showLoginView);
    $("#uploadSlector").change(getFilesFromInput);
    $("#homeMap").on('click', '.leaflet-marker-icon', makeImageOnMapResponsive);
});