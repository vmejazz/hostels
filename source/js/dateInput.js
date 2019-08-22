var monthMap = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март',
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь',
}

var getMonthFromMap = function (mn) {
  var monthText = monthMap[mn];
  return monthText;
};

// function mydate() {
//     //alert("");
//     // document.getElementById("input__check-in--default").hidden = false;
//     // document.getElementById("ndt").hidden = true;
//   }

function mydDateIn() {
  d = new Date(document.getElementById("input__check-in--default").value);
  dt = d.getDate();
  mn = d.getMonth();
  mn++;
  yy = d.getFullYear();
  document.getElementById("input__check-in--style").value = dt + " " + getMonthFromMap(mn) + " " + yy;
}

function myDateOut() {
  d = new Date(document.getElementById("input__check-out--default").value);
  dt = d.getDate();
  mn = d.getMonth();
  mn++;
  yy = d.getFullYear();
  document.getElementById("input__check-out--style").value = dt + " " + getMonthFromMap(mn) + " " + yy;
}
