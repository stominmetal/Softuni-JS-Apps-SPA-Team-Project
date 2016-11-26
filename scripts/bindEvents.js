/*Add events handling here*/
$(document).ready(function () {
    $(".homeViewButton").click(showHomeView);
    $(".uploadViewButton").click(showUploadView);
    $("#uploadSlector").change(getFilesFromInput);
    $("#homeMap").on('click', '.leaflet-marker-icon', makeImageOnMapResponsive);
});