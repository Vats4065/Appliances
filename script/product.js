import nav from "../components/navbar.js";

document.getElementById("nav").innerHTML=nav()

let data=async()=>{
let res=await fetch("https://dummyjson.com/products")
let data=await res.json()
console.log(data.products);
}
data()