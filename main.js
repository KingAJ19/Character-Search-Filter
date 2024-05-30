let products = {
    data: [
      {
        productName: "Satoru Gojo",
        category: "JJK",
        image: "Images/Characters/JJK/gojo.png",
      },
      {
        productName: "Yuji Itadori",
        category: "JJK",
        image: "Images/Characters/JJK/yuji.png",
      },
      {
        productName: "Toji Fushiguro",
        category: "JJK",
        image: "Images/Characters/JJK/toji.jpg",
      },
      {
        productName: "Rika Orimoto",
        category: "JJK",
        image: "Images/Characters/JJK/rika.webp",
      },
      {
        productName: "Sukuna",
        category: "JJK",
        image: "Images/Characters/JJK/sukuna.png",
      },
      {
        productName: "Atsuya Kusakabe",
        category: "JJK",
        image: "Images/Characters/JJK/Kusakabe.webp",
      },
      {
        productName: "Shoko Ieri",
        category: "JJK",
        image: "Images/Characters/JJK/Shoko.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Rin Amai",
        category: "JJK",
        image: "Images/Characters/JJK/Rin.webp",
      },
      {
        productName: "Riko Amanai",
        category: "JJK",
        image: "Images/Characters/JJK/Riko.webp",
      },
      {
        productName: "Ryu Ishigori",
        category: "JJK",
        image: "Images/Characters/JJK/Ryu.webp",
      },
      {
        productName: "Fumihiko Takaba",
        category: "JJK",
        image: "Images/Characters/JJK/Takaba.webp",
      },
      {
        productName: "Takako Uro",
        category: "JJK",
        image: "Images/Characters/JJK/Takako.webp",
      },
      {
        productName: "Tengen",
        category: "JJK",
        image: "Images/Characters/JJK/Tengen.webp",
      },
      {
        productName: "Aoi Todo",
        category: "JJK",
        image: "Images/Characters/JJK/Todo.webp",
      },
      {
        productName: "Yorozu",
        category: "JJK",
        image: "Images/Characters/JJK/Yorozu.webp",
      },
      {
        productName: "Yu Haibara",
        category: "JJK",
        image: "Images/Characters/JJK/Yu.webp",
      },
      {
        productName: "Yuki Tsukomo",
        category: "JJK",
        image: "Images/Characters/JJK/Yuki.webp",
      },
      {
        productName: "Yuta Okkotsu",
        category: "JJK",
        image: "Images/Characters/JJK/Yuta.webp",
      },
      {
        productName: "Remi",
        category: "JJK",
        image: "Images/Characters/JJK/Remi.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
      {
        productName: "Masamichi Yaga",
        category: "JJK",
        image: "Images/Characters/JJK/Yaga.webp",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  