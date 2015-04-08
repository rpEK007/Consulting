window.locales = 
{
	"ua": {
		"news": "Новини",
		"aboutUs": "Про нас",
		"ourServices": "Наші послуги",
		"ourMethods": "Методологія JWA",
		"directions": "Напрямки",
		"clients": "Категорії клієнтів",
		"examples": "Приклади проектів",
		"ourContacts": "Контакти",
		"aboutJWA": "Про JWA",
		"ourPurposeTitle": "Наша ціль",
		"ourPurposeText": "Нашу місію ми вбачаємо в тому, щоби прибрати будь-які перешкоди на шляху різноманітних спеціалістів, компаній та установ до отримання європейських фінансових ресурсів. Наш досвід підтверджує, що саме такі гранти найчастіше допомагають у розробці інноваційних напрямків та продуктів, укріпленню міжнародної співпраці і народженню нового інтернаціонального виміру, де сміливі ідеї перетворюються на реальність.",
		"methodsTitle1": "Підтримуємо у пошуку фінансування",
		"methodsTitle2": "Максимізуємо можливості",
		"methodsTitle3": "Спрощуємо складне",
		"methodsText1": "Ми завжди починаємо з зустрічей і аналізу Ваших потреб та цілей розвитку.\n\nІснує безліч можливостей отримати фінансування через широкий спектр різноманітних каналів. Більшість компаній та організацій не мають достатньо часу або ресурсів для вивчення таких можливостей. Проте часто зовнішнє фінансування може надати поштовх до розробки нових ідей та напрямків у роботі. Наш досвід і професійні напрацювання допоможуть Вам на цьому шляху і нададуть експертизу, якої може не вистачати для досягнення мети.",
		"methodsText2": "Різноманітні європейські організації регулярно надають великі об’єми фінансування для тих чи інших цілей. Добре розуміючи сутність вимог і стандарти роботи цих організацій, експерти JWA Funding здатні підвищити шанси Вашої компанії на отримання фінансового гранту. Наприклад, ми можемо допомогти розкрити Вашу ідею і план дій у потрібному ракурсі, підкреслити Ваші конкурентні переваги, створити консорціум українського чи міжнародного масштабу тощо.",
		"methodsText3": "Отримання європейського фінансування вимагає виконання певних вимог і послідовних кроків. Не менш важливою є і правильність дій після отримання гранту, адже євпропейські організації моніторять цільове використання коштів. Наші консультанти мають за плечима багато успішних проектів і володіють широким набором технік проектного менеджменту. Розроблена нами методологія дозволяє побудувати виважену систему для отримання і подальшого управління грантом.",
		"directionEconomy": "Економічний розвиток",
		"directionTransport": "Транспорт",
		"directionInvestments": "Дослідницькі проекти",
		"directionNature": "Навколишнє середовище",
		"directionEducation": "Освіта",
		"directionCulture": "Культура",
		"directionNonCommercial": "Некомерційні проекти",
		"directionTrainings": "Тренінги і семінари",
		"clientsLarge": "Великі компанії",
		"clientsUniversities": "Університети",
		"clientsEntrepreneurs": "Середній та малий бізнес",
		"clientsNonGovermental": "Неурядові організації",
		"clientsGovermental": "Органи державної влади",
		"clientsSpecialists": "Індивідуальні спеціалісти",
		"examplesEnergy": "Енергетика",
		"examplesMedicine": "Медицинські дослідження",
		"examplesNature": "Навколишнє середовище",
		"examplesIT": "Інформаційні технології",
		"examplesTransport": "Транспорт",
		"partAboutJWA1": "JWA Funding є консалтинговою компанією, яка базується в самому центрі Брюсселя, в зосередженні європейських проектів і джерел для їхнього фінансування. \nМи надаємо послуги управління грантовими проектами, від моменту формулювання потреби і написання грантової пропозиції, до стадії розробки системи стратегічного розвитку компаній і організацій-отримувачів фінансування.",
		"partAboutJWA2": "Команда експертів JWA Funding працює на ринку міжнародного фінансування понад 20 років. За цей час ми розробили і успішно скоординували чисельні грантові проекти у співпраці з провідними європейськими банками і фінансовими установами, органами державної влади європейських країн, видатними європейськими університетами і науково-дослідницькими платформами.\n\nПрацюючи з грантовими проектами у Європі та за її межами, наші експерти стали провідниками фінансових ресурсів на суму, що перевищує 150 міліонів євро. \n\nОкрім цього, ми організували та провели понад 100 семінарів та тренінгів з питань отримання європейського фінансування."
	},
	"en": {
		"aboutUs": "About Us",
		"ourMethods": "Our Methodologies",
		"directions": "Directions",
		"clients": "Clients",
		"examples": "Project Examples",
		"ourContacts": "Our Contacts"
	}
}
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
function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),ourServices = locals_.ourServices,ourMethods = locals_.ourMethods,directions = locals_.directions,clients = locals_.clients,examples = locals_.examples,news = locals_.news,aboutJWA = locals_.aboutJWA,aboutUs = locals_.aboutUs,ourContacts = locals_.ourContacts,ourPurposeTitle = locals_.ourPurposeTitle,ourPurposeText = locals_.ourPurposeText,partAboutJWA1 = locals_.partAboutJWA1,partAboutJWA2 = locals_.partAboutJWA2,methodsTitle1 = locals_.methodsTitle1,methodsTitle2 = locals_.methodsTitle2,methodsTitle3 = locals_.methodsTitle3,methodsText1 = locals_.methodsText1,methodsText2 = locals_.methodsText2,methodsText3 = locals_.methodsText3,directionEconomy = locals_.directionEconomy,directionTransport = locals_.directionTransport,directionInvestments = locals_.directionInvestments,directionNature = locals_.directionNature,directionEducation = locals_.directionEducation,directionCulture = locals_.directionCulture,directionNonCommercial = locals_.directionNonCommercial,directionTrainings = locals_.directionTrainings,clientsLarge = locals_.clientsLarge,clientsUniversities = locals_.clientsUniversities,clientsEntrepreneurs = locals_.clientsEntrepreneurs,clientsNonGovermental = locals_.clientsNonGovermental,clientsGovermental = locals_.clientsGovermental,clientsSpecialists = locals_.clientsSpecialists,examplesEnergy = locals_.examplesEnergy,examplesMedicine = locals_.examplesMedicine,examplesNature = locals_.examplesNature,examplesIT = locals_.examplesIT,examplesTransport = locals_.examplesTransport;
buf.push("<header id=\"header-1\" class=\"header\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-8 header-info-wrapper\"><ul class=\"list-inline\"><li><i class=\"icon-mobile-phone\"> Mobile: (123) 456-7890</i></li><li><i class=\"icon-envelope\"> Mail: </i><a href=\"mailto:contact@example.com\">contact@example.com</a></li></ul></div></div></div></header><header id=\"header-2\" class=\"header\"><nav role=\"navigation\" class=\"navbar navbar-default\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\" class=\"navbar-toggle\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"index.html\" class=\"navbar-brand\">JWA</a></div><div class=\"collapse navbar-collapse navbar-ex1-collapse\"><ul class=\"nav navbar-nav\"><li class=\"dropdown showOurMission\"><a data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape(null == (jade.interp = ourServices) ? "" : jade.interp)) + "</a><ul class=\"dropdown-menu\"><li><a href=\"#ourMethods\">" + (jade.escape(null == (jade.interp = ourMethods) ? "" : jade.interp)) + "</a></li><li><a href=\"#directions\">" + (jade.escape(null == (jade.interp = directions) ? "" : jade.interp)) + "</a></li><li><a href=\"#clients\">" + (jade.escape(null == (jade.interp = clients) ? "" : jade.interp)) + "</a></li><li><a href=\"#examples\">" + (jade.escape(null == (jade.interp = examples) ? "" : jade.interp)) + "</a></li></ul></li><li class=\"active\"><a href=\"#news\">" + (jade.escape(null == (jade.interp = news) ? "" : jade.interp)) + "</a></li><li class=\"dropdown\"><a data-toggle=\"dropdown\" class=\"dropdown-toggle\">" + (jade.escape(null == (jade.interp = aboutJWA) ? "" : jade.interp)) + "</a><ul class=\"dropdown-menu\"><li><a href=\"#aboutUs\">" + (jade.escape(null == (jade.interp = aboutUs) ? "" : jade.interp)) + "</a></li><li><a href=\"#ourContacts\">" + (jade.escape(null == (jade.interp = ourContacts) ? "" : jade.interp)) + "</a></li></ul></li></ul></div></div></nav></header><section id=\"page-title-wrapper\" class=\"section page-title-wrapper\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-6 page-title\"><h4 id=\"moduleName\">Services</h4></div></div></div></section><section id=\"ourMissionWrapper\" class=\"section\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6 wrapper-1\"><i class=\"icon-flag\"></i></div><div class=\"col-md-6 wrapper-1\"><h5 class=\"subpage-title\">" + (jade.escape(null == (jade.interp = ourPurposeTitle) ? "" : jade.interp)) + "</h5><p>" + (jade.escape(null == (jade.interp = ourPurposeText) ? "" : jade.interp)) + "</p></div></div></div></section><div id=\"mainModules\" class=\"tab-content section\"><div id=\"news\" class=\"module tab-pane active\">News</div><div id=\"aboutUs\" class=\"module tab-pane section\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6 wrapper-1\"><i class=\"icon-file-text-alt\"></i></div><div class=\"col-md-6 wrapper-1\"><h5 class=\"subpage-title\">" + (jade.escape(null == (jade.interp = aboutJWA) ? "" : jade.interp)) + "</h5><p>" + (jade.escape(null == (jade.interp = partAboutJWA1) ? "" : jade.interp)) + "</p><p>" + (jade.escape(null == (jade.interp = partAboutJWA2) ? "" : jade.interp)) + "</p></div></div></div></div><div id=\"ourMethods\" class=\"module tab-pane\"><section class=\"section colored-wrapper\"><div class=\"container\"><div class=\"row\"><ul id=\"servicesTabs\" class=\"nav col-md-7 col-xs-12\"><li class=\"active\"><a href=\"#method1\" data-toggle=\"tab\" aria-expanded=\"true\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-eur\"></i></span><h4>" + (jade.escape(null == (jade.interp = methodsTitle1) ? "" : jade.interp)) + "</h4></div></a></li><li><a href=\"#method2\" data-toggle=\"tab\" aria-expanded=\"false\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-bullhorn\"></i></span><h4>" + (jade.escape(null == (jade.interp = methodsTitle2) ? "" : jade.interp)) + "</h4></div></a></li><li><a href=\"#method3\" data-toggle=\"tab\" aria-expanded=\"false\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-thumbs-up-alt\"></i></span><h4>" + (jade.escape(null == (jade.interp = methodsTitle3) ? "" : jade.interp)) + "</h4></div></a></li></ul><div class=\"tab-content col-md-5 col-xs-12\"><div id=\"method1\" class=\"tab-pane active\"><h5 class=\"subpage-title\">" + (jade.escape(null == (jade.interp = methodsTitle1) ? "" : jade.interp)) + "</h5><p>" + (jade.escape(null == (jade.interp = methodsText1) ? "" : jade.interp)) + "</p></div><div id=\"method2\" class=\"tab-pane\"><h5 class=\"subpage-title\">" + (jade.escape(null == (jade.interp = methodsTitle2) ? "" : jade.interp)) + "</h5><p>" + (jade.escape(null == (jade.interp = methodsText2) ? "" : jade.interp)) + "</p></div><div id=\"method3\" class=\"tab-pane\"><h5 class=\"subpage-title\">" + (jade.escape(null == (jade.interp = methodsTitle3) ? "" : jade.interp)) + "</h5><p>" + (jade.escape(null == (jade.interp = methodsText3) ? "" : jade.interp)) + "</p></div></div></div></div></section></div><div id=\"directions\" class=\"module tab-pane colored-wrapper section\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-eur\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionEconomy) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-truck\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionTransport) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-compass\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionInvestments) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-leaf\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionNature) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-book\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionEducation) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-picture\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionCulture) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-github\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionNonCommercial) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-group\"></i></span><h4>" + (jade.escape(null == (jade.interp = directionTrainings) ? "" : jade.interp)) + "</h4></div></div></div></div></div><div id=\"clients\" class=\"module tab-pane colored-wrapper section\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-eur\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsLarge) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-laptop\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsUniversities) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-laptop\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsEntrepreneurs) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-laptop\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsNonGovermental) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-laptop\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsGovermental) ? "" : jade.interp)) + "</h4></div></div><div class=\"col-xs-12 col-sm-6 col-md-4 wrapper-1\"><div class=\"service service-2\"><span class=\"service-icon\"><i class=\"icon-laptop\"></i></span><h4>" + (jade.escape(null == (jade.interp = clientsSpecialists) ? "" : jade.interp)) + "</h4></div></div></div></div></div><div id=\"examples\" class=\"module tab-pane colored-wrapper section\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item\"><div class=\"portfolio-item\"><div class=\"portfolio-thumb\"><i class=\"icon-bolt\"></i><div class=\"image-overlay\"></div><a href=\"javascript:void(0)\" class=\"portfolio-link\"><i class=\"icon-link\"></i></a></div><div class=\"portfolio-content\"><h5>" + (jade.escape(null == (jade.interp = examplesEnergy) ? "" : jade.interp)) + "</h5></div></div></div><div class=\"col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item\"><div class=\"portfolio-item\"><div class=\"portfolio-thumb\"><i class=\"icon-user-md\"></i><div class=\"image-overlay\"></div><a href=\"javascript:void(0)\" class=\"portfolio-link\"><i class=\"icon-link\"></i></a></div><div class=\"portfolio-content\"><h5>" + (jade.escape(null == (jade.interp = examplesMedicine) ? "" : jade.interp)) + "</h5></div></div></div><div class=\"col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item\"><div class=\"portfolio-item\"><div class=\"portfolio-thumb\"><i class=\"icon-leaf\"></i><div class=\"image-overlay\"></div><a href=\"javascript:void(0)\" class=\"portfolio-link\"><i class=\"icon-link\"></i></a></div><div class=\"portfolio-content\"><h5>" + (jade.escape(null == (jade.interp = examplesNature) ? "" : jade.interp)) + "</h5></div></div></div><div class=\"col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item\"><div class=\"portfolio-item\"><div class=\"portfolio-thumb\"><i class=\"icon-laptop\"></i><div class=\"image-overlay\"></div><a href=\"javascript:void(0)\" class=\"portfolio-link\"><i class=\"icon-link\"></i></a></div><div class=\"portfolio-content\"><h5>" + (jade.escape(null == (jade.interp = examplesIT) ? "" : jade.interp)) + "</h5></div></div></div><div class=\"col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item\"><div class=\"portfolio-item\"><div class=\"portfolio-thumb\"><i class=\"icon-rocket\"></i><div class=\"image-overlay\"></div><a href=\"javascript:void(0)\" class=\"portfolio-link\"><i class=\"icon-link\"></i></a></div><div class=\"portfolio-content\"><h5>" + (jade.escape(null == (jade.interp = examplesTransport) ? "" : jade.interp)) + "</h5></div></div></div></div></div></div><div id=\"ourContacts\" class=\"module tab-pane section\"><section id=\"google-map\" class=\"section google-map-2\"><div class=\"container\"><iframe width=\"100%\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=dhaka&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=38.963048,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=Dhaka,+Dhaka+Division,+Bangladesh&amp;t=m&amp;z=10&amp;ll=23.709921,90.407143&amp;output=embed\"></iframe></div></section><section id=\"contact-us\" class=\"section contact-us\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4 wrapper-2\"><h5 class=\"subpage-title\"><i class=\"icon-compass\">Visit Us</i></h5><address><strong>FLATPOINT, INC.</strong><br/> 795 Folsom Ave, Suite 600<br/> San Francisco, CA 94107<br/></address><h5 class=\"subpage-title\"><i class=\"icon-phone\">Contact</i></h5><address>Phone: (123) 456-7890<br/> Fax: (123) 456-7890<br/><a href=\"mailto:#\">contact@example.com</a></address></div><div id=\"contactForm\" class=\"col-md-8 wrapper-1\"><form class=\"contact-form\"><h5 class=\"subpage-title\">Get In Touch</h5><div class=\"row\"><div class=\"col-md-4\"><input placeholder=\"Name\" type=\"text\" class=\"input form-control\"/></div><div class=\"col-md-4\"><input placeholder=\"Email\" type=\"text\" class=\"input form-control\"/></div><div class=\"col-md-4\"><input placeholder=\"Subject\" type=\"text\" class=\"input form-control\"/></div></div><textarea placeholder=\"Your Message\" rows=\"3\" class=\"form-control\"></textarea><button class=\"btn btn-flat flat-color\">Submit</button></form></div></div></div></section></div></div><footer id=\"footer-1\" class=\"footer\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"widget about-us\"><span class=\"footer-brand\">JWA</span><p>" + (jade.escape(null == (jade.interp = partAboutJWA1) ? "" : jade.interp)) + "</p></div></div><div class=\"col-md-3\"><div class=\"widget popular-posts\"><h5 class=\"subpage-title\">News</h5><ul class=\"recent-posts\"><li><i class=\"icon-leaf\"></i><h5><a href=\"javascript:void(0)\">The Ultimate Guide to Adjustment Layers &ndash; Vibrance</a><small>Posted July 20, 2013</small></h5></li><li><i class=\"icon-leaf\"></i><h5><a href=\"javascript:void(0)\">Complete Guide to What&rsquo;s New in Adobe Photoshop 14.1</a><small>Posted July 15, 2013</small></h5></li><li><i class=\"icon-leaf\"></i><h5><a href=\"javascript:void(0)\">How to Integrate Lightroom Into Your Photoshop Workflow</a><small>Posted July 10, 2013</small></h5></li></ul></div></div></div></div></footer>");;return buf.join("");
}
window.newsJSON = 
{
	"ua": [
		{
			"title": "Новина 1",
			"text": "Новина така що..."
		}, 
		{
			"title": "Новина 2",
			"text": "Новина така що...2"
		}
	],
	"en": [
		{
			"title": "News 1",
			"text": "News is that..."
		}, 
		{
			"title": "News 2",
			"text": "News is that...2"
		}
	]
}