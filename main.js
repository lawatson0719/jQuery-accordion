var button = $('.accordion');

// button.addEventListener('click', function () {
// 	p.classList.toggle('hide');
// })

button.on('click', function (e) {
	// if the event target was an accoridion button, do something
	if ($(e.target).is('button.toggle')) {
		$(e.target).next('p').toggleClass('show');
	}
})