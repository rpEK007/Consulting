function onMenuClick(e){var a=$(this).find("a").attr("href"),s=window.scrollY;a&&(location.hash=a),e.preventDefault(),$(window).scrollTop(s)}function navigateTo(e){{var a,s=e.slice(1),i=$('.navbar-nav a[href="#'+s+'"]'),l=$("#"+s);window.scrollY}$(".navbar-nav li, .module.active").removeClass("active"),i.parent().is(".nav-bar")?l=l.add(i):(a=i.parents("li").last(),l=l.add(a)),$("body").toggleClass("showOurMission",a&&a.hasClass("showOurMission")),l.addClass("active"),$("#moduleName").text(i.text()),$(window).scrollTop(0)}function setL10n(){currentL10n=localStorage.getItem("l10n")||"ua",localStorage.setItem("l10n",currentL10n),locales[currentL10n].news=newsJSON[currentL10n],$("#main-wrapper").html(template(locales[localStorage.getItem("l10n")]))}function switchNews(e){var a=newsJSON[currentL10n][e];$("#singleNewsTitle").text(a.title),$("#singleNewsText").text(a.text),$("#singleNewsDate").text(a.date)}function template(e){var a=[],s=e||{},i=s.ourServices,l=s.ourMethods,t=s.directions,c=s.clients,o=s.examples,n=s.newsTitle,d=s.aboutJWA,r=s.aboutUs,p=s.ourContacts,v=s.ourPurposeTitle,u=s.ourPurposeText,m=s.news,h=s.partAboutJWA1,j=s.partAboutJWA2,w=s.methodsTitle1,g=s.methodsTitle2,b=s.methodsTitle3,f=s.methodsText1,x=s.methodsText2,T=s.methodsText3,N=s.directionEconomy,k=s.directionTransport,A=s.directionInvestments,C=s.directionNature,$=s.directionEducation,y=s.directionCulture,M=s.directionNonCommercial,J=s.directionTrainings,S=s.clientsLarge,W=s.clientsUniversities,E=s.clientsEntrepreneurs,L=s.clientsNonGovermental,I=s.clientsGovermental,U=s.clientsSpecialists,D=s.examplesEnergy,F=s.examplesMedicine,O=s.examplesNature,P=s.examplesIT,q=s.examplesTransport;a.push('<header id="header-1" class="header"><div class="container"><div class="row"><div class="col-xs-12 col-sm-8 header-info-wrapper"><ul class="list-inline"><li><i class="icon-mobile-phone"> Mobile: (123) 456-7890</i></li><li><i class="icon-envelope"> Mail: </i><a href="mailto:contact@example.com">contact@example.com</a></li></ul></div></div></div></header><header id="header-2" class="header"><nav role="navigation" class="navbar navbar-default"><div class="container"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="index.html" class="navbar-brand">JWA</a></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li class="dropdown showOurMission"><a data-toggle="dropdown" class="dropdown-toggle">'+jade.escape(null==(jade.interp=i)?"":jade.interp)+'</a><ul class="dropdown-menu"><li><a href="#ourMethods">'+jade.escape(null==(jade.interp=l)?"":jade.interp)+'</a></li><li><a href="#directions">'+jade.escape(null==(jade.interp=t)?"":jade.interp)+'</a></li><li><a href="#clients">'+jade.escape(null==(jade.interp=c)?"":jade.interp)+'</a></li><li><a href="#examples">'+jade.escape(null==(jade.interp=o)?"":jade.interp)+'</a></li></ul></li><li class="active"><a href="#news">'+jade.escape(null==(jade.interp=n)?"":jade.interp)+'</a></li><li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle">'+jade.escape(null==(jade.interp=d)?"":jade.interp)+'</a><ul class="dropdown-menu"><li><a href="#aboutUs">'+jade.escape(null==(jade.interp=r)?"":jade.interp)+'</a></li><li><a href="#ourContacts">'+jade.escape(null==(jade.interp=p)?"":jade.interp)+'</a></li></ul></li></ul></div></div></nav></header><section id="page-title-wrapper" class="section page-title-wrapper"><div class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-md-6 page-title"><h4 id="moduleName"></h4></div></div></div></section><section id="ourMissionWrapper" class="section"><div class="container"><div class="row"><div class="col-md-6 wrapper-1"><i class="icon-flag"></i></div><div class="col-md-6 wrapper-1"><h5 class="subpage-title">'+jade.escape(null==(jade.interp=v)?"":jade.interp)+"</h5><p>"+jade.escape(null==(jade.interp=u)?"":jade.interp)+'</p></div></div></div></section><div id="mainModules" class="tab-content section"><div id="news" class="module tab-pane section layout-2"><div class="container"><div class="row"><div class="col-md-9 content-wrapper"><article class="post"><div class="post-content"><h4 id="singleNewsTitle" class="post-title">'+jade.escape(null==(jade.interp=m[0].title)?"":jade.interp)+'</h4><p id="singleNewsText">'+jade.escape(null==(jade.interp=m[0].text)?"":jade.interp)+'</p><div class="post-meta"><ul class="meta-list"><li><span id="singleNewsDate" class="black">'+jade.escape(null==(jade.interp=m[0].date)?"":jade.interp)+'</span></li></ul></div></div></article></div><div class="col-md-3 sidebar"><div class="widget popular-posts"><h5 class="subpage-title">Latest News</h5><ul id="news-wrapper" class="recent-posts">'),function(){var e=m;if("number"==typeof e.length)for(var s=0,i=e.length;i>s;s++){var l=e[s];a.push("<li><article"+jade.attr("data-id",s,!0,!1)+' class="post"><div class="post-content"><h4 class="post-title"><a>'+jade.escape(null==(jade.interp=l.title)?"":jade.interp)+'</a></h4></div><div class="post-meta"><ul class="meta-list"><li><span class="black">'+jade.escape(null==(jade.interp=l.date)?"":jade.interp)+'</span></li><li><a class="read-news">Read<i class="icon-long-arrow-right"></i></a></li></ul></div></article></li>')}else{var i=0;for(var s in e){i++;var l=e[s];a.push("<li><article"+jade.attr("data-id",s,!0,!1)+' class="post"><div class="post-content"><h4 class="post-title"><a>'+jade.escape(null==(jade.interp=l.title)?"":jade.interp)+'</a></h4></div><div class="post-meta"><ul class="meta-list"><li><span class="black">'+jade.escape(null==(jade.interp=l.date)?"":jade.interp)+'</span></li><li><a class="read-news">Read<i class="icon-long-arrow-right"></i></a></li></ul></div></article></li>')}}}.call(this),a.push('</ul></div></div></div></div></div><div id="aboutUs" class="module tab-pane section"><div class="container"><div class="row"><div class="col-md-6 wrapper-1"><i class="icon-file-text-alt"></i></div><div class="col-md-6 wrapper-1"><h5 class="subpage-title">'+jade.escape(null==(jade.interp=d)?"":jade.interp)+"</h5><p>"+jade.escape(null==(jade.interp=h)?"":jade.interp)+"</p><p>"+jade.escape(null==(jade.interp=j)?"":jade.interp)+'</p></div></div></div></div><div id="ourMethods" class="module tab-pane"><section class="section colored-wrapper"><div class="container"><div class="row"><ul id="servicesTabs" class="nav col-md-7 col-xs-12"><li class="active"><a href="#method1" data-toggle="tab" aria-expanded="true"><div class="service service-2"><span class="service-icon"><i class="icon-eur"></i></span><h4>'+jade.escape(null==(jade.interp=w)?"":jade.interp)+'</h4></div></a></li><li><a href="#method2" data-toggle="tab" aria-expanded="false"><div class="service service-2"><span class="service-icon"><i class="icon-bullhorn"></i></span><h4>'+jade.escape(null==(jade.interp=g)?"":jade.interp)+'</h4></div></a></li><li><a href="#method3" data-toggle="tab" aria-expanded="false"><div class="service service-2"><span class="service-icon"><i class="icon-thumbs-up-alt"></i></span><h4>'+jade.escape(null==(jade.interp=b)?"":jade.interp)+'</h4></div></a></li></ul><div class="tab-content col-md-5 col-xs-12"><div id="method1" class="tab-pane active"><h5 class="subpage-title">'+jade.escape(null==(jade.interp=w)?"":jade.interp)+"</h5><p>"+jade.escape(null==(jade.interp=f)?"":jade.interp)+'</p></div><div id="method2" class="tab-pane"><h5 class="subpage-title">'+jade.escape(null==(jade.interp=g)?"":jade.interp)+"</h5><p>"+jade.escape(null==(jade.interp=x)?"":jade.interp)+'</p></div><div id="method3" class="tab-pane"><h5 class="subpage-title">'+jade.escape(null==(jade.interp=b)?"":jade.interp)+"</h5><p>"+jade.escape(null==(jade.interp=T)?"":jade.interp)+'</p></div></div></div></div></section></div><div id="directions" class="module tab-pane colored-wrapper section"><div class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-eur"></i></span><h4>'+jade.escape(null==(jade.interp=N)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-truck"></i></span><h4>'+jade.escape(null==(jade.interp=k)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-compass"></i></span><h4>'+jade.escape(null==(jade.interp=A)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-leaf"></i></span><h4>'+jade.escape(null==(jade.interp=C)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-book"></i></span><h4>'+jade.escape(null==(jade.interp=$)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-picture"></i></span><h4>'+jade.escape(null==(jade.interp=y)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-github"></i></span><h4>'+jade.escape(null==(jade.interp=M)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-group"></i></span><h4>'+jade.escape(null==(jade.interp=J)?"":jade.interp)+'</h4></div></div></div></div></div><div id="clients" class="module tab-pane colored-wrapper section"><div class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-eur"></i></span><h4>'+jade.escape(null==(jade.interp=S)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-laptop"></i></span><h4>'+jade.escape(null==(jade.interp=W)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-laptop"></i></span><h4>'+jade.escape(null==(jade.interp=E)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-laptop"></i></span><h4>'+jade.escape(null==(jade.interp=L)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-laptop"></i></span><h4>'+jade.escape(null==(jade.interp=I)?"":jade.interp)+'</h4></div></div><div class="col-xs-12 col-sm-6 col-md-4 wrapper-1"><div class="service service-2"><span class="service-icon"><i class="icon-laptop"></i></span><h4>'+jade.escape(null==(jade.interp=U)?"":jade.interp)+'</h4></div></div></div></div></div><div id="examples" class="module tab-pane colored-wrapper section"><div class="container"><div class="row"><div class="col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item"><div class="portfolio-item"><div class="portfolio-thumb"><i class="icon-bolt"></i><div class="image-overlay"></div><a href="javascript:void(0)" class="portfolio-link"><i class="icon-link"></i></a></div><div class="portfolio-content"><h5>'+jade.escape(null==(jade.interp=D)?"":jade.interp)+'</h5></div></div></div><div class="col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item"><div class="portfolio-item"><div class="portfolio-thumb"><i class="icon-user-md"></i><div class="image-overlay"></div><a href="javascript:void(0)" class="portfolio-link"><i class="icon-link"></i></a></div><div class="portfolio-content"><h5>'+jade.escape(null==(jade.interp=F)?"":jade.interp)+'</h5></div></div></div><div class="col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item"><div class="portfolio-item"><div class="portfolio-thumb"><i class="icon-leaf"></i><div class="image-overlay"></div><a href="javascript:void(0)" class="portfolio-link"><i class="icon-link"></i></a></div><div class="portfolio-content"><h5>'+jade.escape(null==(jade.interp=O)?"":jade.interp)+'</h5></div></div></div><div class="col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item"><div class="portfolio-item"><div class="portfolio-thumb"><i class="icon-laptop"></i><div class="image-overlay"></div><a href="javascript:void(0)" class="portfolio-link"><i class="icon-link"></i></a></div><div class="portfolio-content"><h5>'+jade.escape(null==(jade.interp=P)?"":jade.interp)+'</h5></div></div></div><div class="col-xs-12 col-sm-6 col-md-3 portfolio-item-wrapper artwork creative isotope-item"><div class="portfolio-item"><div class="portfolio-thumb"><i class="icon-rocket"></i><div class="image-overlay"></div><a href="javascript:void(0)" class="portfolio-link"><i class="icon-link"></i></a></div><div class="portfolio-content"><h5>'+jade.escape(null==(jade.interp=q)?"":jade.interp)+'</h5></div></div></div></div></div></div><div id="ourContacts" class="module tab-pane section"><section id="google-map" class="section google-map-2"><div class="container"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=dhaka&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=38.963048,86.572266&amp;ie=UTF8&amp;hq=&amp;hnear=Dhaka,+Dhaka+Division,+Bangladesh&amp;t=m&amp;z=10&amp;ll=23.709921,90.407143&amp;output=embed"></iframe></div></section><section id="contact-us" class="section contact-us"><div class="container"><div class="row"><div class="col-md-4 wrapper-2"><h5 class="subpage-title"><i class="icon-compass">Visit Us</i></h5><address><strong>FLATPOINT, INC.</strong><br/> 795 Folsom Ave, Suite 600<br/> San Francisco, CA 94107<br/></address><h5 class="subpage-title"><i class="icon-phone">Contact</i></h5><address>Phone: (123) 456-7890<br/> Fax: (123) 456-7890<br/><a href="mailto:#">contact@example.com</a></address></div><div id="contactForm" class="col-md-8 wrapper-1"><form class="contact-form"><h5 class="subpage-title">Get In Touch</h5><div class="row"><div class="col-md-4"><input placeholder="Name" type="text" class="input form-control"/></div><div class="col-md-4"><input placeholder="Email" type="text" class="input form-control"/></div><div class="col-md-4"><input placeholder="Subject" type="text" class="input form-control"/></div></div><textarea placeholder="Your Message" rows="3" class="form-control"></textarea><button class="btn btn-flat flat-color">Submit</button></form></div></div></div></section></div></div><footer id="footer-1" class="footer"><div class="container"><div class="row"><div class="col-md-4"><div class="widget about-us"><span class="footer-brand">JWA</span><p>'+jade.escape(null==(jade.interp=h)?"":jade.interp)+'</p></div></div><div class="col-md-3"><div class="widget popular-posts"><h5 class="subpage-title">News</h5>');var G=0;for(a.push('<ul id="footer-news" class="recent-posts">');3>G;)a.push('<li><h5><a href="#news"'+jade.attr("data-id",G,!0,!1)+">"+jade.escape(null==(jade.interp=m[G].title)?"":jade.interp)+"</a><small>"+jade.escape(null==(jade.interp=m[G].date)?"":jade.interp)+"</small>"),G++,a.push("</h5></li>");return a.push("</ul></div></div></div></div></footer>"),a.join("")}window.locales={ua:{newsTitle:"Новини",aboutUs:"Про нас",ourServices:"Наші послуги",ourMethods:"Методологія JWA",directions:"Напрямки",clients:"Категорії клієнтів",examples:"Приклади проектів",ourContacts:"Контакти",aboutJWA:"Про JWA",ourPurposeTitle:"Наша ціль",ourPurposeText:"Нашу місію ми вбачаємо в тому, щоби прибрати будь-які перешкоди на шляху різноманітних спеціалістів, компаній та установ до отримання європейських фінансових ресурсів. Наш досвід підтверджує, що саме такі гранти найчастіше допомагають у розробці інноваційних напрямків та продуктів, укріпленню міжнародної співпраці і народженню нового інтернаціонального виміру, де сміливі ідеї перетворюються на реальність.",methodsTitle1:"Підтримуємо у пошуку фінансування",methodsTitle2:"Максимізуємо можливості",methodsTitle3:"Спрощуємо складне",methodsText1:"Ми завжди починаємо з зустрічей і аналізу Ваших потреб та цілей розвитку.\n\nІснує безліч можливостей отримати фінансування через широкий спектр різноманітних каналів. Більшість компаній та організацій не мають достатньо часу або ресурсів для вивчення таких можливостей. Проте часто зовнішнє фінансування може надати поштовх до розробки нових ідей та напрямків у роботі. Наш досвід і професійні напрацювання допоможуть Вам на цьому шляху і нададуть експертизу, якої може не вистачати для досягнення мети.",methodsText2:"Різноманітні європейські організації регулярно надають великі об’єми фінансування для тих чи інших цілей. Добре розуміючи сутність вимог і стандарти роботи цих організацій, експерти JWA Funding здатні підвищити шанси Вашої компанії на отримання фінансового гранту. Наприклад, ми можемо допомогти розкрити Вашу ідею і план дій у потрібному ракурсі, підкреслити Ваші конкурентні переваги, створити консорціум українського чи міжнародного масштабу тощо.",methodsText3:"Отримання європейського фінансування вимагає виконання певних вимог і послідовних кроків. Не менш важливою є і правильність дій після отримання гранту, адже євпропейські організації моніторять цільове використання коштів. Наші консультанти мають за плечима багато успішних проектів і володіють широким набором технік проектного менеджменту. Розроблена нами методологія дозволяє побудувати виважену систему для отримання і подальшого управління грантом.",directionEconomy:"Економічний розвиток",directionTransport:"Транспорт",directionInvestments:"Дослідницькі проекти",directionNature:"Навколишнє середовище",directionEducation:"Освіта",directionCulture:"Культура",directionNonCommercial:"Некомерційні проекти",directionTrainings:"Тренінги і семінари",clientsLarge:"Великі компанії",clientsUniversities:"Університети",clientsEntrepreneurs:"Середній та малий бізнес",clientsNonGovermental:"Неурядові організації",clientsGovermental:"Органи державної влади",clientsSpecialists:"Індивідуальні спеціалісти",examplesEnergy:"Енергетика",examplesMedicine:"Медицинські дослідження",examplesNature:"Навколишнє середовище",examplesIT:"Інформаційні технології",examplesTransport:"Транспорт",partAboutJWA1:"JWA Funding є консалтинговою компанією, яка базується в самому центрі Брюсселя, в зосередженні європейських проектів і джерел для їхнього фінансування. \nМи надаємо послуги управління грантовими проектами, від моменту формулювання потреби і написання грантової пропозиції, до стадії розробки системи стратегічного розвитку компаній і організацій-отримувачів фінансування.",partAboutJWA2:"Команда експертів JWA Funding працює на ринку міжнародного фінансування понад 20 років. За цей час ми розробили і успішно скоординували чисельні грантові проекти у співпраці з провідними європейськими банками і фінансовими установами, органами державної влади європейських країн, видатними європейськими університетами і науково-дослідницькими платформами.\n\nПрацюючи з грантовими проектами у Європі та за її межами, наші експерти стали провідниками фінансових ресурсів на суму, що перевищує 150 міліонів євро. \n\nОкрім цього, ми організували та провели понад 100 семінарів та тренінгів з питань отримання європейського фінансування."},en:{newsTitle:"News",aboutUs:"About Us",ourMethods:"Our Methodologies",directions:"Directions",clients:"Clients",examples:"Project Examples",ourContacts:"Our Contacts"}},isTouchDevice="ontouchstart"in document.documentElement,$(window).bind("hashchange",function(){navigateTo(location.hash)}),$(function(){setL10n(),$("body").on("click",".navbar-nav li",onMenuClick).on("click","#news-wrapper a",function(e){switchNews($(e.target).parents("article").data("id"))}).on("click","#footer-news a",function(e){switchNews($(e.target).data("id"))}),location.hash=location.hash||"news",navigateTo(location.hash),isTouchDevice||$('#servicesTabs [data-toggle="tab"]').on("mouseenter",function(){$(this).click()})}),window.newsJSON={ua:[{title:"Новина 1",text:"Новина така що...",date:"04/09/2015"},{title:"Новина 2",text:"Новина така що...2",date:"04/08/2015"},{title:"Новина 3",text:"Новина така що...3",date:"04/07/2015"},{title:"Новина 4",text:"Новина така що...4",date:"04/06/2015"},{title:"Новина 5",text:"Новина така що...5",date:"04/05/2015"}],en:[{title:"News 1",text:"News is that...",date:"04/09/2015"},{title:"News 2",text:"News is that...2",date:"04/08/2015"},{title:"News 3",text:"News is that...3",date:"04/07/2015"},{title:"News 4",text:"News is that...4",date:"04/06/2015"},{title:"News 5",text:"News is that...5",date:"04/05/2015"}]};