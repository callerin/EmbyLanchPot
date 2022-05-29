
// ==UserScript==
// @name embyLaunchPotplayer
// @namespace http://tampermonkey.net/
// @version 0.5
// @description try to take over the world!
// @author You
// @include *:8096*
// @grant none
// @require https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// ==/UserScript==
var timer = setInterval(function () {
	var potplayer = $("button[is='embyPot']:not(.hide) ")[0];

	if (!potplayer) {
		var mainDetailButtons = $("div[is='emby-scroller']:not(.hide) .mainDetailButtons")[0];
		if (mainDetailButtons) {
			var html = mainDetailButtons.innerHTML;
			let buttonhtml = `<button is="embyPot" type="button"
	class="btnPlay btnMainPlay raised detailButton emby-button emby-button-backdropfilter raised-backdropfilter detailButton-primary"
	data-mode="play" title="Potplayer" aria-label="Potplayer">
	<i class="md-icon button-icon button-icon-left"></i>
	<span class="playButtonText">Potplayer</span>
</button>`


			mainDetailButtons.insertAdjacentHTML('beforeEnd', buttonhtml) // 按钮插入位置
			document.querySelector("button[is='embyPot']:not(.hide)").onclick = embyPot;
		}

	}
}, 400)

async function embyPot() {
	var mediaUrl = $("div[is='emby-scroller']:not(.hide) div.sectionTitle.sectionTitle-cards div").siblings('div')[0];
	var url = "emby://" + mediaUrl.innerHTML;
	window.location.href = url;
}