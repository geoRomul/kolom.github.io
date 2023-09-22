ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3395").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
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
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Коломна'
            });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'polygon': 'polygon', 'name': 'name', 'description': 'description', 'fill': 'fill', 'fill-opacity': 'fill-opacity', 'stroke': 'stroke', 'stroke-width': 'stroke-width', 'iconContent': 'iconContent', 'area': 'area', 'town': 'town', });
lyr__1.set('fieldImages', {'polygon': 'Range', 'name': 'TextEdit', 'description': 'TextEdit', 'fill': 'TextEdit', 'fill-opacity': 'TextEdit', 'stroke': 'TextEdit', 'stroke-width': 'TextEdit', 'iconContent': 'TextEdit', 'area': 'TextEdit', 'town': 'TextEdit', });
lyr__1.set('fieldLabels', {'polygon': 'no label', 'name': 'no label', 'description': 'no label', 'fill': 'no label', 'fill-opacity': 'no label', 'stroke': 'no label', 'stroke-width': 'no label', 'iconContent': 'no label', 'area': 'no label', 'town': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});