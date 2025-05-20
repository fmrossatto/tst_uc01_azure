(function(tweenui) {
var timeline;
var loop=1;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
function startPlaying() { if (g('tui-t')) {timeline.seek(parseFloat(g('tui-t')));window.tuidone = 1; } else { if (loop<0) timeline.play(0); else { if (loop>0){loop--;timeline.play(0)}}}}
function g(name) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"); var results = regex.exec(window.location.search); if(results == null) return ""; else return decodeURIComponent(results[1].replace(/\+/g, " ")); }
function gl(a){for(var i=0;i<a.length;++i){var x=g(a[i]);if (x!='')return x;}return '';}
var res = function() { var bd = document.getElementsByTagName('body')[0];if (firefox) {bd.style.mozTransform = 'scale(' + window.innerWidth/1095 + ')';bd.style.transform = 'scale(' + window.innerWidth/1095 + ')';} else {bd.style.zoom = window.innerWidth/1095;}if (iOS) { setTimeout(function() {window.onresize = ires},100) } else { window.onresize = res }bd.style.display = '';}
var ires = function() { if (window.onresize) { window.onresize = null; var bd = document.getElementsByTagName('body')[0]; bd.style.display = 'none'; setTimeout(res, 500); }}
var loadcnt = 3;
function tui_go() {
--loadcnt; if (loadcnt==0) {
var l = gl(["l","clickTAG"]); var ctl = document.getElementById("tui-ctl");
if (l!="" && ctl) { if (g('a')==1) { l = l + encodeURIComponent(ctl.href) } ctl.href=l; ctl.style.pointerEvents="auto"}
if (typeof(tweenui.exp) == "function") { tweenui.exp(); }
if (g('s')==1) { res();if (iOS) { window.addEventListener('orientationchange', ires, false) }}
document.getElementsByTagName('body')[0].style.opacity=1;
startPlaying();
}
}
tweenui.init = function() {
timeline = new TimelineLite({paused:true, onComplete:startPlaying});
TweenLite.defaultOverwrite = "none";
timeline.insert(new TweenLite({}, 0.0, {}), 10.0);
var layer_1 = document.getElementById("tui-4");
timeline.insert(TweenLite.to(layer_1, 0, {css:{display: "block"}, immediateRender:false}), 0.8521739130434782);
timeline.insert(TweenLite.to(layer_1, 4.71304347826087, {css: {scale: 1.0}, ease: Power1.easeOut}), 2.8521739130434782);
timeline.insert(TweenLite.to(layer_1, 4.608695652173913, {css: {rotationX: 0.0, rotationY: 0.0,rotationZ: 360.0}, ease: Power1.easeOut}), 2.9217391304347826);
TweenLite.set(layer_1, {css: {autoAlpha: 1.0, x: 589, y: 96, scale: 0.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_2 = document.getElementById("tui-2");
timeline.insert(TweenLite.to(layer_2, 0, {css:{display: "block"}, immediateRender:false}), 0.7789473684210528);
timeline.insert(TweenLite.to(layer_2, 2.1942857142857144, {css: {y: 333, x: 7}, ease: Power1.easeOut}), 2.8800000000000003);
TweenLite.set(layer_2, {css: {autoAlpha: 1.0, x: -456, y: 333, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_3 = document.getElementById("tui-3");
timeline.insert(TweenLite.to(layer_3, 0, {css:{display: "block"}, immediateRender:false}), 0.8869565217391306);
timeline.insert(TweenLite.to(layer_3, 4.4, {css: {scale: 1.0}, ease: Power1.easeOut}), 2.8521739130434782);
TweenLite.set(layer_3, {css: {autoAlpha: 1.0, x: 476, y: 5, scale: 0.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_4 = document.getElementById("tui-1");
timeline.insert(TweenLite.to(layer_4, 2.3314285714285714, {css: {scale: 1.0}, ease: Power1.easeOut}), 0.37714285714285717);
TweenLite.set(layer_4, {css: {autoAlpha: 1.0, x: 7, y: 126, scale: 0.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
tui_go();
}
tui_go();
var imgcnt = 4;
tweenui.imgcntd = function(e) { var id = e.id.replace(/[^0-9.]/g, "");e.parentNode.removeChild(e);document.getElementById('tui-' + id).appendChild(e); --imgcnt; if (imgcnt==0) { tui_go(); }}
}(window.tweenui = window.tweenui || {}));

(function(d, t) {
var s = d.createElement(t);
s.src = 'js/TweenMax.min.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
tweenui.init();
};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');