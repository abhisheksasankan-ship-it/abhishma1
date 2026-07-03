const COUPLE_PHOTO_SOURCES = [
  "assets/couple.jpg",
  "file:///C:/Users/coola/OneDrive/Desktop/backup/assets/images/hero.jpg",
  "assets/hero.svg"
];

function loadImageWithFallbacks(image, sources) {
  let index = 0;

  function tryNextSource() {
    if (index >= sources.length) return;
    image.src = sources[index];
    index += 1;
  }

  image.addEventListener("error", tryNextSource);
  tryNextSource();
}

document.querySelectorAll("[data-couple-photo]").forEach((image) => {
  loadImageWithFallbacks(image, COUPLE_PHOTO_SOURCES);
});
