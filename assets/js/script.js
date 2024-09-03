const menu = document.getElementById("menuBtn");
const menuList = document.getElementById("navLinks");
const AddCard = document.getElementById("AddCard");
const date = document.getElementById("date");
const quantity = document.querySelector("quantity");
// const num = document.getElementById("num");
// let Addcards = document.querySelector('Addcards');
menu.addEventListener("click", () => {
  menuList.classList.toggle("showmenu");
});
let total = 0;
function totalclick(value, key) {
  // console.log(value, key);
  const totalclick = document.getElementById("count-" + key).innerHTML;
  console.log(totalclick, value, key);
  let num = Number(totalclick);
  if (value == 1) {
    if (num <= 100) {
      num++;
      total++;
    }
  } else {
    num--;
    total--;
  }
  let text = "";

  if (num <= 9) {
    text = "0" + num;
  } else {
    text = num;
  }
  if (num == 0) {
    var date = document.getElementById("date-" + key);
    var btn = document.getElementById("add-btn-" + key);
    btn.classList.remove("active");
    date.classList.remove("active");
  }

  // console.log(num, total);
  document.getElementById("count-" + key).innerHTML = text;

  document.getElementById("quantity").innerHTML = total;
  // if quantity (num:){,
  //   document.getElementById("quantity")
  //   quantity=num+num;
  // }
}

function addtocard(index) {
  console.log("add-btn-" + index);
  var btn = document.getElementById("add-btn-" + index);
  var date = document.getElementById("date-" + index);
  btn.classList.add("active");
  date.classList.add("active");
}
