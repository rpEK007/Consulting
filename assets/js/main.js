isTouchDevice = 'ontouchstart' in document.documentElement;

function onMenuClick(e) {
	var tabId = $(this).find('a').attr('href'),
		scrollY = window.scrollY;

	if (tabId) {
		location.hash = tabId;
	}

	e.preventDefault();
	$(window).scrollTop(scrollY);
}

function navigateTo(tabId) {
	var parsedId = tabId.slice(1),
		$el = $('.navbar-nav a[href="#' + parsedId + '"]'),
		$tabs = $('#' + parsedId),
		scrollTop = window.scrollY,
		$parent;

	$('.navbar-nav li, .module.active').removeClass('active');

	if ($el.parent().is('.nav-bar')) {
		$tabs = $tabs.add($el);
	} else {
		$parent = $el.parents('li').last();
		$tabs = $tabs.add($parent);
	}
	$('body').toggleClass('showOurMission', $parent && $parent.hasClass('showOurMission'));
	$tabs.addClass('active');
	$('#moduleName').text($el.text());
	$(window).scrollTop(0);
}

function setL10n() {
	currentL10n = localStorage.getItem('l10n') || 'ua';
	localStorage.setItem('l10n', currentL10n);
	locales[currentL10n].news = newsJSON[currentL10n];
	$('#main-wrapper').html(template(
		locales[localStorage.getItem('l10n')]
	));
};

function switchNews(newsIndex) {
	var news = newsJSON[currentL10n][newsIndex];

	$('#singleNewsTitle').text(news.title);
	$('#singleNewsText').text(news.text);
	$('#singleNewsDate').text(news.date);
};

$(window).bind('hashchange', function() {
	navigateTo(location.hash);
});

$(function () {
	setL10n();	
	$('body')
		.on('click', '.navbar-nav li', onMenuClick)
		.on('click', '#news-wrapper a', function (e) {
			switchNews($(e.target).parents('article').data('id'));
		})
		.on('click', '#footer-news a', function (e) {
			switchNews($(e.target).data('id'));
		});
	location.hash = location.hash || 'news';
	navigateTo(location.hash);
	if (!isTouchDevice) {
		$('#servicesTabs [data-toggle="tab"]').on('mouseenter', function () {
			$(this).click();
		});		
	}
});