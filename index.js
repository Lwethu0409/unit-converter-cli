[
    '/usr/bin/node',
    '/home/Thandolwethu/unit-converter/',
    'value',    'fromUnit',
    'toUnit'
]       

const value = Number(process.argv[2]);
const fromUnit = process.argv[3];
const toUnit = process.argv[4]; 

if (process.argv.length !== 5) {
  console.log('Usage: node index.js <value> <fromUnit> <toUnit>');
  process.exit(1);
}

function convertUnits (value, fromUnit, toUnit) {

fromUnit = fromUnit.toLowerCase();
toUnit = toUnit.toLowerCase();

  const categories = {
mass: {
 kg : 1,
 lb : 2.20462,
 g : 1000
},

length :{
 m: 1,
 ft: 3.28084,
 cm: 100
}
}

if(typeof value !== "number" || Number.isNaN(value) || 0 >= value){
 return `${value} is invalid`;
 };

let selectedCategory = null;

for (let category in categories){

  const categoryUnits = categories[category];
  
 if(
  (categoryUnits[fromUnit] !== undefined &&
    categoryUnits[toUnit] !== undefined)
){
   selectedCategory = categoryUnits;
   break;
  }
}

if (!selectedCategory) {
    return `Conversion from ${fromUnit} to ${toUnit} is not supported.`;
  }

 if (fromUnit === toUnit){
  return value;
  };

 const valueInBaseUnit = value / selectedCategory[fromUnit];
 return valueInBaseUnit * selectedCategory[toUnit];

};

const result = convertUnits(value, fromUnit, toUnit);
console.log(`Result: ${result} ${toUnit}`);
