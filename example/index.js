require('../style.css')
var Select = require('..')

var daysEl = document.getElementById('days')
var monthsEl = document.getElementById('months')


var days = new Select(daysEl, {
	data: getDays()
})
days.value(15)

var months = new Select(monthsEl, {
  data: getMonths()
})
months.value(6)
months.on('change', function(v) {
	if (v == 2) {
		days.filter([30, 31]);
	} else {
		days.filter();
	}
})

// select.on('change', function (v) {
//   console.log(v)
// })

function getData(from) {
	var data = []
	for (var i = 0; i < 15; i ++) {
		data.push({
			id: String(from + i),
			text: String(from + i) + '年'
		})
	}
	return data
}

function getDays() {
  var data = []
  for (var i = 1; i <= 31; i ++) {
    data.push({
      id: String(i),
      text: String(i)
    })
  }
  return data
}

function getMonths() {
	var data = []
	for (var i = 1; i <= 12; i ++) {
		data.push({
			id: String(i),
			text: String(i)
		})
	}
	return data
}

// document.getElementById('prev').addEventListener('click', function () {
//   select.prev()
// }, false)
//
// document.getElementById('next').addEventListener('click', function () {
//   select.next()
// }, false)
//
// document.getElementById('rebuild').addEventListener('click', function () {
//   select.setData(getData(1970))
// }, false)
//
// document.getElementById('unbind').addEventListener('click', function () {
//   select.unbind()
// }, false)
