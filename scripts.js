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


provinces.forEach(element => console.log(element));

console.log("2");

names.forEach(name => console.log(name));

console.log("");

// Log each name with the matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

console.log("3");

provinces.map(element => console.log(element.toUpperCase()));

console.log("4");

names.map(name => console.log(name.length));

console.log("5");

const SortedProvinces = provinces.sort();

console.log(SortedProvinces);

console.log("6");

const filteredprovinces = provinces.filter(element => !element.includes('Cape'));

// Log the count of the array
console.log(`The array has ${filteredprovinces.length} elements.`);

console.log("7");

const updatednames = names.map(Name => Name.includes('S') ? true : false);

console.log(updatednames);

console.log("8");

const object1 = names.reduce((acc, Names , index) => acc[Names] = provinces[index])

console.log(object1);

console.log("9");

products.forEach(element => console.log(element.product));

console.log("");

const filteredproducts = products.filter(element => element.product.length < 5 );
filteredproducts.forEach(element => console.log(element.product));

console.log("");

const var1 = products.filter(element => element.price && !isNaN(element.price)).map (item => Number(item.price)).reduce((acc,item) => acc + item.price, 0);

console.log(var1);

console.log("");

 const var2 = products.reduce((acc, item) => acc + item.product + ',', 0);

 console.log(var2);

 console.log("");

 const var3 = products.filter(element => element.price && !isNaN(element.price)).map (item => ({ ...item, price: Number(item.price) }));
 const highest = var3.reduce((acc, item) => (item.price > acc.price ? item : acc));
 const lowest = var3.reduce((acc, item) => (item.price < acc.price ? item : acc));

  // Format the result
  const result = `Highest: ${highest.product}. Lowest: ${lowest.product}.`;

  console.log(result);

 console.log("");

  const updatedProducts = products.map(product =>
    Object.entries(product).reduce((acc, [key, value]) => {
      const newKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
      acc[newKey] = value;
      return acc;
    }, {})
  );

  console.log(updatedProducts);


