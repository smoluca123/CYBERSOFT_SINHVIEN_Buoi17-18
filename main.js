/**
 *
 * Array
 *
 */

// const langs = ['JS', 'Ruby', 'Python'];
// for (let lang of langs) {
//   console.log(lang);
// }

const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const btns = $all('#demo1 button');
const noti = $all('#demo1 .card-footer div');

var arr = [];

btns[0].onclick = function themSo(e) {
  e.preventDefault();
  var txtNum = +$a('#demo1 #txtNum').value;
  // arr.push(txtNum);
  arr[arr.length] = txtNum;
  noti[0].innerText = `Phần tử vừa thêm vào : ${txtNum}\nArray : [${arr}]`;
};

btns[1].onclick = function tinhSoChan(e) {
  e.preventDefault();
  if (arr.length <= 0) {
    return;
  }
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += arr[i];
    }
  }
  noti[1].innerText = `Tổng các số chẵn : ${total} \n
  Array số chẵn : [${arr.filter((item) => item % 2 === 0)}]`;
};

function timSoAm() {
  if (arr.length <= 0) {
    return;
  }
  var arrSoAm = arr.filter((item) => item < 0);

  noti[2].innerText = `Có ${arrSoAm.length} trong mảng, là: ${arrSoAm}`;
  return arrSoAm;
}
btns[2].onclick = (e) => {
  e.preventDefault();
  timSoAm();
};

btns[3].onclick = function tongSoAm(e) {
  e.preventDefault();
  var arrSoAm = timSoAm();
  var total = 0;
  for (let soAm of arrSoAm) {
    total += soAm;
  }
  noti[3].innerText = `Tổng các số âm : ${total}`;
};
