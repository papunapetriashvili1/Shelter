window.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    navigation();
    pagination();
    modal();
  })
  
  function toggleMenu() {
    if (window.innerWidth < 768) {
      let sandwichElement = document.querySelector(".sandwich");
      sandwichElement.addEventListener('click', () => {
        sandwichElement.classList.toggle("open");
        sandwichElement.classList.toggle("closed");
        console.log(Array.from(sandwichElement.classList).includes("open"))
        if (Array.from(sandwichElement.classList).includes("open")) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "visible"
        }
      });
    }
  }
  
  function navigation() {
    let menuItems = document.querySelectorAll(".navigation_link");
    addListeners();
    highlightMenuItemsOnScroll();
  
    function addListeners() {
      menuItems.forEach(item => {
        item.addEventListener("click", selectMenuItem);
      })
    }
  
    function reset() {
      menuItems.forEach(item => item.parentNode.classList.remove("selected"));
    }
  
    function selectMenuItem(e) {
      reset();
      this.parentNode.classList.add("selected");
      document.body.style.overflow = "visible";
      let sandwichElement = document.querySelector(".sandwich");
      sandwichElement.classList.toggle("open");
      sandwichElement.classList.toggle("closed");
    }
  
    function highlightMenuItemsOnScroll() {
      window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (scrollDistance < 200) {
          reset();
          menuItems[1].parentNode.classList.add("selected");
        }
      });
    }
  }
  
  function pagination(windowWidth = window.innerWidth) {
    let itemsPerPage = 0;
    if (windowWidth >= 100 && windowWidth < 768) {
      itemsPerPage = 3;
    }
    if (windowWidth >= 768 && windowWidth < 1280) {
      itemsPerPage = 6;
    }
    if (windowWidth >= 1280) {
      itemsPerPage = 8;
    }
    let slides = Array.from(document.querySelectorAll(".friends_item"));
    let slidesQuantity = document.querySelectorAll(".friends_item").length;
    let pagesQuantity = Math.ceil(slidesQuantity / itemsPerPage);
    let pageNumber = 1;
  
    let buttonsParent = document.querySelector(".pagination");
  
    buttonsParent.addEventListener("click", paginate);
  
    function paginate(e) {
      e.preventDefault();
      e.stopPropagation();
  
      let previousPageBtnPressed = Array.from(e.target.classList).includes("pagination_arrow_left");
  
      let nextPageBtnPressed = Array.from(e.target.classList).includes("pagination_arrow_right");
      
      let toFirstPageBtnPressed = Array.from(e.target.classList).includes("pagination_twin-arrow-left");
  
      let toLastPageBtnPressed = Array.from(e.target.classList).includes("pagination_twin-arrow-right");
  
      if (previousPageBtnPressed) {
        previousPage();
      }
  
      if (nextPageBtnPressed) {
        nextPage();
      }
  
      if (toFirstPageBtnPressed) {
        firstPage();
      }
  
      if(toLastPageBtnPressed) {
        lastPage();
      }
    }
  
    function showSlides() {
      reset();
      adjustButtonStyles();
  
      let pageElement = document.querySelector(".pagination_page");
      pageElement.innerHTML = pageNumber;
  
      slides.forEach((slide, idx) => {
        let showFromIdx = ((pageNumber * itemsPerPage) - itemsPerPage);
        let showToIdx = (showFromIdx + itemsPerPage - 1) < slidesQuantity - 1 ? (showFromIdx + itemsPerPage - 1) : slidesQuantity - 1;
        if (idx >= showFromIdx && idx <= showToIdx) {
          slide.classList.add("visible");
        }
      })
    }
  
    function reset() {
      slides.forEach(slide => slide.classList.remove("visible"));
      document.querySelector(".pagination_twin-arrow-left").classList.remove("pagination_disabled");
      document.querySelector(".pagination_twin-arrow-right").classList.remove("pagination_disabled");
      document.querySelector(".pagination_arrow_left").classList.remove("pagination_disabled");
      document.querySelector(".pagination_arrow_right").classList.remove("pagination_disabled");
    }
  
    function nextPage() {
      if (pageNumber < pagesQuantity) {
        pageNumber += 1;
        showSlides();
      }
    }
  
    function previousPage() {
      if (pageNumber > 1) {
        pageNumber -= 1;
        showSlides();
      }
    }
  
    function firstPage() {
      if (pageNumber > 1) {
      pageNumber = 1;
      showSlides();
    }
    }
    
    function lastPage() {
      if (pageNumber < pagesQuantity) {
      pageNumber = pagesQuantity;
      showSlides();
    }
    }
  
    function adjustButtonStyles() {
      if (pageNumber === 1) {
        document.querySelector(".pagination_twin-arrow-left").classList.add("pagination_disabled");
        document.querySelector(".pagination_arrow_left").classList.add("pagination_disabled");
      }
  
      if (pageNumber === pagesQuantity) {
        document.querySelector(".pagination_twin-arrow-right").classList.add("pagination_disabled");
        document.querySelector(".pagination_arrow_right").classList.add("pagination_disabled");
      }
    }
  
    showSlides();
  }
  
  function modal() {
    let animalsData = {
      jennifer: {
        url: "../../assets/images/pets-jennifer.jpg",
        name: "Jennifer",
        breed: "Dog - Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      katrine: {
        url: "../../assets/images/pets-katrine-third.jpg",
        name: "Katrine",
        breed: "Cat - British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "2 months",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      sophia: {
        url: "../../assets/images/pets-katrine-first.jpg",
        name: "Sophia",
        breed: "Dog - Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "2 months",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      woody: {
        url: "../../assets/images/pets-woody.jpg",
        name: "Woody",
        breed: "Dog - Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 1/2 year",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      scarlett: {
        url: "../../assets/images/pets-scarlet.jpg",
        name: "Scarlett",
        breed: "Dog - Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "2 month",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      timmy: {
        url: "../../assets/images/pets-timmy.jpg",
        name: "Timmy",
        breed: "Cat - British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 month",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      freddie: {
        url: "../../assets/images/pets-katrine-second.jpg",
        name: "Freddie",
        breed: "Cat - British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 month",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      charly: {
        url: "../../assets/images/pets-charly.jpg",
        name: "Charly",
        breed: "Dog - Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "3 years",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      },
      promienik: {
        url: "../../assets/images/promienik.png",
        name: "Promienik",
        breed: "Parrot - Lovebird",
        description: "This cute boy, Promienik, is eight years old and he likes everyone and smile all the time. He is the very best friend for everyone. Promienik has lots of energy, and loves to fly and play. He will enjoy every game with you.",
        age: "8 years",
        inoculations: "none",
        diseases: "none",
        parasites: "none"
      }
    }
  
    let parent = document.querySelector(".pets-footer");
    let buttons = document.querySelectorAll(".friends_item");
  
    buttons.forEach(el => {
      el.addEventListener("click", handleBtnClick);
    })
  
    function handleBtnClick(e) {
      let name = this.querySelector(".friends_name").innerText.toLowerCase();
      
      addHtml(animalsData, name, parent);
      document.body.style.overflow = "hidden";
    }
  
    function addHtml(dogData, dogName, elToAppend) {
      const {name, url, breed, description, age, inoculations, diseases, parasites} = dogData[dogName.toLowerCase()];
  
      let markdown = `
      <div class="modal-bg" id="openModal">
      <div class="modal">
        <div class="modal_close_wrapper">
        <a href="#close" class="modal_close"></a></div>
        <div class="modal_image-wrapper">
          <img class="modal_img" src="${url}" alt="${name}">
        </div>
        <div class="modal_text-wrapper">
          <h2 class="modal_name">${name}</h2>
          <p class="modal_breed">${breed}</p>
          <p class="modal_description">${description}</p>
          <ul class="modal_list">
            <li class="modal_item">
              <b>Age</b>: ${age}
            </li>
            <li class="modal_item">
              <b>Inoculations</b>: ${inoculations}
            </li>
            <li class="modal_item">
              <b>Diseases</b>: ${diseases}
            </li>
            <li class="modal_item">
              <b>Parasites</b>: ${parasites}
            </li>
          </ul>
        </div>
      </div>
      </div>
      `
      elToAppend.insertAdjacentHTML('afterend', markdown);
  
      let closeBtn = document.querySelector(".modal_close");
  
      closeModal(closeBtn)
    }
  
    function closeModal(closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        document.querySelector(".modal-bg").remove();
        document.body.style.overflow = "initial";
      })
    };
  
  }