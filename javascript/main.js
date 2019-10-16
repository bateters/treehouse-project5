//-----------------------------------------------------------------------------------------------------
//--------------------------add a photo to the array to add it to the gallery--------------------------
//-----------------------------------------------------------------------------------------------------

var photos = [{ 
  name: "Hay Bales",
  url: "photos/01.jpg",
  thumb: "photos/thumbnails/01.jpg",
  caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields."
},{
  name: "Lake",
  url: "photos/02.jpg",
  thumb: "photos/thumbnails/02.jpg",
  caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
},{
  name: "Canyon",
  url: "photos/03.jpg",
  thumb: "photos/thumbnails/03.jpg",
  caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
},{
  name: "Iceberg",
  url: "photos/04.jpg",
  thumb: "photos/thumbnails/04.jpg",
  caption: "It was amazing to see an iceberg up close, it was so cold but didn't snow today."
},{
  name: "Desert",
  url: "photos/05.jpg",
  thumb: "photos/thumbnails/05.jpg",
  caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
},{
  name: "Fall",
  url: "photos/06.jpg",
  thumb: "photos/thumbnails/06.jpg",
  caption: "Fall is coming, I love when the leaves on the trees start to change color."
},{
  name: "Plantation",
  url: "photos/07.jpg",
  thumb: "photos/thumbnails/07.jpg",
  caption: "I drove past this plantation yesterday, everything is so green!"
},{
  name: "Dunes",
  url: "photos/08.jpg",
  thumb: "photos/thumbnails/08.jpg",
  caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
},{
  name: "Countryside Lane",
  url: "photos/09.jpg",
  thumb: "photos/thumbnails/09.jpg",
  caption: "We enjoyed a quiet stroll down this countryside lane."
},{
  name: "Sunset",
  url: "photos/10.jpg",
  thumb: "photos/thumbnails/10.jpg",
  caption: "Sunset at the coast! The sky turned a lovely shade of orange."
},{
  name: "Cave",
  url: "photos/11.jpg",
  thumb: "photos/thumbnails/11.jpg",
  caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
},{
  name: "Bluebells",
  url: "photos/12.jpg",
  thumb: "photos/thumbnails/12.jpg",
  caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
}];

//----------------------------------------variables----------------------------------------
var photoIndex;
const gallery = document.getElementById('gallery');
const searchbox = gallery.getElementsByTagName('input')[0];
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.getElementsByTagName('img')[0];
const caption = lightbox.getElementsByTagName('p')[0];

//----------------------------------------create gallery photos----------------------------------------
photos.forEach((photo, index) => {
  let thumb = document.createElement('IMG');
  thumb.className = 'thumbnail';
  thumb.src = photo.thumb;
  thumb.alt = photo.name;
  thumb.setAttribute('onclick', `openLightbox(), imgSelect(${index + 1})`);
  gallery.appendChild(thumb);
});

//----------------------------------------functions----------------------------------------
function openLightbox() {
  gallery.style.display = 'none';
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  gallery.style.display = 'flex';
  lightbox.style.display = 'none';
}

function imgSelect(i) {
  photoIndex = i;
  lightboxImg.src = photos[i - 1].url;
  caption.textContent = photos[i - 1].caption;
}

//----------------------------------------search controls----------------------------------------
const thumbs = document.getElementsByClassName('thumbnail');

searchbox.addEventListener('keyup', () => {
  let term = searchbox.value.toLowerCase();
  photos.forEach((photo, index) => {
    let caption = photo.caption.toLowerCase();
    if (caption.indexOf(term) != -1) {
      thumbs[index].style.display = 'block';
    } else {
        thumbs[index].style.display = 'none';
    }
  });
});

//----------------------------------------lightbox controls----------------------------------------
lightbox.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' || event.target.className === 'next') {
    photoIndex += 1;
  } else if (event.target.className === 'prev') {
      photoIndex -= 1;
  }
  if (photoIndex < 1) {
    photoIndex = photos.length;
  } else if (photoIndex > photos.length) {
    photoIndex = 1;
  }
  imgSelect(photoIndex);
});
