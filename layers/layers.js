var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Barangay_1 = new ol.format.GeoJSON();
var features_Barangay_1 = format_Barangay_1.readFeatures(json_Barangay_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barangay_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barangay_1.addFeatures(features_Barangay_1);
var lyr_Barangay_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barangay_1, 
                style: style_Barangay_1,
                popuplayertitle: 'Barangay',
                interactive: false,
                title: '<img src="styles/legend/Barangay_1.png" /> Barangay'
            });
var format_Municipality_2 = new ol.format.GeoJSON();
var features_Municipality_2 = format_Municipality_2.readFeatures(json_Municipality_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipality_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipality_2.addFeatures(features_Municipality_2);
var lyr_Municipality_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipality_2, 
                style: style_Municipality_2,
                popuplayertitle: 'Municipality',
                interactive: false,
                title: '<img src="styles/legend/Municipality_2.png" /> Municipality'
            });
var format_Province_3 = new ol.format.GeoJSON();
var features_Province_3 = format_Province_3.readFeatures(json_Province_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_3.addFeatures(features_Province_3);
var lyr_Province_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_3, 
                style: style_Province_3,
                popuplayertitle: 'Province',
                interactive: false,
                title: '<img src="styles/legend/Province_3.png" /> Province'
            });
var lyr_30_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '30<br />\
    <img src="styles/legend/30_4_0.png" /> 0.0010<br />\
    <img src="styles/legend/30_4_1.png" /> 2.3258<br />\
    <img src="styles/legend/30_4_2.png" /> 4.6505<br />\
    <img src="styles/legend/30_4_3.png" /> 6.9753<br />\
    <img src="styles/legend/30_4_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/30_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_29_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '29<br />\
    <img src="styles/legend/29_5_0.png" /> 0.0010<br />\
    <img src="styles/legend/29_5_1.png" /> 2.3258<br />\
    <img src="styles/legend/29_5_2.png" /> 4.6505<br />\
    <img src="styles/legend/29_5_3.png" /> 6.9753<br />\
    <img src="styles/legend/29_5_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/29_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_28_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '28<br />\
    <img src="styles/legend/28_6_0.png" /> 0.0010<br />\
    <img src="styles/legend/28_6_1.png" /> 2.3258<br />\
    <img src="styles/legend/28_6_2.png" /> 4.6505<br />\
    <img src="styles/legend/28_6_3.png" /> 6.9753<br />\
    <img src="styles/legend/28_6_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/28_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_27_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '27<br />\
    <img src="styles/legend/27_7_0.png" /> 0.0010<br />\
    <img src="styles/legend/27_7_1.png" /> 2.3258<br />\
    <img src="styles/legend/27_7_2.png" /> 4.6505<br />\
    <img src="styles/legend/27_7_3.png" /> 6.9753<br />\
    <img src="styles/legend/27_7_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/27_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_26_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '26<br />\
    <img src="styles/legend/26_8_0.png" /> 0.0010<br />\
    <img src="styles/legend/26_8_1.png" /> 2.3258<br />\
    <img src="styles/legend/26_8_2.png" /> 4.6505<br />\
    <img src="styles/legend/26_8_3.png" /> 6.9753<br />\
    <img src="styles/legend/26_8_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/26_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_25_9 = new ol.layer.Image({
        opacity: 1,
        
    title: '25<br />\
    <img src="styles/legend/25_9_0.png" /> 0.0010<br />\
    <img src="styles/legend/25_9_1.png" /> 2.3258<br />\
    <img src="styles/legend/25_9_2.png" /> 4.6505<br />\
    <img src="styles/legend/25_9_3.png" /> 6.9753<br />\
    <img src="styles/legend/25_9_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/25_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var lyr_24_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '24<br />\
    <img src="styles/legend/24_10_0.png" /> 0.0010<br />\
    <img src="styles/legend/24_10_1.png" /> 2.3258<br />\
    <img src="styles/legend/24_10_2.png" /> 4.6505<br />\
    <img src="styles/legend/24_10_3.png" /> 6.9753<br />\
    <img src="styles/legend/24_10_4.png" /> 9.3000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/24_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13540235.716279, 1947216.452722, 13566724.528428, 1971690.071692]
        })
    });
var format_Households_11 = new ol.format.GeoJSON();
var features_Households_11 = format_Households_11.readFeatures(json_Households_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Households_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Households_11.addFeatures(features_Households_11);
var lyr_Households_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Households_11, 
                style: style_Households_11,
                popuplayertitle: 'Households',
                interactive: true,
                title: '<img src="styles/legend/Households_11.png" /> Households'
            });
var format_Roads_12 = new ol.format.GeoJSON();
var features_Roads_12 = format_Roads_12.readFeatures(json_Roads_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_12.addFeatures(features_Roads_12);
var lyr_Roads_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_12, 
                style: style_Roads_12,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_12.png" /> Roads'
            });
var group_FloodExtent = new ol.layer.Group({
                                layers: [lyr_30_4,lyr_29_5,lyr_28_6,lyr_27_7,lyr_26_8,lyr_25_9,lyr_24_10,],
                                fold: 'open',
                                title: 'Flood Extent'});
var group_GeoraphicalBoundaries = new ol.layer.Group({
                                layers: [lyr_Barangay_1,lyr_Municipality_2,lyr_Province_3,],
                                fold: 'open',
                                title: 'Georaphical Boundaries'});

// ---- MODIFIED VISIBILITY OF lyr_24_10 BASED ON DROPDOWN ----

