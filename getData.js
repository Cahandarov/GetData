var main = document.querySelector("#main");
window = document.querySelector("window");
var search = document.querySelector("#search");
var select = document.getElementById("category");
var data;

window.addEventListener("load", () => {
    main.innerHTML = "";
    axios
        .get("https://dummyjson.com/products")
        .then((res) => {
            data = res.data.products;
         
            getData(res.data.products);


        })

})

function getData(arr) {
    main.innerHTML = "";
   arr.forEach((el, index) => {
        main.innerHTML += `<div class="lines">
      <div class="lineleft">
      <div class="idbox">
                <div class="id">${el.id}</div>
            </div>
            <img src="${el.images[0]}" alt="" class = "images">
      </div>
      <div class="linecenter">
          <div class="centertop">
              <p class="title">${el.title}</p>
              <div class="price">${el.price}</div>
          </div>
          <p class="description">${el.description}</p>
          <p class="category">${el.category}</p>
      </div>
      <div class="linerigth">
          <div class="linerigthtop">
              <p class="rating">${el.rating}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                      d="M9.19434 7.09473C9.43739 7.09473 9.64389 7.00956 9.81384 6.83923C9.98417 6.66928 10.0693 6.46278 10.0693 6.21973C10.0693 5.97667 9.98417 5.77017 9.81384 5.60023C9.64389 5.42989 9.43739 5.34473 9.19434 5.34473C8.95128 5.34473 8.74478 5.42989 8.57484 5.60023C8.4045 5.77017 8.31934 5.97667 8.31934 6.21973C8.31934 6.46278 8.4045 6.66928 8.57484 6.83923C8.74478 7.00956 8.95128 7.09473 9.19434 7.09473ZM5.111 7.09473C5.35406 7.09473 5.56056 7.00956 5.7305 6.83923C5.90084 6.66928 5.986 6.46278 5.986 6.21973C5.986 5.97667 5.90084 5.77017 5.7305 5.60023C5.56056 5.42989 5.35406 5.34473 5.111 5.34473C4.86795 5.34473 4.66145 5.42989 4.4915 5.60023C4.32117 5.77017 4.236 5.97667 4.236 6.21973C4.236 6.46278 4.32117 6.66928 4.4915 6.83923C4.66145 7.00956 4.86795 7.09473 5.111 7.09473ZM7.15267 10.8864C7.81378 10.8864 8.41423 10.6993 8.954 10.3252C9.49339 9.95073 9.88461 9.45723 10.1277 8.84473H9.16517C8.95128 9.20445 8.667 9.48873 8.31234 9.69756C7.95728 9.90678 7.57073 10.0114 7.15267 10.0114C6.73461 10.0114 6.34806 9.90678 5.993 9.69756C5.63834 9.48873 5.35406 9.20445 5.14017 8.84473H4.17767C4.42073 9.45723 4.81214 9.95073 5.35192 10.3252C5.89131 10.6993 6.49156 10.8864 7.15267 10.8864ZM7.15267 13.5114C6.34573 13.5114 5.58739 13.3582 4.87767 13.0517C4.16795 12.7457 3.55059 12.3301 3.02559 11.8051C2.50059 11.2801 2.08506 10.6628 1.779 9.95306C1.47256 9.24334 1.31934 8.485 1.31934 7.67806C1.31934 6.87112 1.47256 6.11278 1.779 5.40306C2.08506 4.69334 2.50059 4.07598 3.02559 3.55098C3.55059 3.02598 4.16795 2.61025 4.87767 2.30381C5.58739 1.99775 6.34573 1.84473 7.15267 1.84473C7.95961 1.84473 8.71795 1.99775 9.42767 2.30381C10.1374 2.61025 10.7548 3.02598 11.2798 3.55098C11.8048 4.07598 12.2203 4.69334 12.5263 5.40306C12.8328 6.11278 12.986 6.87112 12.986 7.67806C12.986 8.485 12.8328 9.24334 12.5263 9.95306C12.2203 10.6628 11.8048 11.2801 11.2798 11.8051C10.7548 12.3301 10.1374 12.7457 9.42767 13.0517C8.71795 13.3582 7.95961 13.5114 7.15267 13.5114ZM7.15267 12.3447C8.45545 12.3447 9.55892 11.8926 10.4631 10.9885C11.3673 10.0843 11.8193 8.98084 11.8193 7.67806C11.8193 6.37528 11.3673 5.27181 10.4631 4.36764C9.55892 3.46348 8.45545 3.01139 7.15267 3.01139C5.84989 3.01139 4.74642 3.46348 3.84225 4.36764C2.93809 5.27181 2.486 6.37528 2.486 7.67806C2.486 8.98084 2.93809 10.0843 3.84225 10.9885C4.74642 11.8926 5.84989 12.3447 7.15267 12.3447Z"
                      fill="#696969" />
              </svg>
              <p class="score">score</p>
          </div>
          <button class="btn">More info</button>
          <p class="compare">Compare prices</p>
      </div>
  </div>`;
    });
}

function searched_Text(searched_Text) {
    axios
        .get(`https://dummyjson.com/products/search?q=${searched_Text}`)
        .then((res) => {
            data = res.data.products;
            getData(data);
        })
}

search.addEventListener("input", function () {
    searched_Text(search.value);
});

axios
.get(`https://dummyjson.com/products/categories`)
.then((res) => {
    res.data.forEach((el, index) => {
        select.innerHTML +=`
    <option value="${el}">${el}</option>
    `
    })
})

select.addEventListener("change", (e)=> {
    filteredBY_Category(e.target.value);
});

function filteredBY_Category(cat) {
    console.log(cat)
    axios.get(`https://dummyjson.com/products/category/${cat}`)
        .then((res) => {
            data = res.data.products;
            getData(data);
        })
}





