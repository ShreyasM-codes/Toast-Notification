let toastBox = document.getElementById("toastBox");
let SuccessMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let ErrorMsg =
  '<i class="fa-regular fa-circle-xmark"></i>Please fix the error!';
let InvalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  setTimeout(()=>{
    toast.remove();
  },5000)
}
