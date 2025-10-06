var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_24_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '24<br />\
    <img src="styles/legend/24_1_0.png" /> 0<br />\
    <img src="styles/legend/24_1_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/24_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_25_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '25<br />\
    <img src="styles/legend/25_2_0.png" /> 0<br />\
    <img src="styles/legend/25_2_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/25_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_26_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '26<br />\
    <img src="styles/legend/26_3_0.png" /> 0<br />\
    <img src="styles/legend/26_3_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/26_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_27_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '27<br />\
    <img src="styles/legend/27_4_0.png" /> 0<br />\
    <img src="styles/legend/27_4_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/27_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_28_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '28<br />\
    <img src="styles/legend/28_5_0.png" /> 0<br />\
    <img src="styles/legend/28_5_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/28_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_29_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '29<br />\
    <img src="styles/legend/29_6_0.png" /> 0<br />\
    <img src="styles/legend/29_6_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/29_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_30_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '30<br />\
    <img src="styles/legend/30_7_0.png" /> 0<br />\
    <img src="styles/legend/30_7_1.png" /> 9.42<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/30_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var format_MunicipalBoundary_8 = new ol.format.GeoJSON();
var features_MunicipalBoundary_8 = format_MunicipalBoundary_8.readFeatures(json_MunicipalBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalBoundary_8.addFeatures(features_MunicipalBoundary_8);
var lyr_MunicipalBoundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalBoundary_8, 
                style: style_MunicipalBoundary_8,
                popuplayertitle: 'Municipal Boundary',
                interactive: true,
                title: '<img src="styles/legend/MunicipalBoundary_8.png" /> Municipal Boundary'
            });
var format_Roads_9 = new ol.format.GeoJSON();
var features_Roads_9 = format_Roads_9.readFeatures(json_Roads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_9.addFeatures(features_Roads_9);
var lyr_Roads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_9, 
                style: style_Roads_9,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_9.png" /> Roads'
            });
var format_Households_10 = new ol.format.GeoJSON();
var features_Households_10 = format_Households_10.readFeatures(json_Households_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Households_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Households_10.addFeatures(features_Households_10);
var lyr_Households_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Households_10, 
                style: style_Households_10,
                popuplayertitle: 'Households',
                interactive: true,
                title: '<img src="styles/legend/Households_10.png" /> Households'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_24_1.setVisible(true);lyr_25_2.setVisible(true);lyr_26_3.setVisible(true);lyr_27_4.setVisible(true);lyr_28_5.setVisible(true);lyr_29_6.setVisible(true);lyr_30_7.setVisible(true);lyr_MunicipalBoundary_8.setVisible(true);lyr_Roads_9.setVisible(true);lyr_Households_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_24_1,lyr_25_2,lyr_26_3,lyr_27_4,lyr_28_5,lyr_29_6,lyr_30_7,lyr_MunicipalBoundary_8,lyr_Roads_9,lyr_Households_10];
lyr_MunicipalBoundary_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PARTS': 'PARTS', 'UNICIPALB': 'UNICIPALB', 'MUN__NAME': 'MUN__NAME', 'CENRO': 'CENRO', 'ACRES': 'ACRES', 'PARTS_1': 'PARTS_1', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', });
lyr_Roads_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_Households_10.set('fieldAliases', {'fid': 'fid', 'FAMILY-ID': 'FAMILY-ID', 'REGION': 'REGION', 'PROVINCE': 'PROVINCE', 'CITY/MUN': 'CITY/MUN', 'BARANGAY': 'BARANGAY', 'NUMBER OF OCCUPANTS': 'NUMBER OF OCCUPANTS', 'HOUSE OWNERSHIP': 'HOUSE OWNERSHIP', 'CLASSIFICATION': 'CLASSIFICATION', 'STOREYS': 'STOREYS', 'ROOFING': 'ROOFING', 'YEARS BUILT': 'YEARS BUILT', 'OTHER DETAILS': 'OTHER DETAILS', 'RELATION': 'RELATION', 'LAST NAME': 'LAST NAME', 'GIVEN NAME': 'GIVEN NAME', 'MIDDLE NAME': 'MIDDLE NAME', 'AGE': 'AGE', 'SEX': 'SEX', 'OCCUPATION': 'OCCUPATION', });
lyr_MunicipalBoundary_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'PARTS': 'TextEdit', 'UNICIPALB': 'TextEdit', 'MUN__NAME': 'TextEdit', 'CENRO': 'TextEdit', 'ACRES': 'TextEdit', 'PARTS_1': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Roads_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_Households_10.set('fieldImages', {'fid': 'TextEdit', 'FAMILY-ID': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCE': 'TextEdit', 'CITY/MUN': 'TextEdit', 'BARANGAY': 'TextEdit', 'NUMBER OF OCCUPANTS': 'TextEdit', 'HOUSE OWNERSHIP': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'STOREYS': 'TextEdit', 'ROOFING': 'TextEdit', 'YEARS BUILT': 'TextEdit', 'OTHER DETAILS': 'TextEdit', 'RELATION': 'TextEdit', 'LAST NAME': 'TextEdit', 'GIVEN NAME': 'TextEdit', 'MIDDLE NAME': 'TextEdit', 'AGE': 'TextEdit', 'SEX': 'TextEdit', 'OCCUPATION': 'TextEdit', });
lyr_MunicipalBoundary_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PARTS': 'no label', 'UNICIPALB': 'no label', 'MUN__NAME': 'no label', 'CENRO': 'no label', 'ACRES': 'no label', 'PARTS_1': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'no label', });
lyr_Roads_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_Households_10.set('fieldLabels', {'fid': 'no label', 'FAMILY-ID': 'no label', 'REGION': 'no label', 'PROVINCE': 'no label', 'CITY/MUN': 'no label', 'BARANGAY': 'no label', 'NUMBER OF OCCUPANTS': 'no label', 'HOUSE OWNERSHIP': 'no label', 'CLASSIFICATION': 'no label', 'STOREYS': 'no label', 'ROOFING': 'no label', 'YEARS BUILT': 'no label', 'OTHER DETAILS': 'no label', 'RELATION': 'no label', 'LAST NAME': 'header label - visible with data', 'GIVEN NAME': 'header label - visible with data', 'MIDDLE NAME': 'header label - visible with data', 'AGE': 'inline label - always visible', 'SEX': 'no label', 'OCCUPATION': 'no label', });
lyr_Households_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});