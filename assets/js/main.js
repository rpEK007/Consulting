isTouchDevice = "ontouchstart" in document.documentElement;

function onMenuClick(e) {
	e.preventDefault();

	switchLocation($(this).find('a').attr('href'));	
}

function switchLocation(tabId) {
	var scrollY = window.scrollY;

	if (tabId) {
		location.hash = tabId;
	}

	setTimeout(function () {
		$(window).scrollTop(scrollY);
	}, 0);
}

function navigateTo(tabId) {
	var parsedId = tabId.slice(1),
		onNavigation, arg, $el, $tabs, $parent;

	parsedId = parsedId.split('/')[0];
	arg = parsedId.split('/')[1];

	$el = $('.navbar-nav a[href="#' + parsedId + '"]');
	$tabs = $('#' + parsedId);
	onNavigation = window.routes[parsedId];

	$('.navbar-nav li, .module.active').removeClass('active');

	if ($el.parent().is('.nav-bar')) {
		$tabs = $tabs.add($el);
	} else {
		$parent = $el.parents('li').last();
		$tabs = $tabs.add($parent);
	}
	$tabs.addClass('active');
	$('#moduleName').text($el.text());
	if ($(".navbar-ex1-collapse").attr("aria-expanded")) {
		$(".navbar-toggle:visible").click();
	}
	$("#our-clients").show();
	initCarousel();
	$('.banner').attr('class', 'banner ' + $tabs.filter('li').attr('id'));
	if (onNavigation instanceof Function) {
		onNavigation(arg);
	}
}

function setL10n(l10n) {
    currentL10n = l10n || localStorage.getItem("l10n") || "ua";
	localStorage.setItem("l10n", currentL10n);
	locales[currentL10n].news = newsJSON[currentL10n];
	$("#main-wrapper").html(template(
		locales[localStorage.getItem("l10n")]
	));
	initCarousel();
	navigateTo(location.hash);
}

function initCarousel() {
    $("#caroufredsel-clients-container").carouFredSel({
        width: "100%",
        height: "auto",
        prev: "#client-prev",
        next: "#client-next",
        auto: true
    })
}

function switchNews(newsIndex) {
    var $currentNewItem = $("#singleNewsTitle"),
		titleOffsetTop = $currentNewItem.offset().top,
		news = newsJSON[currentL10n][newsIndex],
		$body = $('body');

	$currentNewItem.text(news.title);
    $("#singleNewsText").html(news.text);
    $("#newsAppendix").html(news.appendix || "");
    $("#singleNewsDate").text(news.date);
    if ($body.scrollTop() > titleOffsetTop) {
		$body.animate({
			scrollTop: titleOffsetTop
		}, 400);
	}
}

function showDetails() {
	var $el = $('.wrapper-1[data-hash="' + location.hash.slice(1) + '"]'),
		$clone = $el.find('.details').clone();

	if ($el.length) {
		$el.parents('.module').append($clone);
		$clone.append('<div class="back-icon">➜</div>');
		setTimeout(function () {
			$clone.addClass('show');
		}, 0);
	} else {
		$('.details.show').remove();
	}

}

window.routes = {
    ourContacts: function () {
        var $map = $("#google-map iframe"),
			$parent = $map.parent();

		$map.detach();
		$parent.append($map);
		$("#our-clients").hide();
    },
	news: function () {
        $("#our-clients").hide();
    },
    directions: showDetails,
    clients: showDetails
};

$(window).bind("hashchange", function () {
    navigateTo(location.hash);
});

$(function () {
    setL10n();
    $("body")
		.on("click", ".navbar-nav li", onMenuClick)
		.on("click", "#news-wrapper a", function (e) {
			switchNews($(e.target).parents("article").data("id"))
		})
		.on("click", "#footer-news a", function (e) {
			switchNews($(e.target).data("id"))
		})
		.on("click", "[data-hash]", function (e) {
			switchLocation(e.currentTarget.dataset.hash);
		})
		.on("click", ".back-icon", function (e) {
			e.target.parentElement.remove();
			history.back();
		})
		.on("click", ".lang", function (e) {
			setL10n(e.target.dataset.lang);

			return false;
		});

	switchLocation(location.hash || "aboutUs");

    if (!isTouchDevice) {
        $('#servicesTabs [data-toggle="tab"]').on("mouseenter", function () {
            $(this).click()
        });
    }
    setTimeout(function () {
        $("body").scrollTop(0);
    }, 0)
});