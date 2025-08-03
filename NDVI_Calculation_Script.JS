// This script calculates NDVI for a given shapefile and adds a legend.

// =================================================================================
// 1. Define Area of Interest (AOI) from a Shapefile
// =================================================================================
// IMPORTANT: Replace the path below with the asset path to YOUR shapefile.
// You can get this by navigating to your shapefile in the 'Assets' tab and clicking 'Copy asset ID'.
var aoi = ee.FeatureCollection("projects/gjob-467917/assets/Tigray_zones");

// Center the map on the shapefile.
Map.centerObject(aoi, 8);

// =================================================================================
// 2. Filter Sentinel-2 Imagery and Calculate NDVI
// =================================================================================
// Load the Sentinel-2 Level-2A collection.
var image = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
              .filterDate('2024-10-01', '2025-03-31')
              .filterBounds(aoi)
              .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
              .median()
              .clip(aoi); // Clip the final image to the shapefile boundary.

// Calculate NDVI.
var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');

// =================================================================================
// 3. Set up Visualization and Display the NDVI Layer
// =================================================================================
var ndviPalette = ['#a52a2a', '#ffff00', '#006400'];
var ndviVisParams = {
  min: 0.0,
  max: 0.8,
  palette: ndviPalette
};
Map.addLayer(ndvi, ndviVisParams, 'NDVI');

// =================================================================================
// 4. Create and Add a Legend to the Map
// =================================================================================
// Create a panel to hold the legend.
var legend = ui.Panel({
  style: {
    position: 'bottom-left',
    padding: '8px 15px'
  }
});

// Create a legend title.
var legendTitle = ui.Label({
  value: 'NDVI Legend',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '0 0 4px 0',
    padding: '0'
  }
});
legend.add(legendTitle);

// Function to create a legend row (color box + label).
var makeRow = function(color, name) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: '#' + color,
      padding: '8px',
      margin: '0 0 4px 0'
    }
  });
  var description = ui.Label({
    value: name,
    style: {margin: '0 0 4px 6px'}
  });
  return ui.Panel({
    widgets: [colorBox, description],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
};

// Define the palette and labels for the legend.
var palette = ['006400', 'ffff00', 'a52a2a'];
var names = ['High Vegetation', 'Moderate Vegetation / Cropland', 'Bare Soil / Low Vegetation'];

// Add color and names to the legend.
for (var i = 0; i < 3; i++) {
  legend.add(makeRow(palette[i], names[i]));
}

// Add the legend to the map.
ui.root.add(legend);
