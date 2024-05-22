// Create variables targetting the relevant DOM elements here 👇
var randomBtn = document.querySelector('.random-cover-button');
var makeNewBtn = document.querySelector('.make-new-button');
var saveBtn = document.querySelector('.save-cover-button');
var viewSavedBtn = document.querySelector('.view-saved-button');
var homeImg = document.querySelector('.cover-image');
var homeTitle = document.querySelector('.cover-title');
var homeDesc1 = document.querySelector('.tagline-1');
var homeDesc2 = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var homeBtn = document.querySelector('.home-button');
//var currentCover = createRandomCover();

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomBtn.addEventListener('click', createRandomCover);
makeNewBtn.addEventListener('click', makeNewCover); 
viewSavedBtn.addEventListener('click', viewSavedCovers); 
homeBtn.addEventListener('click', home);


// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function createRandomCover() {
  var randomCover = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)];
  homeImg.src = randomCover;
  homeTitle.innerText = randomTitle;
  homeDesc1.innerText = randomDescriptor1;
  homeDesc2.innerText = randomDescriptor2;
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function makeNewCover() {
  show(formView);
  hide(homeView);
  hide(savedView);
  show(homeBtn);
  hide(saveBtn);
  hide(randomBtn);
}

function viewSavedCovers() {
  show(savedView);
  show(homeBtn);
  hide(homeView);
  hide(saveBtn);
  hide(randomBtn);
  hide(formView);
}

function home() {
  hide(homeBtn);
  show(homeView);
  show(randomBtn);
  show(saveBtn);
  hide(formView);
}
