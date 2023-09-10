const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

var listSV = infoSinhVien();

function layDiem() {
  var dsDiem = [];
  var listDiem = $all('.td-scores');
  for (var diem of listDiem) {
    dsDiem.push(+diem.textContent);
  }
  return dsDiem;
}
function getNameSV() {
  var tenSV = [];
  var listName = $all('.td-ten-sv');
  for (var ten of listName) {
    tenSV.push(ten.textContent);
  }
  return tenSV;
}

function infoSinhVien() {
  var listDiem = layDiem();
  var listName = getNameSV();
  var sinhVien = listDiem.map((item, index) => {
    return { name: listName[index], diem: item };
  });
  return sinhVien;
}

function sinhVienGioiNhat(listSV) {
  var svGioiNhat = listSV[0];
  for (var sv of listSV) {
    sv.diem > svGioiNhat.diem ? (svGioiNhat = sv) : svGioiNhat;
  }
  $a(
    '#svGioiNhat'
  ).innerText = `Tên ${svGioiNhat.name} - Điểm Số : ${svGioiNhat.diem}`;
}
function sinhVienYeuNhat(listSV) {
  var svYeuNhat = listSV[0];
  for (var sv of listSV) {
    sv.diem < svYeuNhat.diem ? (svYeuNhat = sv) : svYeuNhat;
  }
  $a(
    '#svYeuNhat'
  ).innerText = `Tên ${svYeuNhat.name} - Điểm Số : ${svYeuNhat.diem}`;
}

function demSVGioi(listSV) {
  var arrSVGioi = listSV.filter((sv) => sv.diem >= 8);
  $a('#soSVGioi').innerText = arrSVGioi.length;
}

function svDiemHon5(listSV) {
  var result = '<hr><ul style="text-align:center">';
  var listSVDiemHon5 = listSV.filter((sv) => sv.diem > 5);
  for (var svDiemHon5 of listSVDiemHon5) {
    result += `<li style="display:block; margin:0">${svDiemHon5.name} - ${svDiemHon5.diem}</li>`;
  }
  result += '</ul><hr>';
  $a('#dsDiemHon5').innerHTML = result;
}

function sapXepTang(listSV) {
  var listSVClone = [...listSV];
  for (var i = 0; i < listSVClone.length; i++) {
    for (var j = 0; j < listSVClone.length; j++) {
      if (listSVClone[i].diem > listSVClone[j].diem) {
        var temp = listSVClone[i];
        listSVClone[i] = listSVClone[j];
        listSVClone[j] = temp;
      }
    }
  }
  var result = '<hr><ul style="text-align:center">';
  for (var sv of listSVClone) {
    result += `<li style="display:block; margin:0">${sv.name} - ${sv.diem}</li>`;
  }
  result += '</ul><hr>';
  $a('#dtbTang').innerHTML = result;
}
function App() {
  $a('#btnSVCaoDiemNhat').onclick = () => {
    sinhVienGioiNhat(listSV);
  };
  $a('#btnSVThapDiemNhat').onclick = () => {
    sinhVienYeuNhat(listSV);
  };
  $a('#btnSoSVGioi').onclick = () => {
    demSVGioi(listSV);
  };

  $a('#btnSVDiemHon5').onclick = () => {
    svDiemHon5(listSV);
  };
  $a('#btnSapXepTang').onclick = () => {
    sapXepTang(listSV);
  };
}

App();
