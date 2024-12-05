document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
});

$(document).on('wheel', function (e) {
    if (e.originalEvent.ctrlKey) {
      e.preventDefault();
    }
});

document.addEventListener('touchmove', function (e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
}, { passive: false });

$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {

			/*2回目以降アクセス時の処理*/
      $(".loading").addClass('is-active');
			$("#header0").css('display', 'block');
			var video = document.getElementById('videoTime');
			video.play();

    } else {

			/*初回アクセス時の処理*/
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
			$("body").css('overflow', 'hidden');
			$("#header0").css('display', 'none');
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示

			setTimeout(function () {
        	// ローディングを数秒後に非表示にする
				$("body").css('overflow', 'auto');
				$("#header0").css('display', 'block');
	        	$(".loading").addClass('is-active');
    		    $(".loading-animation").removeClass('is-active');
				var video = document.getElementById('videoTime');
				video.play();
			
      }, 4000); // ローディングを表示する時間
    }
  }
  webStorage();
});


var slide = document.getElementById('slider');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var list5 = document.getElementById('list5');
var list6 = document.getElementById('list6');

// クリックイベント

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider2');
    list1.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider3');
    list2.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider4');
    list3.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider4') === true) {
    slide.classList.remove('slider4');
    slide.classList.add('slider5');
    list4.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider5') === true) {
    slide.classList.remove('slider5');
    slide.classList.add('slider6');
    list5.style.backgroundColor = 'transparent';
    list6.style.backgroundColor = '#ffffff';
    count = 0;
  } else {
    slide.classList.remove('slider6');
    slide.classList.add('slider1');
    list6.style.backgroundColor = 'transparent';
    list1.style.backgroundColor = '#ffffff';
    count = 0;
  }
};

function prevClick() {
  if (slide.classList.contains('slider1') === true) {
    slide.classList.remove('slider1');
    slide.classList.add('slider6');
    list1.style.backgroundColor = 'transparent';
    list6.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider2') === true) {
    slide.classList.remove('slider2');
    slide.classList.add('slider1');
    list2.style.backgroundColor = 'transparent';
    list1.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider3') === true) {
    slide.classList.remove('slider3');
    slide.classList.add('slider2');
    list3.style.backgroundColor = 'transparent';
    list2.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider4') === true) {
    slide.classList.remove('slider4');
    slide.classList.add('slider3');
    list4.style.backgroundColor = 'transparent';
    list3.style.backgroundColor = '#ffffff';
    count = 0;
  } else if (slide.classList.contains('slider5') === true) {
    slide.classList.remove('slider5');
    slide.classList.add('slider4');
    list5.style.backgroundColor = 'transparent';
    list4.style.backgroundColor = '#ffffff';
    count = 0;
  } else {
    slide.classList.remove('slider6');
    slide.classList.add('slider5');
    list6.style.backgroundColor = 'transparent';
    list5.style.backgroundColor = '#ffffff';
    count = 0;
  }
};

// インジケーター

list1.addEventListener('click', click1);
list2.addEventListener('click', click2);
list3.addEventListener('click', click3);
list4.addEventListener('click', click4);
list5.addEventListener('click', click5);
list6.addEventListener('click', click6);

function click1() {
  slide.classList.add('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  slide.classList.remove('slider5');
  slide.classList.remove('slider6');
  list1.style.backgroundColor = '#ffffff';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  list5.style.backgroundColor = 'transparent';
  list6.style.backgroundColor = 'transparent';
  count = 0;
}

function click2() {
  slide.classList.remove('slider1');
  slide.classList.add('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  slide.classList.remove('slider5');
  slide.classList.remove('slider6');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = '#ffffff';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  list5.style.backgroundColor = 'transparent';
  list6.style.backgroundColor = 'transparent';
  count = 0;
}

function click3() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.add('slider3');
  slide.classList.remove('slider4');
  slide.classList.remove('slider5');
  slide.classList.remove('slider6');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = '#ffffff';
  list4.style.backgroundColor = 'transparent';
  list5.style.backgroundColor = 'transparent';
  list6.style.backgroundColor = 'transparent';
  count = 0;
}

function click4() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.add('slider4');
  slide.classList.remove('slider5');
  slide.classList.remove('slider6');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = '#ffffff';
  list5.style.backgroundColor = 'transparent';
  list6.style.backgroundColor = 'transparent';
  count = 0;
}

function click5() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  slide.classList.add('slider5');
  slide.classList.remove('slider6');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  list5.style.backgroundColor = '#ffffff';
  list6.style.backgroundColor = 'transparent';
  count = 0;
}

function click6() {
  slide.classList.remove('slider1');
  slide.classList.remove('slider2');
  slide.classList.remove('slider3');
  slide.classList.remove('slider4');
  slide.classList.remove('slider5');
  slide.classList.add('slider6');
  list1.style.backgroundColor = 'transparent';
  list2.style.backgroundColor = 'transparent';
  list3.style.backgroundColor = 'transparent';
  list4.style.backgroundColor = 'transparent';
  list5.style.backgroundColor = 'transparent';
  list6.style.backgroundColor = '#ffffff';
  count = 0;
}

