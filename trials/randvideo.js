const possibleVideos = ["eSm4t3p1.mp4","eSm4t3p2.mp4"];
const randomVideo = possibleVideos[Math.floor(Math.random() * possibleVideos.length)];
var video = document.getElementById('horses');
var source = document.createElement('source');
source.setAttribute('src', randomVideo);
source.setAttribute('type', 'video/mp4');

console.log(possibleVideos);
console.log(randomVideo);
console.log(source.getAttribute('src'));
console.log(video);
if (video) {
  // Access the element's properties or manipulate it
  video.appendChild(source);
} else {
  // Handle the case where the element is not found
  console.error("Element with ID 'video' not found.");
}
//video.load();
