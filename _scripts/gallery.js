// Lightbox for the Lab Life gallery. Runs only on pages that have a gallery.
(function () {
  function init() {
    var items = Array.prototype.slice.call(
      document.querySelectorAll(".gallery-item")
    );
    if (!items.length) return;

    // build overlay once
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8249;</button>' +
      '<img class="lightbox-img" alt="">' +
      '<button class="lightbox-nav lightbox-next" aria-label="Next">&#8250;</button>' +
      '<div class="lightbox-caption"></div>';
    document.body.appendChild(box);

    var imgEl = box.querySelector(".lightbox-img");
    var capEl = box.querySelector(".lightbox-caption");
    var current = 0;

    function show(i) {
      current = (i + items.length) % items.length;
      var a = items[current];
      imgEl.src = a.getAttribute("href");
      var cap = a.getAttribute("data-caption") || "";
      capEl.textContent = cap;
      imgEl.alt = cap;
    }
    function open(i) {
      show(i);
      box.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
    }

    items.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        open(i);
      });
    });

    box.querySelector(".lightbox-close").addEventListener("click", close);
    box.querySelector(".lightbox-prev").addEventListener("click", function (e) {
      e.stopPropagation();
      show(current - 1);
    });
    box.querySelector(".lightbox-next").addEventListener("click", function (e) {
      e.stopPropagation();
      show(current + 1);
    });
    box.addEventListener("click", function (e) {
      if (e.target === box) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
