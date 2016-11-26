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
}

