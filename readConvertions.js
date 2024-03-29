import * as fs from "fs" 

export function readConversions(){
    const conversionRatesRaw = fs.readFileSync('extraConversionRates.json');
    const extraConversionRates = JSON.parse(conversionRatesRaw);


  const conversionRates = {
    "m":  {"cm": 100, "in": 39.3701, "ft": 3.28084, "mm": 1000, "yd": 1.09361, "km": 0.001},
    "cm": {"m": 0.01, "in": 0.393701, "ft": 0.0328084, "mm": 10, "yd": 0.0109361, "km": 0.00001},
    "in": {"m": 0.0254, "cm": 2.54, "ft": 0.0833333, "mm": 25.4, "yd": 0.0277778, "km": 0.0000254},
    "ft": {"m": 0.3048, "cm": 30.48, "in": 12, "mm": 304.8, "yd": 0.333333, "km": 0.0003048}
  };

   return  {
   ...conversionRates,
   ...extraConversionRates
  };
  
  }