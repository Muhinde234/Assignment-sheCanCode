const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];

//  pushing the new product to the array by using push


let newProduct={
    name:"Desk",
    price:150,
    category:"Furniture"
}

let Addedproduct=products.push(newProduct);
console.log("Added new product:", products);


// using find to get the details of the product named watch

const watchProduct = products.find(product => product.name === "Watch");
console.log("Details of 'Watch':", watchProduct);

// using map to create an new array of product name only
 console.log("the array of the product name only:")

 const productNameOnly=products.map((productName)=>productName.name)
 console.log(productNameOnly)

 // using filter to get all products that cost more than 100


 const expensiveProducts = products.filter(product => product.price > 100);
console.log("Products costing more than $100:", expensiveProducts);


 // using forEach to diaplay product's name and price in the format
 console.log("iterating through the array using foreach loop:")

 const displayArrayInfo=products.forEach((product) => {
    console.log(`the product: ${product.name} and price : ${product.price} `)
 });

 // using reduce to calculate the total cost of all products in the array

 const totalCost=products.reduce((sum,item)=>sum+item.price,0)
 console.log("Total cost of all products:", totalCost)

 //Part two simple UI to display array in HMTL element

 const productDisplay = document.getElementById('productDisplay');

// Use forEach to display all products in the HTML
products.forEach(product => {
    const productElement = document.createElement('p');
    productElement.textContent = `Product: ${product.name}, Price: $${product.price}`;
    productDisplay.appendChild(productElement);
});