// Set all layers to visible
lyr_Basemap_0.setVisible(true);
lyr_Barangay_1.setVisible(true);
lyr_Municipality_2.setVisible(false);
lyr_Province_3.setVisible(true);
// Set all flood extent layers initially invisible
lyr_30_4.setVisible(true);
lyr_29_5.setVisible(true);
lyr_28_6.setVisible(false);
lyr_27_7.setVisible(false);
lyr_26_8.setVisible(false);
lyr_25_9.setVisible(false);
lyr_24_10.setVisible(false);
lyr_Households_11.setVisible(true);
lyr_Roads_12.setVisible(true);

// --- Set visible flood extent based on dropdown ---
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('floodExtentDropdown');
    // Map dropdown values to their corresponding layer variables
    var floodLayers = {
        "24": lyr_24_10,
        "25": lyr_25_9,
        "26": lyr_26_8,
        "27": lyr_27_7,
        "28": lyr_28_6,
        "29": lyr_29_5,
        "30": lyr_30_4
    };
    function updateFloodLayerVisibility() {
        var selected = dropdown ? dropdown.value : "";
        // Hide all flood extent layers
        Object.keys(floodLayers).forEach(function(key) {
            floodLayers[key].setVisible(false);
        });
        // Show only the layer matching the selected dropdown value, if valid
        if (floodLayers[selected]) {
            floodLayers[selected].setVisible(true);
        }
    }
    if (dropdown) {
        dropdown.addEventListener('change', updateFloodLayerVisibility);
        // Set initial state
        updateFloodLayerVisibility();
    }
});

var layersList = [lyr_Basemap_0,group_GeoraphicalBoundaries,group_FloodExtent,lyr_Households_11,lyr_Roads_12];
lyr_Barangay_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Municipality_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Province_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Households_11.set('fieldAliases', {'fid': 'fid', 'FAMILY-ID': 'Family ID', 'REGION': 'REGION', 'PROVINCE': 'PROVINCE', 'CITY/MUN': 'CITY/MUN', 'BARANGAY': 'BARANGAY', 'NUMBER OF OCCUPANTS': 'Household Size', 'HOUSE OWNERSHIP': 'HOUSE OWNERSHIP', 'CLASSIFICATION': 'CLASSIFICATION', 'STOREYS': 'STOREYS', 'ROOFING': 'ROOFING', 'YEARS BUILT': 'YEARS BUILT', 'OTHER DETAILS': 'OTHER DETAILS', 'RELATION': 'RELATION', 'LAST NAME': 'Last Name', 'GIVEN NAME': 'Given Name', 'MIDDLE NAME': 'Middle Name', 'AGE': 'Age', 'SEX': 'Sex', 'OCCUPATION': 'Occupation', });
lyr_Roads_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_Barangay_1.set('fieldImages', {'GID_3': '', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Municipality_2.set('fieldImages', {'GID_2': '', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': '', 'VARNAME_2': '', 'NL_NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'CC_2': '', 'HASC_2': '', });
lyr_Province_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Households_11.set('fieldImages', {'fid': 'TextEdit', 'FAMILY-ID': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCE': 'TextEdit', 'CITY/MUN': 'TextEdit', 'BARANGAY': 'TextEdit', 'NUMBER OF OCCUPANTS': 'TextEdit', 'HOUSE OWNERSHIP': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'STOREYS': 'TextEdit', 'ROOFING': 'TextEdit', 'YEARS BUILT': 'TextEdit', 'OTHER DETAILS': 'TextEdit', 'RELATION': 'TextEdit', 'LAST NAME': 'TextEdit', 'GIVEN NAME': 'TextEdit', 'MIDDLE NAME': 'TextEdit', 'AGE': 'TextEdit', 'SEX': 'TextEdit', 'OCCUPATION': 'TextEdit', });
lyr_Roads_12.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'surface': '', 'maxspeed': '', 'ref': '', });
lyr_Barangay_1.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Municipality_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Province_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Households_11.set('fieldLabels', {'fid': 'hidden field', 'FAMILY-ID': 'hidden field', 'REGION': 'hidden field', 'PROVINCE': 'hidden field', 'CITY/MUN': 'hidden field', 'BARANGAY': 'header label - visible with data', 'NUMBER OF OCCUPANTS': 'header label - visible with data', 'HOUSE OWNERSHIP': 'hidden field', 'CLASSIFICATION': 'hidden field', 'STOREYS': 'hidden field', 'ROOFING': 'hidden field', 'YEARS BUILT': 'hidden field', 'OTHER DETAILS': 'hidden field', 'RELATION': 'hidden field', 'LAST NAME': 'header label - visible with data', 'GIVEN NAME': 'header label - visible with data', 'MIDDLE NAME': 'header label - visible with data', 'AGE': 'header label - visible with data', 'SEX': 'header label - visible with data', 'OCCUPATION': 'header label - visible with data', });
lyr_Roads_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_Roads_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// --- Add listener for flood extent dropdown to toggle 24m layer ---
// Assumes dropdown has id="floodExtentDropdown", and option text/value for 24 meters is "24 meters"
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('floodExtentDropdown');
    if (dropdown) {
        var handleFloodExtentChange = function() {
            if (dropdown.value === "24 meters" || dropdown.options[dropdown.selectedIndex].text === "24 meters") {
                lyr_24_10.setVisible(true);
            } else {
                lyr_24_10.setVisible(false);
            }
        };
        dropdown.addEventListener('change', handleFloodExtentChange);
        // Set initial state in case dropdown is preset
        handleFloodExtentChange();
    }
});