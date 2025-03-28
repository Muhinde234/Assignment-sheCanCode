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
console.log("added new product:")

let newProduct={
    name:"Desk",
    price:150,
    category:"Furniture"
}

const AddedProduct=products.push(newProduct)
console.log(products)


// using find to get the details of the product named watch
console.log("displaying the product with the name' watch':")

const findName=products.find(productName=>productName.name === "Watch")
console.log(findName)


// using map to create an new array of product name only
 console.log("the array of the product name only:")

 const newArray=products.map((productName)=>productName.name)
 console.log(newArray)

 // using filter to get all products that cost more than 100
 console.log("the products that cost more than 100 :")

 const productCost=products.filter((cost)=>cost.price>100)
 console.log(productCost)


 // using forEach to diaplay product's name and price in the format
 console.log("iterating through the array using foreach loop:")

 const displayArrayInfo=products.forEach((product) => {
    console.log(`the product: ${product.name} and price : ${product.price} `)
 });

 // using reduce to calculate the total cost of all products in the array

 console.log("the total cost  of all products in the array:")
 const totalCost=products.reduce((sum,item)=>sum+item.price,0)
 console.log(totalCost)

 //Part two simple UI to display array in HMTL element

 const productListDiv = document.getElementById("product-list");
 products.forEach((product) => {
    productListDiv.innerHTML += `
      <p>Product: ${product.name}, Price: $${product.price}</p>
    `;
  });
