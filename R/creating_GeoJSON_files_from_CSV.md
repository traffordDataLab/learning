
## Creating GeoJSON files from CSV

This is a demonstration of how to convert a CSV file containing point data into GeoJSON using the [sf (simple features) package](https://cran.r-project.org/web/packages/sf/vignettes/sf1.html) in R. It assumes that the data file "data.csv" is a cleaned dataset containing columns "Longitude" and "Latitude" which hold the coordinates.

The following code block shows the process step-by-step:

``` R
# Load the required packages
library(tidyverse); library(sf)

# Read in the cleaned data into a dataframe
df <- read_csv("data.csv")

# Convert to a simple features object combining the columns containing the coordinates
df <- st_as_sf(df, coords = c("Longitude", "Latitude"))

# Set the projection as EPSG:4326 (WGS84)
df <- st_set_crs(df, 4326)

# Finally create the GeoJSON file
st_write(obj = df, dsn = "data.geojson")
```

We could also write the above in a more concise way by making use of chaining using the [magrittr pipe](https://cran.r-project.org/web/packages/magrittr/index.html):

``` R
read_csv("data.csv") %>%
  st_as_sf(coords = c("Longitude", "Latitude")) %>%
  st_set_crs(4326) %>%
  st_write("data.geojson")
```
