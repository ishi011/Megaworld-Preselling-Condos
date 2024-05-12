document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("ParkMckinleyWest")) {
    ParkMckinleyWest();
  }
  if (document.getElementById("UptownArtsResidence")) {
    UptownArtsResidence();
  }
  if (document.getElementById("UptownModern")) {
    UptownModern();
  }
  if (document.getElementById("9CentralPark")) {
    _9CentralPark();
  }
});
//=========================== ParkMckinleyWest
function ParkMckinleyWest() {
  const ParkMckinleyWestfacadeImagePaths = [
    "./img/ParkMckinleyWest/Facade/1.png",
    "./img/ParkMckinleyWest/Facade/2.png",
    "./img/ParkMckinleyWest/Facade/3.png",
    "./img/ParkMckinleyWest/Facade/4.png",
    "./img/ParkMckinleyWest/Facade/5.png",
    "./img/ParkMckinleyWest/Facade/6.png",
    "./img/ParkMckinleyWest/Facade/7.png",
    "./img/ParkMckinleyWest/Facade/8.png",
    "./img/ParkMckinleyWest/Facade/9.png",
  ];
  generateSlides("Facade1", ParkMckinleyWestfacadeImagePaths);

  const ParkMckinleyWestactualImagePaths = [
    "./img/ParkMckinleyWest/1BedroomUnit/1.png",
    "./img/ParkMckinleyWest/1BedroomUnit/2.png",
    "./img/ParkMckinleyWest/1BedroomUnit/3.png",
    "./img/ParkMckinleyWest/1BedroomUnit/4.png",
    "./img/ParkMckinleyWest/1BedroomUnit/5.png",
    "./img/ParkMckinleyWest/1BedroomUnit/6.png",
    "./img/ParkMckinleyWest/1BedroomUnit/7.png",
    "./img/ParkMckinleyWest/1BedroomUnit/8.png",
    "./img/ParkMckinleyWest/1BedroomUnit/9.png",
    "./img/ParkMckinleyWest/1BedroomUnit/10.png",
    "./img/ParkMckinleyWest/1BedroomUnit/11.png",
  ];
  generateSlides("Actual1", ParkMckinleyWestactualImagePaths);

  const ParkMckinleyWestactualImagePaths2 = [
    "./img/ParkMckinleyWest/2BedroomUnit/1.png",
    "./img/ParkMckinleyWest/2BedroomUnit/2.png",
    "./img/ParkMckinleyWest/2BedroomUnit/3.png",
    "./img/ParkMckinleyWest/2BedroomUnit/4.png",
    "./img/ParkMckinleyWest/2BedroomUnit/5.png",
    "./img/ParkMckinleyWest/2BedroomUnit/6.png",
    "./img/ParkMckinleyWest/2BedroomUnit/7.png",
    "./img/ParkMckinleyWest/2BedroomUnit/8.png",
  ];
  generateSlides("Actual2", ParkMckinleyWestactualImagePaths2);

  const ParkMckinleyWestFloorplanImagePaths = [
    "./img/ParkMckinleyWest/Floorplan/1.png",
    "./img/ParkMckinleyWest/Floorplan/2.png",
    "./img/ParkMckinleyWest/Floorplan/3.png",
    "./img/ParkMckinleyWest/Floorplan/4.png",
    "./img/ParkMckinleyWest/Floorplan/5.png",
    "./img/ParkMckinleyWest/Floorplan/6.png",
  ];
  generateSlides("Floorplan", ParkMckinleyWestFloorplanImagePaths);
  const ParkMckinleyWestgridItemsData = [
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/1.png",
      title: "1 Bedroom Unit with Balcony",
      subtitle: "",
      area: 35,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/2.png",
      title: "1 Bedroom Unit with Balcony",
      subtitle: "",
      area: 48,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/3.png",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 110,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/4.png",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 106,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/5.png",
      title: "2 Bedroom Unit with Balcony",
      subtitle: "",
      area: 106,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/6.png",
      title: "3 Bedroom Unit with Balcony",
      subtitle: "",
      area: 118.5,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/7.png",
      title: "3 Bedroom PH with Balcony",
      subtitle: "",
      area: 212,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/8.png",
      title: "5 Bedroom Unit with Balcony",
      subtitle: "",
      area: 339.5,
    },
    {
      imageSrc: "./img/ParkMckinleyWest/UnitLayout/9.png",
      title: "Executive 1 Bedroom PH with Balcony",
      subtitle: "",
      area: 70.5,
    },
    // Add more objects for each grid item...
  ];
  generateGridItems("CardsUnitLayout", ParkMckinleyWestgridItemsData);
}
//=========================== UptownArtsResidence
function UptownArtsResidence() {
  const UptownArtsResidence_FacadeimagePaths = [
    "./img/UptownArtsResidence/Facade/1.png",
    "./img/UptownArtsResidence/Facade/2.png",
    "./img/UptownArtsResidence/Facade/3.png",
    "./img/UptownArtsResidence/Facade/4.png",
    "./img/UptownArtsResidence/Facade/5.png",
    "./img/UptownArtsResidence/Facade/6.png",
    "./img/UptownArtsResidence/Facade/7.png",
    "./img/UptownArtsResidence/Facade/8.png",
    "./img/UptownArtsResidence/Facade/9.png",
  ];
  generateSlides("Facade1", UptownArtsResidence_FacadeimagePaths);
  const UptownArtsResidence_FloorplanimagePaths = [
    "./img/UptownArtsResidence/Floorplan/1.png",
    "./img/UptownArtsResidence/Floorplan/2.png",
    "./img/UptownArtsResidence/Floorplan/3.png",
    "./img/UptownArtsResidence/Floorplan/4.png",
    "./img/UptownArtsResidence/Floorplan/5.png",
    "./img/UptownArtsResidence/Floorplan/6.png",
  ];
  generateSlides("Floorplan", UptownArtsResidence_FloorplanimagePaths);
  const UptownArtsResidence_gridItemsData = [
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/1.png",
      title: "3 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 128.5,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/2.png",
      title: "1 Bedroom Unit with Balcony",
      subtitle: "UNIT B, C, D, E & H",
      area: 41.5,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/3.png",
      title: "Executive 2 Bedroom with Balconyy",
      subtitle: "UNIT F",
      area: 96,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/4.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT I",
      area: 84,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/5.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT J",
      area: 57,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/6.png",
      title: "Executive 1 Bedroom with Balcony",
      subtitle: "UNIT K",
      area: 58.5,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/7.png",
      title: "3 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 125.5,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/8.png",
      title: "Executive 2 Bedroom with Balcony",
      subtitle: "UNIT F",
      area: 96.5,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/9.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT I",
      area: 84,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/10.png",
      title: "Executive 1 Bedroom with Balcony",
      subtitle: "UNIT K",
      area: 60,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/11.png",
      title: "Executive 2 Bedroom with Balcony",
      subtitle: "UNIT F",
      area: 97,
    },
    {
      imageSrc: "./img/UptownArtsResidence/UnitLayouts/12.png",
      title: "Executive 1 Bedroom with Balcony",
      subtitle: "UNIT K",
      area: 60.5,
    },
    // Add more objects for each grid item...
  ];
  generateGridItems("CardsUnitLayout", UptownArtsResidence_gridItemsData);
}
//=========================== UptownModern
function UptownModern() {
  const UptownModern_FacadeimagePaths = [];
  for (let i = 1; i <= 7; i++) {
    UptownModern_FacadeimagePaths.push(`./img/UptownModern/Facade/${i}.png`);
  }
  generateSlides("Facade1", UptownModern_FacadeimagePaths);
  const UptownModern_AmenitiesimagePaths = [];
  for (let i = 1; i <= 21; i++) {
    UptownModern_AmenitiesimagePaths.push(
      `./img/UptownModern/Amenities/${i}.jpg`
    );
  }
  generateSlides("Amenities", UptownModern_AmenitiesimagePaths);
  const UptownModern_FloorplanimagePaths = [];
  for (let i = 1; i <= 5; i++) {
    UptownModern_FloorplanimagePaths.push(
      `./img/UptownModern/Floorplan/${i}.png`
    );
  }
  generateSlides("Floorplan", UptownModern_FloorplanimagePaths);
  const UptownModern_UnitRenderimagePaths = [];
  for (let i = 1; i <= 11; i++) {
    UptownModern_UnitRenderimagePaths.push(
      `./img/UptownModern/UnitRenders/${i}.jpg`
    );
  }
  generateSlides("UnitRender", UptownModern_UnitRenderimagePaths);
  const UptownModern_gridItemsData = [
    {
      imageSrc: "./img/UptownModern/UnitLayouts/1.png",
      title: "Studio",
      subtitle: "UNIT A",
      area: 40,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/2.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 92,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/3.png",
      title: "Studio with Balcony",
      subtitle: "UNIT B",
      area: 44.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/4.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT P",
      area: 86,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/5.png",
      title: "3 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 125.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/6.png",
      title: "3 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 127,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/7.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT E",
      area: 58.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/8.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT H",
      area: 51,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/9.png",
      title: "Studio with Balcony",
      subtitle: "UNIT AA",
      area: 48.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/10.png",
      title: "3 Bedroom with Balcony",
      subtitle: "UNIT C",
      area: 134.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/11.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT B",
      area: 64.5,
    },
    {
      imageSrc: "./img/UptownModern/UnitLayouts/12.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT E",
      area: 97,
    },
  ];

  generateGridItems("CardsUnitLayout", UptownModern_gridItemsData);
}
//=========================== 9CentralPark
function _9CentralPark() {
  const UptownModern_FacadeimagePaths = [];
  for (let i = 1; i <= 22; i++) {
    UptownModern_FacadeimagePaths.push(`./img/_9CentralPark/Facade/${i}.jpg`);
  }
  generateSlides("Facade1", UptownModern_FacadeimagePaths);
  const UptownModern_FloorplanimagePaths = [];
  for (let i = 1; i <= 7; i++) {
    UptownModern_FloorplanimagePaths.push(
      `./img/_9CentralPark/Floorplan/${i}.png`
    );
  }
  generateSlides("Floorplan", UptownModern_FloorplanimagePaths);
  const UnitRenderimagePaths = [];
  for (let i = 1; i <= 32; i++) {
    UnitRenderimagePaths.push(`./img/_9CentralPark/UnitRenders/${i}.jpg`);
  }
  generateSlides("UnitRender", UnitRenderimagePaths);
  const gridItemsData = [
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/1.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 55.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/2.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT C",
      area: 59,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/3.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT C",
      area: 35.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/4.png",
      title: "Studio with Balcony",
      subtitle: "UNIT B",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/5.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 100,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/6.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT E",
      area: 66,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/7.png",
      title: "Studio with Balcony",
      subtitle: "UNIT N",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/8.png",
      title: "1 Bedroom with Balcony",
      subtitle: "UNIT D",
      area: 54,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/9.png",
      title: "2 Bedroom with Balcony",
      subtitle: "UNIT A",
      area: 93,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/10.png",
      title: "Studio with Balcony",
      subtitle: "UNIT H",
      area: 35.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/11.png",
      title: "Studio with Balcony",
      subtitle: "UNIT E",
      area: 36.5,
    },
    {
      imageSrc: "./img/_9CentralPark/UnitLayout/12.png",
      title: "Studio with Balcony",
      subtitle: "UNIT F",
      area: 35.5,
    },
  ];

  generateGridItems("CardsUnitLayout", gridItemsData);
}
//============================================================
function generateSlides(containerId, imagePaths) {
  const container = document.getElementById(containerId);

  // Check if container exists
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  const content = container.querySelector(".__content");
  const dotsContainer = container.querySelector(".dots-container");

  // Check if nested elements exist
  if (!content) {
    console.error("Content element not found inside the container.");
    return;
  }

  if (!dotsContainer) {
    console.error("Dots container element not found inside the container.");
    return;
  }

  let slideIndex = 0;

  imagePaths.forEach((path, index) => {
    // Create slide elements
    const slide = document.createElement("div");
    slide.classList.add("slide", "fade");
    slide.innerHTML = `<img src="${path}" alt="" />`;

    const slide1 = document.createElement("div");
    slide1.classList.add("slide1", "blur");
    slide1.innerHTML = `<img src="${path}" alt="" />`;

    // Append slides to content
    content.appendChild(slide);
    content.appendChild(slide1);

    // Create dot element
    const dot = document.createElement("span");
    dot.classList.add("dot");

    // Add click event listener to dots
    dot.addEventListener("click", () => {
      showSlide(index);
    });

    // Append dot to dotsContainer
    dotsContainer.appendChild(dot);
  });

  // Initialize slideshow
  const slides = content.querySelectorAll(".slide");
  const slides1 = content.querySelectorAll(".slide1");
  const dots = dotsContainer.querySelectorAll(".dot");

  const showSlide = (index) => {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides1.forEach((slide1) => (slide1.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].style.display = "block";
    slides1[index].style.display = "block";
    dots[index].classList.add("active");

    slideIndex = index;
  };

  const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  };

  const prevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  };

  container.querySelector(".prev").addEventListener("click", prevSlide);
  container.querySelector(".next").addEventListener("click", nextSlide);

  // Show first slide initially
  showSlide(slideIndex);

  // Slideshow initialization
  const initSlides = () => {
    slides.forEach((slide, index) => {
      slide.classList.remove("fade");
      slide.style.display = "none";
    });
    slides1.forEach((slide1, index) => {
      slide1.classList.remove("blur");
      slide1.style.display = "none";
    });
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("fade");
    slides[slideIndex].style.display = "block";
    slides1[slideIndex].classList.add("blur");
    slides1[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  };

  let slideshowInterval = setInterval(nextSlide, 10000);

  container.addEventListener("mouseenter", () => {
    clearInterval(slideshowInterval);
  });

  container.addEventListener("mouseleave", () => {
    slideshowInterval = setInterval(nextSlide, 10000);
  });

  slides1.forEach((slide1, i) => {
    slide1.addEventListener("click", () => {
      showSlide(i);
    });
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  initSlides();
}

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//============================================================
function generateGridItems(containerId, gridItemsData) {
  const container = document.getElementById(containerId);

  gridItemsData.forEach((itemData) => {
    // Create grid item container
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Create image element
    const image = document.createElement("img");
    image.src = itemData.imageSrc;

    // Create title element
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = itemData.title;

    const subtitle = document.createElement("div");
    subtitle.classList.add("subtitle");
    subtitle.textContent = itemData.subtitle;

    // Create details element
    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `<i class="fas fa-maximize"></i> ${parseFloat(
      itemData.area
    ).toFixed(2)} SQM`;

    // Create "GET QUOTE" button
    const quoteBtn = document.createElement("a");
    quoteBtn.href = "./ContactUs.html";
    quoteBtn.classList.add("btn");
    quoteBtn.textContent = "GET QUOTE";

    // Append elements to grid item container
    gridItem.appendChild(image);
    gridItem.appendChild(title);
    gridItem.appendChild(subtitle);
    gridItem.appendChild(details);
    gridItem.appendChild(quoteBtn);

    // Append grid item to container
    container.appendChild(gridItem);
  });
}
