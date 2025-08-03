NDVI Analysis for Tigray, Ethiopia

This repository contains a Google Earth Engine (GEE) script to calculate, visualize, and export Normalized Difference Vegetation Index (NDVI) for the Tigray region of Ethiopia using Sentinel-2 satellite imagery.
📌 Features

    Calculates NDVI for Tigray administrative zones

    Filters dry season (Oct 2024 - Mar 2025) Sentinel-2 imagery

    Applies cloud masking (<10% cloud cover)

    Visualizes NDVI with a color-coded legend (bare soil to dense vegetation)

    Exports results as a 10m-resolution GeoTIFF to Google Drive

🚀 How to Use

    Open the script in Google Earth Engine

    Run the script to compute NDVI

    Check the "Tasks" tab to export the GeoTIFF to Google Drive

    Download the file for further analysis in GIS software (QGIS, ArcGIS)

📂 Output

    GeoTIFF file (NDVI_Tigray.tif) with:

        10m spatial resolution

        WGS84 (EPSG:4326) projection

        NDVI values ranging from -1 to 1 (visualized 0–0.8)

🛠️ Customization

    Adjust date range (filterDate) for different seasons

    Modify cloud threshold (CLOUDY_PIXEL_PERCENTAGE)

    Change export settings (resolution, CRS, output folder)

📊 Applications

    Agricultural monitoring

    Drought assessment

    Vegetation health analysis

📜 License

This project is open-source under the MIT License.

🔗 Related Resources

    Google Earth Engine

    Sentinel-2 Data

    NDVI Explanation

💡 For questions or improvements, feel free to open an issue or contribute! 🚀
