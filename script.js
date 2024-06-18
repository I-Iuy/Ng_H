onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
  var confirmButton = document.getElementById("confirm-button");

  confirmButton.addEventListener("click", function() {
      window.location.href = "log.html";
  });
});
