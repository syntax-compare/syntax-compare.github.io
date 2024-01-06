const allContents = document.querySelectorAll(".content-lang");
const pythonContents = document.querySelectorAll(".content-lang.python");
const dartContents = document.querySelectorAll(".content-lang.dart");
const kotlinContents = document.querySelectorAll(".content-lang.kotlin");
const jsContents = document.querySelectorAll(".content-lang.javascript");
const cppContents = document.querySelectorAll(".content-lang.cpp");

const langMap = new Map();
langMap.set("python", pythonContents);
langMap.set("dart", dartContents);
langMap.set("kotlin", kotlinContents);
langMap.set("javascript", jsContents);
langMap.set("cpp", cppContents);


function refreshAll() {
  allContents.forEach((content, index) => {
    content.classList.add('d-none');
    content.classList.remove('order-0');
    content.classList.remove('order-1');
  });
  const contentsLeft = langMap.get(selectedLanguageLeft.toLowerCase());
  contentsLeft.forEach((content, index) => {
    content.classList.remove('d-none');
    content.classList.add('order-0');
  });
  const contentsRight = langMap.get(selectedLanguageRight.toLowerCase());
  contentsRight.forEach((content, index) => {
    content.classList.remove('d-none');
    content.classList.add('order-1');
  });
}

let selectedLanguageLeft = localStorage.getItem("selectedLanguageLeft")
  ? localStorage.getItem("selectedLanguageLeft")
  : "Python";

let selectedLanguageRight = localStorage.getItem("selectedLanguageRight")
  ? localStorage.getItem("selectedLanguageRight")
  : "Dart";
  
console.log("selectedLanguageLeft:", selectedLanguageLeft);
console.log("selectedLanguageRight:", selectedLanguageRight);
refreshAll();

const dropdownLanguageLeft = document.getElementById("dropdownLanguageLeft");
const dropdownLanguageRight = document.getElementById("dropdownLanguageRight");
dropdownLanguageLeft.innerText = selectedLanguageLeft;
dropdownLanguageRight.innerText = selectedLanguageRight;

// Dropdown on NavBar for Left
dropdownLanguageLeft.addEventListener("hidden.bs.dropdown", function (event) {
  const clickedItem = event.clickEvent.target;
  if (clickedItem.classList.contains('dropdown-item')) {
    selectedLanguageLeft = clickedItem.innerText;
    console.log("selectedLanguageLeft: " + selectedLanguageLeft);
    dropdownLanguageLeft.innerText = selectedLanguageLeft;
    localStorage.setItem("selectedLanguageLeft", selectedLanguageLeft);
    refreshAll();
  } else {
    console.log("unexpected item for Left. do nothing");
  }  
});

// Dropdown on NavBar for Right
dropdownLanguageRight.addEventListener("hidden.bs.dropdown", function (event) {
  const clickedItem = event.clickEvent.target;
  if (clickedItem.classList.contains('dropdown-item')) {
    selectedLanguageRight = clickedItem.innerText;
    console.log("selectedLanguageRight: " + selectedLanguageRight);
    dropdownLanguageRight.innerText = selectedLanguageRight;
    localStorage.setItem("selectedLanguageRight", selectedLanguageRight);
    refreshAll();
  } else {
    console.log("unexpected item for Right. do nothing");
  }  
});
