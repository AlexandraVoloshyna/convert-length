import { validate } from "./validate.js";
import { readConversions } from "./readConvertions.js";

function convertLength(inputData) {
  const { distance: { inputUnit, inputValue }, convertToUnit } = inputData

  validate(inputValue)

  if(inputUnit === convertToUnit) return {"unit": inputUnit, "value": inputValue};

  const allConversionRates = readConversions()

    if (!allConversionRates.hasOwnProperty(initialUnit) || !allConversionRates[initialUnit].hasOwnProperty(convertToUnit)) {
      return {"error": "Unsupported units"};
    }

  
    const valueInBaseUnit = inputValue / allConversionRates[inputUnit]["m"];


    const conversionRateToTargetUnit = allConversionRates["m"][convertToUnit];
    const convertedValue = valueInBaseUnit * conversionRateToTargetUnit;
    const roundedConvertedValue = Number(convertedValue.toFixed(2));

 
  return {"unit": convertToUnit, "value": roundedConvertedValue};
  }
  

  


