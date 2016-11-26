let map;
function initMap() {
    let baseMaps = {
        "Outdoors": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Outdoors'}),
        "Streets": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Streets'}),
        "Dark": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Dark'}),
        "Light": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Light'}),
        "Satelite": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Satelite'}),
        "Satelite Streets": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlza2F6eiIsImEiOiJjaXJkOTFkb3owMDdxaTltZ21vemsxcGViIn0.70mwo4YYnbxY_BJoEsGYxw', {attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> Satelite Streets'}),
        "OpenStreetMap": L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">оpenStreetMap</a> оpenStreetMap'})
    };
    $('#homeMap').css("height", Math.round($(window).height() / 1.2) + "px");
    $(window).resize(function () {
        $('#homeMap').css("height", Math.round($(window).height() / 1.2) + "px");
    });

    map = L.map('homeMap', {
        center: [42.7339, 25.4858],
        zoom: 7,
        layers: baseMaps.Outdoors,
        minZoom: 3,
    });
    map.zoomControl.setPosition('bottomright');
    L.control.layers(baseMaps).addTo(map);
    map.setMaxBounds([[90, -180], [-90, 180]]);

    $("#homeMap").on('click', '.leaflet-marker-icon', function (event) {
        $('.materialboxed').materialbox();
    });

}

function addPhotoToMap(image) {
    let imageUrl = `https://firebasestorage.googleapis.com/v0/b/dronemapper-83b1a.appspot.com/o/images%2FE4QLWhFlJFNLRoZ8J7PcwoXwaCw2%2F-KXM-5VF5e--3P2gaogZ?alt=media&token=bfe6aacf-39df-4ee2-9e6d-9de46dd12855`;
    let imageLat = 0;
    let imageLong = 0;
    let pictureWidth = Math.round($(window).width() / 5);
    let imageDisplayString = `<img class='materialboxed' width="${pictureWidth}" src=${imageUrl}>`;
    if (map) {
        L.marker([imageLat, imageLong])
            .bindPopup(imageDisplayString, {
                autoPanPadding: L.point(20, 20),
            })
            .addTo(map);
    }
}