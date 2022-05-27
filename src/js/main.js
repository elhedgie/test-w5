window.onload = function () {
  if (document.querySelector(".popup__close")) {
    document
      .querySelector(".popup__close")
      .addEventListener("click", function () {
        document.querySelector(".popup").classList.toggle("open");
      });
  }
  if (document.querySelector(".add-shop-btn")) {
    document
      .querySelector(".add-shop-btn")
      .addEventListener("click", function () {
        document.querySelector(".popup").classList.toggle("open");
      });
  }

  if (document.querySelector(".burger")) {
    document.querySelector(".burger").addEventListener("click", function () {
      document.querySelector(".navbar").classList.toggle("open");
    });
  }
};
