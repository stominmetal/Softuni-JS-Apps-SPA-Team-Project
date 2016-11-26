$(document).ready(function () {
    $(".homeViewButton").click(showHomeView);
    $(".uploadViewButton").click(showUploadView);
    $("#uploadSlector").change(getFilesFromInput);

    $("#homeMap").on('click', '.leaflet-marker-icon', function () {
        setTimeout(function () {
            $('.materialboxed').materialbox();
            console.log("clicked")
        }, 10)
    });
});