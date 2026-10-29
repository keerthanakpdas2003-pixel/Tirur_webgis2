var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_SLOPE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_2_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_2_1.png" /> 15.8323<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8449610.404509, 1219730.951545, 8454224.183237, 1225900.082443]
        })
    });
var lyr_HILL_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILL<br />\
    <img src="styles/legend/HILL_3_0.png" /> 1<br />\
    <img src="styles/legend/HILL_3_1.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILL_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8449628.643511, 1219745.000822, 8454205.111453, 1225885.963968]
        })
    });
var lyr_DEM_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM <br />\
    <img src="styles/legend/DEM_4_0.png" /> 0<br />\
    <img src="styles/legend/DEM_4_1.png" /> 13<br />\
    <img src="styles/legend/DEM_4_2.png" /> 27<br />\
    <img src="styles/legend/DEM_4_3.png" /> 40<br />\
    <img src="styles/legend/DEM_4_4.png" /> 53<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8449610.404509, 1219730.951545, 8454224.183237, 1225900.082443]
        })
    });
var format_GEOLOGY_5 = new ol.format.GeoJSON();
var features_GEOLOGY_5 = format_GEOLOGY_5.readFeatures(json_GEOLOGY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_5.addFeatures(features_GEOLOGY_5);
var lyr_GEOLOGY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_5, 
                style: style_GEOLOGY_5,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_5_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_5_1.png" /> Sand and Silt<br />' });
var format_GEOMORPHOLOGY_6 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_6 = format_GEOMORPHOLOGY_6.readFeatures(json_GEOMORPHOLOGY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_6.addFeatures(features_GEOMORPHOLOGY_6);
var lyr_GEOMORPHOLOGY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_6, 
                style: style_GEOMORPHOLOGY_6,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_0.png" /> Coastal Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_1.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_2.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_3.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_4.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_5.png" /> Water Body<br />' });
var format_TIRUR_7 = new ol.format.GeoJSON();
var features_TIRUR_7 = format_TIRUR_7.readFeatures(json_TIRUR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIRUR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIRUR_7.addFeatures(features_TIRUR_7);
var lyr_TIRUR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TIRUR_7, 
                style: style_TIRUR_7,
                popuplayertitle: 'TIRUR',
                interactive: false,
                title: '<img src="styles/legend/TIRUR_7.png" /> TIRUR'
            });
var format_SETTLEMENTS_8 = new ol.format.GeoJSON();
var features_SETTLEMENTS_8 = format_SETTLEMENTS_8.readFeatures(json_SETTLEMENTS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETTLEMENTS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETTLEMENTS_8.addFeatures(features_SETTLEMENTS_8);
var lyr_SETTLEMENTS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETTLEMENTS_8, 
                style: style_SETTLEMENTS_8,
                popuplayertitle: 'SETTLEMENTS',
                interactive: true,
                title: '<img src="styles/legend/SETTLEMENTS_8.png" /> SETTLEMENTS'
            });
var format_ROAD_9 = new ol.format.GeoJSON();
var features_ROAD_9 = format_ROAD_9.readFeatures(json_ROAD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_9.addFeatures(features_ROAD_9);
var lyr_ROAD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_9, 
                style: style_ROAD_9,
                popuplayertitle: 'ROAD',
                interactive: true,
                title: '<img src="styles/legend/ROAD_9.png" /> ROAD'
            });
var format_RAILWAYTRACK_10 = new ol.format.GeoJSON();
var features_RAILWAYTRACK_10 = format_RAILWAYTRACK_10.readFeatures(json_RAILWAYTRACK_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAYTRACK_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAYTRACK_10.addFeatures(features_RAILWAYTRACK_10);
var lyr_RAILWAYTRACK_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAYTRACK_10, 
                style: style_RAILWAYTRACK_10,
                popuplayertitle: 'RAILWAY TRACK',
                interactive: true,
                title: '<img src="styles/legend/RAILWAYTRACK_10.png" /> RAILWAY TRACK'
            });
var format_CONTOUR_11 = new ol.format.GeoJSON();
var features_CONTOUR_11 = format_CONTOUR_11.readFeatures(json_CONTOUR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_11.addFeatures(features_CONTOUR_11);
var lyr_CONTOUR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_11, 
                style: style_CONTOUR_11,
                popuplayertitle: 'CONTOUR',
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_11.png" /> CONTOUR'
            });
