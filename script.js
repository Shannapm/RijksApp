// api
// var objectNumber = ("BK-17496");
const api_url =  'https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q='
// const api_detail = `https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=8jCQGxIv&format=json&ps=40`

async function getAPI(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}
getAPI();

async function getAPIDetail() {
  const response = await fetch(api_detail);
  const data = await response.json();
  console.log(data);
}

// getAPIDetail();



// Galery Looks
const imageA = document.querySelector('#item-image1')
const imageB = document.querySelector('#item-image2')
const imageC = document.querySelector('#item-image3')
const titleA = document.querySelector('#item-text1')
const titleB = document.querySelector('#item-text2')
const titleC = document.querySelector('#item-text3')

// trying to make it shorter... 
// document.querySelectorAll('.image-container').forEach(item => {
//   item.addEventListener('mouseover', () => {
//     document.querySelectorAll('.titles').forEach (item => {
//       classList.toggle.('selected')
//     }})


// IMAGE HOVER
imageA.addEventListener('mouseover', () => {
  titleA.classList.add('selected')
  // imageA.classList.add('img-hover')
})

imageB.addEventListener('mouseover', () => {
  titleB.classList.add('selected')
})
imageC.addEventListener('mouseover', () => {
  titleC.classList.add('selected')

})

imageA.addEventListener('mouseleave', () => {
  titleA.classList.remove('selected')
  titleA.classList.remove('img-hover')
})
imageB.addEventListener('mouseleave', () => {
  titleB.classList.remove('selected')
})
imageC.addEventListener('mouseleave', () => {
  titleC.classList.remove('selected')
  
})


// Naming
const firstIMG = document.querySelector('#firstIMG');
const secondIMG = document.querySelector('#secondIMG');
const thirdIMG = document.querySelector('#thirdIMG');

const firstArtist = document.querySelector('#firstArtist');
const secondArtist = document.querySelector('#secondArtist');
const thirdArtist = document.querySelector('#thirdArtist');

const firstTitle = document.querySelector('#firstTitle')
const secondTitle = document.querySelector('#secondTitle')
const thirdTitle = document.querySelector('#thirdTitle')


var imageNumber = 0;
var imageNumberB = 1;
var imageNumberC = 2;

var titleNumber = 0;
var titleNumberB = 1;
var titleNumberC = 2;
var artistNumber = 0;
var artistNumberB = 1;
var artistNumberC = 2;

