isTouchDevice = 'ontouchstart' in document.documentElement;

$(function () {
	$('body').on('click', '.navbar-nav li', onMenuClick);
	navigateTo(location.hash);
	if (!isTouchDevice) {
		$('#servicesTabs [data-toggle="tab"]').on('mouseenter', function () {
			$(this).click();
		});		
	}
});

function onMenuClick(e) {
	var tabId = $(this).find('a').attr('href'),
		scrollTop = window.scrollY;

	if (tabId) {
		location.hash = tabId;
	}

	e.preventDefault();	
	$(window).scrollTop(scrollTop);
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