var format_STREAM_12 = new ol.format.GeoJSON();
var features_STREAM_12 = format_STREAM_12.readFeatures(json_STREAM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM_12.addFeatures(features_STREAM_12);
var lyr_STREAM_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM_12, 
                style: style_STREAM_12,
                popuplayertitle: 'STREAM',
                interactive: true,
                title: '<img src="styles/legend/STREAM_12.png" /> STREAM'
            });
var format_WARD_TIRUR_13 = new ol.format.GeoJSON();
var features_WARD_TIRUR_13 = format_WARD_TIRUR_13.readFeatures(json_WARD_TIRUR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARD_TIRUR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARD_TIRUR_13.addFeatures(features_WARD_TIRUR_13);
var lyr_WARD_TIRUR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARD_TIRUR_13, 
                style: style_WARD_TIRUR_13,
                popuplayertitle: 'WARD_TIRUR',
                interactive: true,
    title: 'WARD_TIRUR<br />\
    <img src="styles/legend/WARD_TIRUR_13_0.png" /> ALINCHUVADU<br />\
    <img src="styles/legend/WARD_TIRUR_13_1.png" /> BUS STAND<br />\
    <img src="styles/legend/WARD_TIRUR_13_2.png" /> CHEMBRA<br />\
    <img src="styles/legend/WARD_TIRUR_13_3.png" /> CHEMBRA NORTH<br />\
    <img src="styles/legend/WARD_TIRUR_13_4.png" /> EZHUR EAST<br />\
    <img src="styles/legend/WARD_TIRUR_13_5.png" /> EZHUR SOUTH<br />\
    <img src="styles/legend/WARD_TIRUR_13_6.png" /> EZHUR WEST<br />\
    <img src="styles/legend/WARD_TIRUR_13_7.png" /> ILLATHPARAMBU<br />\
    <img src="styles/legend/WARD_TIRUR_13_8.png" /> KALLINGAL<br />\
    <img src="styles/legend/WARD_TIRUR_13_9.png" /> KANCHIRAKUND<br />\
    <img src="styles/legend/WARD_TIRUR_13_10.png" /> KOLARKUNDU<br />\
    <img src="styles/legend/WARD_TIRUR_13_11.png" /> KOOTHPARAMB<br />\
    <img src="styles/legend/WARD_TIRUR_13_12.png" /> KOTT EAST<br />\
    <img src="styles/legend/WARD_TIRUR_13_13.png" /> KOTT WEST<br />\
    <img src="styles/legend/WARD_TIRUR_13_14.png" /> MICHABHOOMI<br />\
    <img src="styles/legend/WARD_TIRUR_13_15.png" /> MUTHUR<br />\
    <img src="styles/legend/WARD_TIRUR_13_16.png" /> MYLADIKUNNU<br />\
    <img src="styles/legend/WARD_TIRUR_13_17.png" /> NADUVILANGADI<br />\
    <img src="styles/legend/WARD_TIRUR_13_18.png" /> NORTH ANNARA<br />\
    <img src="styles/legend/WARD_TIRUR_13_19.png" /> PAIGOTTUPADAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_20.png" /> PANAMBALAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_21.png" /> PARANNEKKAD<br />\
    <img src="styles/legend/WARD_TIRUR_13_22.png" /> PATTUPARAMBU<br />\
    <img src="styles/legend/WARD_TIRUR_13_23.png" /> PERUVAZHIYAMBALAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_24.png" /> POOGOTUKULAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_25.png" /> POOKAYIL<br />\
    <img src="styles/legend/WARD_TIRUR_13_26.png" /> PORUR<br />\
    <img src="styles/legend/WARD_TIRUR_13_27.png" /> SOUTH ANNARA<br />\
    <img src="styles/legend/WARD_TIRUR_13_28.png" /> THALAPPALLIPADAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_29.png" /> THAZHEPALAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_30.png" /> THEKKUMURI EAST<br />\
    <img src="styles/legend/WARD_TIRUR_13_31.png" /> THEKKUMURI SOUTH<br />\
    <img src="styles/legend/WARD_TIRUR_13_32.png" /> THUMARAKKAVU<br />\
    <img src="styles/legend/WARD_TIRUR_13_33.png" /> THUNCHANPARAMBU<br />\
    <img src="styles/legend/WARD_TIRUR_13_34.png" /> THUNCHANPARAMBU NORTH<br />\
    <img src="styles/legend/WARD_TIRUR_13_35.png" /> TOWNHALL<br />\
    <img src="styles/legend/WARD_TIRUR_13_36.png" /> TRIKKANDIYUR<br />\
    <img src="styles/legend/WARD_TIRUR_13_37.png" /> TRIKKANDIYUR EAST<br />\
    <img src="styles/legend/WARD_TIRUR_13_38.png" /> VARIYATHARA<br />\
    <img src="styles/legend/WARD_TIRUR_13_39.png" /> VISHUPADAM<br />\
    <img src="styles/legend/WARD_TIRUR_13_40.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SLOPE_2.setVisible(true);lyr_HILL_3.setVisible(true);lyr_DEM_4.setVisible(true);lyr_GEOLOGY_5.setVisible(true);lyr_GEOMORPHOLOGY_6.setVisible(true);lyr_TIRUR_7.setVisible(true);lyr_SETTLEMENTS_8.setVisible(true);lyr_ROAD_9.setVisible(true);lyr_RAILWAYTRACK_10.setVisible(true);lyr_CONTOUR_11.setVisible(true);lyr_STREAM_12.setVisible(true);lyr_WARD_TIRUR_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_SLOPE_2,lyr_HILL_3,lyr_DEM_4,lyr_GEOLOGY_5,lyr_GEOMORPHOLOGY_6,lyr_TIRUR_7,lyr_SETTLEMENTS_8,lyr_ROAD_9,lyr_RAILWAYTRACK_10,lyr_CONTOUR_11,lyr_STREAM_12,lyr_WARD_TIRUR_13];
lyr_GEOLOGY_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'rock_group': 'rock_group', 'name': 'name', });
lyr_GEOMORPHOLOGY_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'name': 'name', 'type1': 'type1', 'type2': 'type2', });
lyr_TIRUR_7.set('fieldAliases', {'id': 'id', });
lyr_SETTLEMENTS_8.set('fieldAliases', {'source': 'source', 'height': 'height', 'bbox.xmax': 'bbox.xmax', 'bbox.xmin': 'bbox.xmin', 'bbox.ymax': 'bbox.ymax', 'bbox.ymin': 'bbox.ymin', });
lyr_ROAD_9.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_RAILWAYTRACK_10.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_CONTOUR_11.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_STREAM_12.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_WARD_TIRUR_13.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOLOGY_5.set('fieldImages', {'ogc_fid': 'TextEdit', 'rock_group': 'TextEdit', 'name': 'TextEdit', });
lyr_GEOMORPHOLOGY_6.set('fieldImages', {'ogc_fid': '', 'name': '', 'type1': '', 'type2': '', });
lyr_TIRUR_7.set('fieldImages', {'id': 'TextEdit', });
lyr_SETTLEMENTS_8.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', 'bbox.xmax': 'TextEdit', 'bbox.xmin': 'TextEdit', 'bbox.ymax': 'TextEdit', 'bbox.ymin': 'TextEdit', });
lyr_ROAD_9.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_RAILWAYTRACK_10.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_CONTOUR_11.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_STREAM_12.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_WARD_TIRUR_13.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOLOGY_5.set('fieldLabels', {'ogc_fid': 'no label', 'rock_group': 'no label', 'name': 'no label', });
lyr_GEOMORPHOLOGY_6.set('fieldLabels', {'ogc_fid': 'no label', 'name': 'no label', 'type1': 'no label', 'type2': 'no label', });
lyr_TIRUR_7.set('fieldLabels', {'id': 'no label', });
lyr_SETTLEMENTS_8.set('fieldLabels', {'source': 'no label', 'height': 'no label', 'bbox.xmax': 'no label', 'bbox.xmin': 'no label', 'bbox.ymax': 'no label', 'bbox.ymin': 'no label', });
lyr_ROAD_9.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_RAILWAYTRACK_10.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_CONTOUR_11.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_STREAM_12.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_WARD_TIRUR_13.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WARD_TIRUR_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});