// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// logging each province to the console.
provinces.forEach(element => console.log(element));

// logging each name to the console.
names.forEach(name => console.log(name));

console.log("");

// Log each name with the matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

console.log("");
// Created a new array of province names in all uppercase
provinces.map(element => console.log(element.toUpperCase()));

console.log("");

// Created a new array using map that contains the length of each name
names.map(name => console.log(name.length));

console.log("");

//Used sort to alphabetically sort the provinces
const SortedProvinces = provinces.sort();

console.log(SortedProvinces);

console.log("");

// Used filter to remove provinces containing "Cape"
const filteredprovinces = provinces.filter(element => !element.includes('Cape'));

// Log the count of the array
console.log(`The array has ${filteredprovinces.length} elements.`);

console.log("");

// Created a boolean array using map and some to determine if a name contains the letter 'S'.
const updatednames = names.map(Name => Name.includes('S') ? true : false);
// Logged the output
console.log(updatednames);

console.log("");
// Use reduce to transform the names array into an object mapping names to their respective provinces.
const object1 = names.reduce((acc, Names , index) => acc[Names] = provinces[index])

console.log(object1);

console.log("");
//Iterated over the products array, logging each product name.
products.forEach(element => console.log(element.product));

console.log("");
//Filtered out products with names longer than 5 characters.
const filteredproducts = products.filter(element => element.product.length < 5 );
filteredproducts.forEach(element => console.log(element.product));

console.log("");
//Filtered out products without prices, convert string prices to numbers, and calculate the total price using reduce
const var1 = products.filter(element => element.price && !isNaN(element.price)).map (item => Number(item.price)).reduce((acc,item) => acc + item.price, 0);

console.log(var1);

console.log("");
 //Used reduce to concatenate all product names into a single string
 const var2 = products.reduce((acc, item) => acc + item.product + ',', 0);

 console.log(var2);

 console.log("");
 //Identified the highest and lowest-priced items
 const var3 = products.filter(element => element.price && !isNaN(element.price)).map (item => ({ ...item, price: Number(item.price) }));
 const highest = var3.reduce((acc, item) => (item.price > acc.price ? item : acc));
 const lowest = var3.reduce((acc, item) => (item.price < acc.price ? item : acc));

  // Returned a string formatted as "Highest: X. Lowest: Y."
  const result = `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
 // Logged output 
  console.log(result);

 console.log("");

  //Used Object.entries and reduce. Recreated the products object with keys 'name' and 'cost', maintaining their original values.
  const updatedProducts = products.map(product =>
    Object.entries(product).reduce((acc, [key, value]) => {
      // Checks if the key is 'product' and replace it with 'name' and key is 'price' and replaces it with 'cost'
      const newKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
      acc[newKey] = value;
      return acc;
    }, {})
  );
 // Logged output 
  console.log(updatedProducts);


