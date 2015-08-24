isTouchDevice = "ontouchstart" in document.documentElement;

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
		onNavigation = window.routes[parsedId],
		$tabs = $('#' + parsedId),
		$parent;

	$('.navbar-nav li, .module.active').removeClass('active');

	if ($el.parent().is('.nav-bar')) {
		$tabs = $tabs.add($el);
	} else {
		$parent = $el.parents('li').last();
		$tabs = $tabs.add($parent);
	}
	$tabs.addClass('active');
	$('#moduleName').text($el.text());
	$(window).scrollTop(0);
	if ($(".navbar-ex1-collapse").attr("aria-expanded")) {
		$(".navbar-toggle:visible").click();
	}
	$("#our-clients").show();
	initCarousel();
	$('.banner').attr('class', 'banner ' + $tabs.filter('li').attr('id'));
	if (onNavigation instanceof Function) {
		onNavigation();
	}
}

function setL10n() {
    currentL10n = localStorage.getItem("l10n") || "ua";
	localStorage.setItem("l10n", currentL10n);
	locales[currentL10n].news = newsJSON[currentL10n];
	$("#main-wrapper").html(template(
		locales[localStorage.getItem("l10n")]
	));
	initCarousel();
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
    }
};

$(window).bind("hashchange", function () {
    navigateTo(location.hash)
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
		.on("click", "#directions .wrapper-1, #clients .wrapper-1", function (e) {
    		var $el = $(e.target).parents('.wrapper-1'),
    			$clone = $el.find('.details').clone();

    		$el.parents('.module').append($clone);
    		$clone.append('<div class="closing-icon">✕</div>');
    		setTimeout(function () {
    			$clone.addClass('show');
    		}, 0);
		})
		.on("click", ".closing-icon", function (e) {
			e.target.parentElement.remove();
		});
    location.hash = location.hash || "aboutUs";
    navigateTo(location.hash);
    if (!isTouchDevice) {
        $('#servicesTabs [data-toggle="tab"]').on("mouseenter", function () {
            $(this).click()
        });
    }
    setTimeout(function () {
        $("body").scrollTop(0);
    }, 0)
});