//On page load, default images loader:
  document.addEventListener('DOMContentLoaded', async function(event){
  event.preventDefault();
  const res = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=`)
  
  firstIMG.src = res.data.artObjects[imageNumber].webImage.url;
  secondIMG.src = res.data.artObjects[imageNumberB].webImage.url;
  thirdIMG.src = res.data.artObjects[imageNumberC].webImage.url;
  
  firstArtist.innerText = res.data.artObjects[imageNumber].principalOrFirstMaker;
  secondArtist.innerText = res.data.artObjects[imageNumberB].principalOrFirstMaker;
  thirdArtist.innerText = res.data.artObjects[imageNumberC].principalOrFirstMaker;
  
  firstTitle.innerText = res.data.artObjects[imageNumber].title;
  secondTitle.innerText = res.data.artObjects[imageNumberB].title;
  thirdTitle.innerText = res.data.artObjects[imageNumberC].title;
  console.log(res.data)

  firstIMG.addEventListener('error', slideRight)
  secondIMG.addEventListener('error', errorSecondIMGRight)
  thirdIMG.addEventListener('error', errorThirdIMGRight);
})

// search input
const search = document.querySelector('form')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')

btn.addEventListener('click', () => {
  // Reset to always begin at beginning arr when new searchterm:
  imageNumber = 0;
  imageNumberB = 1;
  imageNumberC = 2;
  titleNumber = 0;
  titleNumberB = 1;
  titleNumberC = 2;
  artistNumber = 0;
  artistNumberB = 1;
  artistNumberC = 2;
  search.classList.toggle('active');
  input.focus(); 
})



// Search Reqeust
search.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = search.elements.query.value
  const res = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
  
  firstIMG.src = res.data.artObjects[imageNumber].webImage.url;
  secondIMG.src = res.data.artObjects[imageNumberB].webImage.url;
  thirdIMG.src = res.data.artObjects[imageNumberC].webImage.url;
    
        
  firstArtist.innerText = res.data.artObjects[artistNumber].principalOrFirstMaker;
  secondArtist.innerText = res.data.artObjects[artistNumberB].principalOrFirstMaker;
  thirdArtist.innerText = res.data.artObjects[artistNumberC].principalOrFirstMaker;
  
  firstTitle.innerText = res.data.artObjects[titleNumber].title;
  secondTitle.innerText = res.data.artObjects[titleNumberB].title;
  thirdTitle.innerText = res.data.artObjects[titleNumberC].title;

  firstIMG.addEventListener('error', slideRight)
  secondIMG.addEventListener('error', errorSecondIMGRight)
  thirdIMG.addEventListener('error', errorThirdIMGRight);
  
  console.log(res.data);
  window.ToLeleft = function (){};

})  

// Arrows
const arrowRight = document.querySelector('.arrow-right')
const arrowLeft = document.querySelector('.arrow-left')

async function slideRight() {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)

  if (result.data.artObjects[imageNumber].hasImage === false){
    firstIMG.src = result.data.artObjects[imageNumber]
    imageNumber++
  } else if  (imageNumber < result.data.artObjects.length - 3 && imageNumber < 27){
    firstIMG.src = result.data.artObjects[imageNumber].webImage.url;
    imageNumber++;
  }

  if (result.data.artObjects[imageNumberB].hasImage === false){
    secondIMG.src = result.data.artObjects[imageNumberB]
    imageNumberB++;
  } else if (imageNumberB < result.data.artObjects.length - 2 && imageNumberB < 28){
    secondIMG.src = result.data.artObjects[imageNumberB].webImage.url;
    imageNumberB++;
  }

  if (result.data.artObjects[imageNumberC].hasImage === false){
    thirdIMG.src = result.data.artObjects[imageNumberC]
    imageNumberC++;
  } else if (imageNumberC < result.data.artObjects.length - 1 && imageNumberC < 29){
    thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
    imageNumberC++;
  }

  
  firstTitle.innerText = result.data.artObjects[titleNumber].title;
  if (result.data.artObjects[imageNumber].hasImage === false || titleNumber < result.data.artObjects.length - 3 && titleNumber < 27){
    titleNumber++;
  }

  secondTitle.innerText = result.data.artObjects[titleNumberB].title;
  if (titleNumberB < result.data.artObjects.length - 2  && titleNumberB < 28 ||result.data.artObjects[imageNumberB].hasImage === false ){
    titleNumberB++;
      }

  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length - 1 && titleNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC++;
      }
      
  firstArtist.innerText = result.data.artObjects[artistNumber].principalOrFirstMaker;
    if (artistNumber < result.data.artObjects.length - 3 && artistNumber < 27 || result.data.artObjects[imageNumber].hasImage === false) {
        artistNumber++;
      }
  secondArtist.innerText = result.data.artObjects[artistNumberB].principalOrFirstMaker;
    if (artistNumberB < result.data.artObjects.length - 2 && artistNumberB < 28 || result.data.artObjects[imageNumberB].hasImage === false) {
        artistNumberB++;
      }
  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length - 1 && artistNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC++;
      }
      
      console.log(firstTitle.innerText)
      console.log(secondTitle.innerText)
      console.log(thirdTitle.innerText)
      // console.log(result.data.facets)
    }
    
    async function slideLeft() {
      const searchTerm = search.elements.query.value
      const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)

      if (result.data.artObjects[imageNumber].hasImage === false){
        firstIMG.src = result.data.artObjects[imageNumber]
        imageNumber--;
      } else if  (imageNumber < result.data.artObjects.length && imageNumber > 0){
        firstIMG.src = result.data.artObjects[imageNumber].webImage.url;
        imageNumber--;;
      }
    
      if (result.data.artObjects[imageNumberB].hasImage === false){
        secondIMG.src = result.data.artObjects[imageNumberB]
        imageNumberB--;
      } else if (imageNumberB < result.data.artObjects.length && imageNumberB > 1){
        secondIMG.src = result.data.artObjects[imageNumberB].webImage.url;
        imageNumberB--;
      }
    
      if (result.data.artObjects[imageNumberC].hasImage === false){
        thirdIMG.src = result.data.artObjects[imageNumberC]
        imageNumberC--;
      } else if (imageNumberC < result.data.artObjects.length && imageNumberC > 2){
        thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
        imageNumberC--;
      }

      firstTitle.innerText = result.data.artObjects[titleNumber].title;
  if (result.data.artObjects[imageNumber].hasImage === false || titleNumber < result.data.artObjects.length  && titleNumber > 0){
    titleNumber--;
  }

  secondTitle.innerText = result.data.artObjects[titleNumberB].title;
  if (titleNumberB < result.data.artObjects.length  && titleNumberB > 1 || result.data.artObjects[imageNumberB].hasImage === false ){
    titleNumberB--;
      }

  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length && titleNumberC > 2|| result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC--;
      }

    firstArtist.innerText = result.data.artObjects[artistNumber].principalOrFirstMaker;
    if (artistNumber < result.data.artObjects.length && artistNumber > 0 || result.data.artObjects[imageNumber].hasImage === false) {
        artistNumber--;
      }
  secondArtist.innerText = result.data.artObjects[artistNumberB].principalOrFirstMaker;
    if (artistNumberB < result.data.artObjects.length && artistNumberB > 1 || result.data.artObjects[imageNumberB].hasImage === false) {
        artistNumberB--;
      }
  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length && artistNumberC > 2 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC --;
      }
  }

  // If Image does not exist: 
  // Make sure the images move up a place and if the second or third image has an error, the previous stay the same
 
  async function errorSecondIMGRight() {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
  
  if (result.data.artObjects[imageNumberB].hasImage === false){
    secondIMG.src = result.data.artObjects[imageNumberB]
    imageNumberB++;
  } else if (imageNumberB < result.data.artObjects.length - 2 && imageNumberB < 28){
    secondIMG.src = result.data.artObjects[imageNumberB].webImage.url;
    imageNumberB++;
  }

  if (result.data.artObjects[imageNumberC].hasImage === false){
    thirdIMG.src = result.data.artObjects[imageNumberC]
    imageNumberC++;
  } else if (imageNumberC < result.data.artObjects.length - 1 && imageNumberC < 29){
    thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
    imageNumberC++;
  }

  secondTitle.innerText = result.data.artObjects[titleNumberB].title;
  if (titleNumberB < result.data.artObjects.length - 2  && titleNumberB < 28 ||result.data.artObjects[imageNumberB].hasImage === false ){
    titleNumberB++;
      }

  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length - 1 && titleNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC++;
      }
      
  secondArtist.innerText = result.data.artObjects[artistNumberB].principalOrFirstMaker;
    if (artistNumberB < result.data.artObjects.length - 2 && artistNumberB < 28 || result.data.artObjects[imageNumberB].hasImage === false) {
        artistNumberB++;
      }
  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length - 1 && artistNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC++;
      }
      
      console.log(thirdTitle.innerText)
    }

async function errorThirdIMGRight() {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
      

  if (result.data.artObjects[imageNumberC].hasImage === false){
    thirdIMG.src = result.data.artObjects[imageNumberC]
    imageNumberC++;
  } else if (imageNumberC < result.data.artObjects.length - 1 && imageNumberC < 29){
    thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
    imageNumberC++;
  }


  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length - 1 && titleNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC++;
      }

  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length - 1 && artistNumberC < 29 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC++;
      }
      
    }

async function errorSecondIMGLeft(){
  const searchTerm = search.elements.query.value
      const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
      if (result.data.artObjects[imageNumberB].hasImage === false){
        secondIMG.src = result.data.artObjects[imageNumberB]
        imageNumberB--;
      } else if (imageNumberB < result.data.artObjects.length && imageNumberB > 1){
        secondIMG.src = result.data.artObjects[imageNumberB].webImage.url;
        imageNumberB--;
      }
    
      if (result.data.artObjects[imageNumberC].hasImage === false){
        thirdIMG.src = result.data.artObjects[imageNumberC]
        imageNumberC--;
      } else if (imageNumberC < result.data.artObjects.length && imageNumberC > 2){
        thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
        imageNumberC--;
      }

  secondTitle.innerText = result.data.artObjects[titleNumberB].title;
  if (titleNumberB < result.data.artObjects.length  && titleNumberB > 1 || result.data.artObjects[imageNumberB].hasImage === false ){
    titleNumberB--;
      }

  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length && titleNumberC > 2|| result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC--;
      }
  secondArtist.innerText = result.data.artObjects[artistNumberB].principalOrFirstMaker;
    if (artistNumberB < result.data.artObjects.length && artistNumberB > 1 || result.data.artObjects[imageNumberB].hasImage === false) {
        artistNumberB--;
      }
  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length && artistNumberC > 2 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC --;
      }
  }

async function errorThirdIMGLeft() {
  const searchTerm = search.elements.query.value
      const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
    
      if (result.data.artObjects[imageNumberC].hasImage === false){
        thirdIMG.src = result.data.artObjects[imageNumberC]
        imageNumberC--;
      } else if (imageNumberC < result.data.artObjects.length && imageNumberC > 2){
        thirdIMG.src = result.data.artObjects[imageNumberC].webImage.url;
        imageNumberC--;
      }


  thirdTitle.innerText = result.data.artObjects[titleNumberC].title;
    if (titleNumberC < result.data.artObjects.length && titleNumberC > 2|| result.data.artObjects[imageNumberC].hasImage === false){
        titleNumberC--;
      }

  thirdArtist.innerText = result.data.artObjects[artistNumberC].principalOrFirstMaker;
    if (artistNumberC < result.data.artObjects.length && artistNumberC > 2 || result.data.artObjects[imageNumberC].hasImage === false) {
        artistNumberC --;
      }
  }

  arrowRight.addEventListener('click', ()=> {
  // If right is clicked, left is disabled. to prevent the images form going back and forward when theres an error 
  window.ToLeleft = function (){};
  slideRight();
  firstIMG.addEventListener('error', slideRight)
  secondIMG.addEventListener('error', errorSecondIMGRight)
  thirdIMG.addEventListener('error', errorThirdIMGRight);
})

  arrowLeft.addEventListener('click', () => {
  window.ToRight = function (){};
  slideLeft();
  firstIMG.addEventListener('error', errorThirdIMGLeft)
  secondIMG.addEventListener('error', errorSecondIMGLeft)
  thirdIMG.addEventListener('error', slideLeft);
})  




// Detail page
firstIMG.addEventListener('mouseover', () =>{
  firstIMG.classList.toggle('img-hover')
})
secondIMG.addEventListener('mouseover', () =>{
  secondIMG.classList.toggle('img-hover')
})
thirdIMG.addEventListener('mouseover', () =>{
  thirdIMG.classList.toggle('img-hover')
})


firstIMG.addEventListener('mouseleave', () => {
  firstIMG.classList.remove('img-hover')
})

secondIMG.addEventListener('mouseleave', () => {
  secondIMG.classList.remove('img-hover')
})
thirdIMG.addEventListener('mouseleave', () => {
  thirdIMG.classList.remove('img-hover')
})



// Tried to get Detail information for each klicked img. 
// /couldnt work it out in time
// async function getInfo() {
//   const res = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=8jCQGxIv&format=json&ps=30`)
//   console.log(res.data)
//   const desInfo = document.querySelector('#description')
//   desInfo.innerText = res.data.artObject.description
//   const matInfo = document.querySelector('#materials')
//   matInfo.innerText = res.data.artObject.materials[0]
// }

firstIMG.addEventListener('click', async function () {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
  var objectNumber = result.data.artObjects[imageNumber].objectNumber
  // getInfo();
  console.log(result)
  console.log(objectNumber)
//   // Hoe gaat de info weer weg??)
  firstIMG.classList.toggle('detail-image')
  firstIMG.classList.remove('img-hover')
  // make the non-selected images invisable
  secondIMG.classList.toggle('notShown')
  thirdIMG.classList.toggle('notShown')
  secondTitle.classList.toggle('notShown')
  thirdTitle.classList.toggle('notShown')
  secondArtist.classList.toggle('notShown')
  thirdArtist.classList.toggle('notShown')
  arrowRight.classList.toggle('notShown')
  arrowLeft.classList.toggle('notShown')
})

secondIMG.addEventListener('click', async function () {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
  var objectNumber = result.data.artObjects[imageNumberB].objectNumber
  console.log(objectNumber)
  console.log(result)
  // getInfo();
  secondIMG.classList.toggle('detail-image')
  secondIMG.classList.remove('img-hover')
  // make the non-selected images invisable
  firstIMG.classList.toggle('notShown')
  thirdIMG.classList.toggle('notShown')
  firstTitle.classList.toggle('notShown')
  thirdTitle.classList.toggle('notShown')
  firstArtist.classList.toggle('notShown')
  thirdArtist.classList.toggle('notShown')
  arrowRight.classList.toggle('notShown')
  arrowLeft.classList.toggle('notShown')

})

thirdIMG.addEventListener('click', async function () {
  const searchTerm = search.elements.query.value
  const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=8jCQGxIv&format=json&ps=30&q=${searchTerm}`)
  var objectNumber = result.data.artObjects[imageNumberC].objectNumber
  console.log(objectNumber)
  thirdIMG.classList.toggle('detail-image')
  thirdIMG.classList.remove('img-hover')
  // make the non-selected images invisable
  secondIMG.classList.toggle('notShown')
  firstIMG.classList.toggle('notShown')
  secondTitle.classList.toggle('notShown')
  firstTitle.classList.toggle('notShown')
  secondArtist.classList.toggle('notShown')
  firstArtist.classList.toggle('notShown')
  arrowRight.classList.toggle('notShown')
  arrowLeft.classList.toggle('notShown')
  // getInfo();
})
