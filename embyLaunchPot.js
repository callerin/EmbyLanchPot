
// ==UserScript==
// @name         embyLaunchPotplayer
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @include             *:8096*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==
var timer = setInterval(function () {
	var potplayer = $("div[is='emby-scroller']:not(.hide) .potplayer")[0];

	if (!potplayer) {
		var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
		if (mainDetailButtons) {
			var html = mainDetailButtons.innerHTML;
			let buttonhtml = `<div class ="detailButtons mainDetailButtons flex align-items-flex-start flex-wrap-wrap focuscontainer-x">
            <button id="embyPot" type="button" class="detailButton  emby-button potplayer" title="Potplayer"> <div class="detailButton-content"> <i class="md-icon detailButton-icon"></i>  <div class="detailButton-text">PotPlayer</div> </div> </button>
             </div>`
			mainDetailButtons.insertAdjacentHTML('afterBegin', buttonhtml)   // 按钮插入位置
			document.querySelector("div[is='emby-scroller']:not(.hide) #embyPot").onclick = embyPot;
		}

	}
}, 400)

async function embyPot() {
	var mediaUrl = $("div[is='emby-scroller']:not(.hide) div.sectionTitle.sectionTitle-cards div").siblings('div')[0];
	var url = "emby://" + mediaUrl.innerHTML;
	window.location.href = url;
}
