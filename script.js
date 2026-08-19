document.getElementById("year").textContent = String(new Date().getFullYear());

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute("src");
  document.body.style.overflow = "";
}

document.querySelectorAll("#gallery img").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});
