(function() {

  var basemaps = {
    Grayscale: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
  };

  var groups = {
    cities: new L.LayerGroup(),
    restaurants: new L.LayerGroup(),

  };

  function highlightFeature(e) {
    const layer = e.target;

   

    layer.bringToFront();

    info.update(layer.feature.properties);
    }



    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
    }

  geojson1 = L.geoJSON(jamaikaa, {onEachFeature: onEachFeature, style: function(feature) {
    return {
            weight: 2,
            Opacity: 1,
            color: '#FF0000',
            dasharray: '7',
            fillOpacity: 0.1,
        }
}}).addTo(groups.cities);


geojson2 = L.geoJSON(skhirate, {onEachFeature: onEachFeature, style: function(feature) {
  return {
          weight: 2,
          Opacity: 1,
          color: '#FF0000',
          dasharray: '7',
          fillOpacity: 0.1,
      }
}}).addTo(groups.restaurants);


  window.ExampleData = {
    LayerGroups: groups,
    
  };

}());