// 自動スライド
// var count = 0;

// setInterval(() => {
//   if (count > 4) {
//     count = 0;
//     nextClick();
//   }
//   count++;
//   console.log(count);
// }, 1000);



























/*----- ハンバーガー及びアコーディオンメニュー関連 -----*/

// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");

// メニュー開閉制御
hamburger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    hamburger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});
window.addEventListener("keydown", () => {   //escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    hamburger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    hamburger.focus();
    hamburger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});

// メニューを閉じる動作を関数として外部から実行するために、↑のEscボタンの処理をコピペ
function closeAndJump(){
	hamburger.classList.remove(CLASS);
	menu.classList.remove(CLASS);

	backgroundFix(false);
	hamburger.focus();
	hamburger.setAttribute("aria-expanded", "false");
	flg = false;

}

// メニュー内アコーディオン制御
accordionTrigger.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle(CLASS);
    e.currentTarget.nextElementSibling.classList.toggle(CLASS);
    if (accordionFlg) {
      e.currentTarget.setAttribute("aria-expanded", "false");
      accordionFlg = false;
    } else {
      e.currentTarget.setAttribute("aria-expanded", "true");
      accordionFlg = true;
    }
  });

});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
});

/* ------------------------------------------------- */

// Web用サブメニュー表示
$(function() {
	// $(window).on('scroll', function() {
	// 	var mvHeight = parseInt($('.mv-block').innerHeight());
	// 	if($(window).scrollTop() >= mvHeight) {
	// 		$('#header').css('background','rgba(0, 0, 0, 0.0)');
	// 	} else {
	// 		$('#header').css('background','rgba(0, 0, 0, 0.0)');
	// 	}
	// });

	$('#header0').hover(
		function() {
			$(this).addClass('hovered');
		},
		function() {
			$(this).removeClass('hovered');
			$(this).find('.menu-list li').removeClass('selected');
			$(this).find('.sub-menu-list').removeClass('selected');
		}
	);

	$('#header0 .menu-list li').hover(
		function() {
			var ttl = $(this).children('a').text();
			$(this).addClass('selected');
			$(this).siblings().removeClass('selected');

			var current;
			switch(ttl) {
				case "PROFILE自己紹介":
					current = $('#header0 .sub-menu-list.sub01');
					$(current).addClass('selected');
					break;
				case "PORTFOLIOポートフォリオ":
					current = $('#header0 .sub-menu-list.sub02');
					$(current).addClass('selected');
					break;
				case "メインメニュー03":
					current = $('#header0 .sub-menu-list.sub03');
					$(current).addClass('selected');
					break;
				default:
					current = $('#header0 .sub-menu-list');
					break;
			}
			$(current).siblings().removeClass('selected');
		},
		function() {
			//マウスカーソルが離れた時の処理
		}
	);
});

// 動画再生位置より下にスクロールした場合のヘッダーの色を変更
window.addEventListener("scroll", function () {
	// ヘッダーを変数の中に格納する
	const header = document.querySelector("header");
	// 900px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
	header.classList.toggle("scroll-nav", window.scrollY > 880);
});

/*----オーバーレイ処理----*/
//障害について
hideLogin1();
function showLogin1(){
	const loginForm1 = document.getElementById("handicapped");
	// blockで表示
	loginForm1.style.display ="block";
	$("body").css("overflow-y", "hidden");        
}
function hideLogin1(){
	var loginForm1 = document.getElementById("handicapped");
	// noneで非表示
	loginForm1.style.display ="none";
	$("body").css("overflow-y", "visible");
}
//お問い合わせ
hideLogin2();
function showLogin2(){
	const loginForm2 = document.getElementById("inquiry");
	// blockで表示
	loginForm2.style.display ="block";
	$("body").css("overflow-y", "hidden");        
}
function hideLogin2(){
	var loginForm2 = document.getElementById("inquiry");
	// noneで非表示
	loginForm2.style.display ="none";
	$("body").css("overflow-y", "visible");
}
//このサイトについて
hideLogin3();
function showLogin3(){
	const loginForm3 = document.getElementById("about");
	// blockで表示
	loginForm3.style.display ="block";
	$("body").css("overflow-y", "hidden");        
}
function hideLogin3(){
	var loginForm3 = document.getElementById("about");
	// noneで非表示
	loginForm3.style.display ="none";
	$("body").css("overflow-y", "visible");
}
//プライバシーポリシー
hideLogin4();
function showLogin4(){
	const loginForm4 = document.getElementById("privacy");
	// blockで表示
	loginForm4.style.display ="block";
	$("body").css("overflow-y", "hidden");        
}
function hideLogin4(){
	var loginForm4 = document.getElementById("privacy");
	// noneで非表示
	loginForm4.style.display ="none";
	$("body").css("overflow-y", "visible");
}

// Topページへのスクロールボタン
$(function() {
	var pagetop = $('#page-top');
	pagetop.hide();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {  //920pxスクロールしたら表示
					pagetop.fadeIn();
			} else {
					pagetop.fadeOut();
			}
	});
	pagetop.click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500); //0.5秒かけてトップへ移動
			return false;
	});
});