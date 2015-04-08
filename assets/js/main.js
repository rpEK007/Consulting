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
		$el = $('a[href="#' + parsedId + '"]'),
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

$(window).bind('hashchange', function() {
	navigateTo(location.hash);
});

$(function () {
	$('body').on('click', '.navbar-nav li', onMenuClick);
	location.hash = location.hash || 'news';
	navigateTo(location.hash);
	if (!isTouchDevice) {
		$('#servicesTabs [data-toggle="tab"]').on('mouseenter', function () {
			$(this).click();
		});		
	}
});