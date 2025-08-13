// ====== Gallery Thumbnail Active ======
const mainImage = document.querySelector(".main-image img");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Cập nhật ảnh lớn
    mainImage.src = thumb.src;

    // Xóa active cũ
    thumbnails.forEach((t) => t.classList.remove("active"));

    // Thêm active mới
    thumb.classList.add("active");
  });
});

// ====== Lightbox cho ảnh lớn ======
mainImage.addEventListener("click", () => {
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${mainImage.src}" alt="Tai nghe XYZ">
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", () => {
    lightbox.remove();
  });
});

// CSS Lightbox inject
const style = document.createElement("style");
style.textContent = `
.lightbox {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background: rgba(0,0,0,0.85);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:2000;
}
.lightbox-content img {
  max-width:90%;
  max-height:90%;
  border-radius:15px;
  box-shadow:0 0 20px rgba(0,0,0,0.5);
}
`;
document.head.appendChild(style);

// ====== Scroll Effect cho Features ======
const featureItems = document.querySelectorAll(".feature");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

featureItems.forEach((item) => observer.observe(item));

// ====== Header Scroll Background ======
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ====== Back to Top ======
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});