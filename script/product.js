import nav from "../components/navbar.js";

document.getElementById("nav").innerHTML = nav()

let data = async () => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    display(data.products)
}
data()

const display = (data) => {
    console.log(data);
    data.map((e) => {
        let img = document.createElement("img")
        img.src = e.thumbnail
        img.setAttribute("class","img")
        let title = document.createElement("h3")
        title.innerHTML = e.title
        let price = document.createElement("h4")
        price.innerHTML = e.price
        let brand = document.createElement("button")
        brand.innerHTML = e.brand
        brand.setAttribute("class","btn btn-dark")
        let category = document.createElement("p")
        category.innerHTML = e.category
        let rating = document.createElement("p")
        rating.innerHTML = e.rating
        let btn1 = document.createElement("button")
        btn1.innerHTML = "Add to cart"
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Buy now"
        btn1.setAttribute("class","btn btn-success ")
        btn2.setAttribute("class","btn btn-secondary ms-2")
        let div = document.createElement("div")
        div.append(img, title, price, brand, category, rating, btn1, btn2)
        document.querySelector(".box2").append(div)
        div.setAttribute("class","my-3 py-5 bg-info fw-bolder")
        
    })
}