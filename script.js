let http = new XMLHttpRequest();
http.open('get','products.json',true);
http.send();

http.onload = function(){

    if(this.readyState == 4 && this.status == 200){

        let products =JSON.parse(this.responseText);

        let output="";
        for(let item of products){
        
            output+=`
            <div class="product" id="${item.id}">
            <p class="category">${item.category}</p>
            <p class="brand">${item.brand}</p>
            <div class="frame" style="background-image: url('${item.thumbnail}')"></div>
            <p class="title">${item.title}</p>
            <p class="description">${item.description}</p>
            <p class="price">
            <span>&#8377;</span>
            <span>${item.price}</span>
            </p>
            <span class="discount">final discount : ${item.discountPercentage}</span>
            <p class="stock">
            Available stock : ${item.stock}
            </p>
            <p class="rating">User Rating: ${item.rating}>
            </p>
            </div>
            `;
        }
        document.querySelector(".products").innerHTML=output;

const searchInput=document.querySelector(".search-field")
searchInput.addEventListener("input",e=>{
    const value=e.target.value.toLowerCase()
for(let i=1;i<31;i++)
{
    var element =document.getElementById(i)
   if(!products[i-1].title.toLowerCase().includes(value) && !products[i-1].description.toLowerCase().includes(value))
   {
        element.style.display="none"
   }else
   {
    element.style.display=""
   }
}
 

}
)
    }
}