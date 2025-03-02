function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString();
}
