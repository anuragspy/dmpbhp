var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_roads_1 = new ol.format.GeoJSON();
var features_roads_1 = format_roads_1.readFeatures(json_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_1.addFeatures(features_roads_1);
var lyr_roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_1, 
                style: style_roads_1,
                interactive: false,
                title: '<img src="styles/legend/roads_1.png" /> roads'
            });
var format_railways_2 = new ol.format.GeoJSON();
var features_railways_2 = format_railways_2.readFeatures(json_railways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_2.addFeatures(features_railways_2);
var lyr_railways_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railways_2, 
                style: style_railways_2,
                interactive: false,
                title: '<img src="styles/legend/railways_2.png" /> railways'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_3, 
                style: style_points_3,
                interactive: false,
                title: '<img src="styles/legend/points_3.png" /> points'
            });
var format_places_4 = new ol.format.GeoJSON();
var features_places_4 = format_places_4.readFeatures(json_places_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_places_4.addFeatures(features_places_4);
var lyr_places_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_places_4, 
                style: style_places_4,
                interactive: true,
                title: '<img src="styles/legend/places_4.png" /> places'
            });
var format_natural_5 = new ol.format.GeoJSON();
var features_natural_5 = format_natural_5.readFeatures(json_natural_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_5.addFeatures(features_natural_5);
var lyr_natural_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_natural_5, 
                style: style_natural_5,
                interactive: true,
                title: '<img src="styles/legend/natural_5.png" /> natural'
            });

lyr_OSMStandard_0.setVisible(true);lyr_roads_1.setVisible(true);lyr_railways_2.setVisible(true);lyr_points_3.setVisible(true);lyr_places_4.setVisible(true);lyr_natural_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_roads_1,lyr_railways_2,lyr_points_3,lyr_places_4,lyr_natural_5];
lyr_roads_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_railways_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_points_3.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_places_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'population': 'population', });
lyr_natural_5.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_roads_1.set('fieldImages', {'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'maxspeed': '', });
lyr_railways_2.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_points_3.set('fieldImages', {'osm_id': 'TextEdit', 'timestamp': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_places_4.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', 'population': '', });
lyr_natural_5.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_roads_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_railways_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_points_3.set('fieldLabels', {'osm_id': 'no label', 'timestamp': 'no label', 'name': 'inline label', 'type': 'inline label', });
lyr_places_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'population': 'no label', });
lyr_natural_5.set('fieldLabels', {'osm_id': 'inline label', 'name': 'no label', 'type': 'header label', });
lyr_natural_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});