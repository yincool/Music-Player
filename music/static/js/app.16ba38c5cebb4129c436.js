webpackJsonp([9],{"+X4l":function(t,e,n){n("5RfL");var i=n("VU/8")(n("aidx"),n("nFzD"),"data-v-4074180b",null);t.exports=i.exports},"0iSB":function(t,e,n){n("DEm6");var i=n("VU/8")(n("k2CR"),n("kQ7F"),"data-v-0a2f50f0",null);t.exports=i.exports},"3Q4o":function(t,e,n){"use strict";function i(t,e){if(!s(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}function s(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function r(t){return"standard"===c?t:""+c+t.charAt(0).toUpperCase()+t.substr(1)}e.b=i,e.a=r;var a=document.createElement("div").style,c=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==a[t[e]])return e}()},"58Us":function(t,e){},"5RfL":function(t,e){},"6Jam":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("m-tab"),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("player")],1)},staticRenderFns:[]}},"9cIF":function(t,e,n){"use strict";function i(t){var e={pcachetime:+new Date,songmid:t,g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0};return c.a.get("/api/lyric",{params:e}).then(function(t){return r.a.resolve(t.data)})}e.a=i;var s=n("//Fk"),r=n.n(s),a=n("mtWM"),c=n.n(a);n("Gak4")},B1su:function(t,e){},DEm6:function(t,e){},DXDo:function(t,e,n){n("58Us");var i=n("VU/8")(n("qZJc"),n("zCc6"),"data-v-8362a2ce",null);t.exports=i.exports},EmhP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("GQaK");e.default={name:"Scroll",props:{click:{click:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!1},probeType:{type:Number,default:2},pullUp:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(this.scroll=new i.a(this.$refs.wrapper,{click:this.click,probeType:this.probeType}),this.listenScroll&&this.scroll.on("scroll",function(e){t.$emit("scroll",e)}),this.pullUp&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")}))},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(t){var e=this;this.$nextTick(function(){e.refresh()})}}}},FS0v:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-header"},[n("div",{staticClass:"icon"}),t._v(" "),n("h1",{staticClass:"text"},[t._v("Music")])])}]}},Gak4:function(t,e,n){"use strict";function i(t,e,n){return t=-1!==t.indexOf("?")?t:t+"?"+s(e),new a.a(function(e,i){o()(t,n,function(t,n){t?i(t):e(n)})})}function s(t){if(!t)return"";var e="";for(var n in t)e+="&"+n+"="+t[n];return e.substring(1)}e.a=i;var r=n("//Fk"),a=n.n(r),c=n("hU7x"),o=n.n(c)},"Hod+":function(t,e){},HzVJ:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"j",function(){return f});var i="SET_SINGER",s="SET_PLAYING_STATE",r="SET_FULL_SCREEN",a="SET_PLAY_LIST",c="SET_SEQUENCE_LIST",o="SET_PLAY_MODE",u="SET_CURRENT_INDEX",l="SET_DISC",d="SET_TOP_LIST",f="SET_SEARCH_HISTORY"},IcnI:function(t,e,n){"use strict";var i=n("7+uW"),s=n("NYxO"),r=n("mUbh"),a=n("UjVw"),c=n("ukYY"),o=n("lwq5"),u=n("sax8");n.n(u);i.a.use(s.a);e.a=new s.a.Store({actions:r,getters:a,mutations:c.a,state:o.a,strict:!1,plugins:[]})},JkZS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"progress-circle",data:function(){return{dasharray:94.2}},props:{percent:{type:Number,default:0},radius:{type:Number,default:32}},watch:{},filters:{},methods:{},computed:{dashoffset:function(){return(1-this.percent)*this.dasharray}},created:function(){},mounted:function(){},destroyed:function(){}}},"Kf/3":function(t,e,n){"use strict";function i(t,e,n,i){var s=t.findIndex(n);s&&(s>0&&t.splice(s,1),t.unshift(e),i&&t.length>i&&t.pop())}function s(t){var e=l.a.get(d,[]);return i(e,t,function(e){return e===t},f),l.a.set(d,e),e}function r(){return l.a.get(d,[])}function a(t,e){var n=t.findIndex(e);n>-1&&t.splice(n,1)}function c(t){var e=l.a.get(d,[]);return a(e,function(e){return e===t}),l.a.set(d,e),e}function o(){return l.a.remove(d),[]}e.b=s,e.a=r,e.c=c,e.d=o;var u=n("MfZv"),l=n.n(u),d="__search__",f=30},M93x:function(t,e,n){n("iGu4");var i=n("VU/8")(n("xJD8"),n("6Jam"),null,null);t.exports=i.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("j1ja"),s=(n.n(i),n("QKTF")),r=(n.n(s),n("7+uW")),a=n("M93x"),c=n.n(a),o=n("YaEn"),u=n("v5o6"),l=n.n(u),d=n("cTzj"),f=n.n(d),h=n("NYxO"),p=n("IcnI"),m=n("cN2K"),v=(n.n(m),n("M4fF"));n.n(v);r.a.use(f.a,{loading:n("WeUh")}),r.a.use(h.a),l.a.attach(document.body),r.a.config.productionTip=!1,new r.a({el:"#app",router:o.a,store:p.a,render:function(t){return t(c.a)}})},PbpO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),r=n("W/7t"),a=n("NYxO"),c=(n("9cIF"),n("zu6c")),o=n.n(c),u=n("0iSB"),l=n.n(u),d=n("lII2"),f=n.n(d),h=n("EhXH"),p=n.n(h),m=n("3Q4o"),v=n("hhm8"),g=n("xrTZ"),y=(n.n(g),n("OKJt")),_=n.n(y),C=n("+X4l"),S=n.n(C),x=n.i(m.a)("transform"),L=n.i(m.a)("transitionDuration");e.default={name:"player",data:function(){return{songReady:!1,currentTime:0,currentLyric:null,currentLineNum:0,currentShow:"cd",playLyric:"暂无歌词",radius:30}},created:function(){this.touch={}},computed:s()({},n.i(a.b)(["fullScreen","playList","currentSong","playing","currentIndex","mode","sequenceList"]),{bgImg:function(){if(this.currentSong)return this.currentSong.image},bgStyle:function(){return"background-image: url("+this.bgImg+")"},url:function(){return this.currentSong.url},playIcon:function(){return this.playing?"icon-pause":"icon-play"},percent:function(){if(this.currentSong)return this.currentTime/this.currentSong.duration},iconMode:function(){return this.mode===r.a.sequence?"icon-sequence":this.mode===r.a.loop?"icon-loop":"icon-random"}}),methods:s()({},n.i(a.c)({setFullScreen:"SET_FULL_SCREEN",setPlayState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",setPlayList:"SET_PLAY_LIST"}),{showPlayList:function(){this.$refs.playList.show()},changeMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var e=null;e=t===r.a.random?n.i(v.a)(this.sequenceList):t==r.a.sequence?this.sequenceList:[this.sequenceList[this.currentIndex]],this.resetCurrentIndex(e),this.setPlayList(e)},back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlay:function(){this.setPlayState(!this.playing);var t=getComputedStyle(this.$refs.cdWrapPlay).transform,e=getComputedStyle(this.$refs.imageWrap).transform;this.playing||(this.$refs.cdWrapPlay.style.transform="none"===t?e:e.concat(" ",t),this.$refs.imageWrap.classList.remove("play")),this.currentLyric&&this.currentLyric.togglePlay()},prev:function(){if(this.songReady){this.mode===r.a.loop&&this.loop(),1===this.playList.length&&this.loop();var t=this.playList.length;this.setPlayState(!1);var e=this.currentIndex-1;e<0&&(e=t-1),this.setCurrentIndex(e),this.setPlayState(!0),this.songReady=!1}},next:function(){if(this.songReady){this.mode===r.a.loop&&this.loop(),1===this.playList.length&&this.loop();var t=this.playList.length;this.setPlayState(!1);var e=this.currentIndex+1;e>=t&&(e=0),this.setCurrentIndex(e),this.setPlayState(!0),this.songReady=!1}},ready:function(){this.songReady=!0},error:function(){var t=this;this.songReady=!0,clearTimeout(this.timer),this.timer=setTimeout(function(){t.next()},1e3)},updatetime:function(t){this.currentTime=t.target.currentTime},formate:function(t){return t|=0,this._pad(t/60|0)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t},enter:function(t,e){var n=this._getPosAndScale(),i=n.x,s=n.y,r=n.scale,a={0:{transform:"translate3d("+i+"px, "+s+"px, 0) scale("+r+")"},60:{transform:"translate3d(0, 0, 0) scale(1.1)"},100:{transform:"translate3d(0, 0, 0) scale(1)"}};p.a.registerAnimation({name:"move",animation:a,presets:{duration:400,easing:"linear"}}),p.a.runAnimation(this.$refs.cdWrapper,"move",e)},afterEnter:function(){p.a.unregisterAnimation("move"),this.$refs.cdWrapper.style.animation=""},leave:function(t,e){this.$refs.cdWrapper.style.transition="all 0.4s";var n=this._getPosAndScale(),i=n.x,s=n.y,r=n.scale;this.$refs.cdWrapper.style[x]="translate3d("+i+"px, "+s+"px, 0) scale("+r+")",this.$refs.cdWrapper.addEventListener("transitionend",e)},afterLeave:function(){this.$refs.cdWrapper.style[x]="",this.$refs.cdWrapper.style.transition=""},_getPosAndScale:function(){var t=.8*window.innerWidth,e=40/t;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-t/2-30,scale:e}},percentChange:function(t){this.$refs.audio.currentTime=this.currentSong.duration*t,this.currentLyric&&this.currentLyric.seek(this.currentSong.duration*t*1e3)},end:function(){this.mode===r.a.loop?this.loop():this.next()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.currentLyric&&this.currentLyric.seek(0)},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(e){t.currentSong.lyric===e&&(t.currentLyric=new _.a(e,t.handleLylic),t.playing&&t.currentLyric.play())}).catch(function(){t.currentLyric=null,t.playingLyric="",t.currentLineNum=0})},handleLylic:function(t){var e=t.lineNum,n=t.txt;if(this.currentLineNum=e,e>5){var i=this.$refs.lyricLine[e-5];this.$refs.lyricList.scrollToElement(i,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3);this.playLyric=n},touchStart:function(t){this.touch.init=!0,this.touch.startX=t.touches[0].pageX,this.touch.startY=t.touches[0].pageY},touchMove:function(t){if(this.touch.init){var e=t.touches[0].pageX-this.touch.startX,n=t.touches[0].pageY-this.touch.startY;if(!(Math.abs(e)<Math.abs(n))){var i="cd"===this.currentShow?0:-window.innerWidth,s=Math.min(0,Math.max(-window.innerWidth,i+e));this.touch.percent=Math.abs(s/window.innerWidth),this.$refs.lyricList.$el.style[x]="translate3d("+s+"px, 0, 0)",this.$refs.lyricList.$el.style[L]="0ms",this.$refs.middleL.style.opacity=1-this.touch.percent,this.$refs.middleL.style[L]="0"}}},touchEnd:function(){this.touch.init=!1;var t=void 0,e=void 0;"cd"===this.currentShow?this.touch.percent>.1?(t=-window.innerWidth,this.currentShow="lyric",e=0):t=0:this.touch.percent<.9?(t=0,this.currentShow="cd",e=1):t=-window.innerWidth;this.$refs.lyricList.$el.style[x]="translate3d("+t+"px, 0, 0)",this.$refs.lyricList.$el.style[L]="300ms",this.$refs.middleL.style.opacity=e,this.$refs.middleL.style[L]="300ms"}}),watch:{currentSong:function(t,e){var n=this;t.id&&t.id!==e.id&&(this.currentLyric&&(this.currentLyric.stop(),this.currentTime=0,this.playingLyric="",this.currentLineNum=0),clearTimeout(this.timer),this.timer=setTimeout(function(){n.$refs.audio.play(),n.getLyric()},1e3))},playing:function(t){var e=this;this.$nextTick(function(){var n=e.$refs.audio;t?n.play():n.pause()}),t&&this.$refs.imageWrap.classList.add("play")}},components:{Scroll:o.a,Process:l.a,ProgressCircle:f.a,PlayList:S.a}}},QdfO:function(t,e){},RGpE:function(t,e,n){n("hCoU");var i=n("VU/8")(n("zXYm"),n("SrVv"),"data-v-314ae981",null);t.exports=i.exports},RMDe:function(t,e,n){n("B1su");var i=n("VU/8")(n("pJoQ"),n("FS0v"),"data-v-7ff3deb7",null);t.exports=i.exports},SrVv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-tab"},[n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"recommend"}}},[n("span",{staticClass:"tab-link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"singer"}}},[n("span",{staticClass:"tab-link"},[t._v("歌手")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"rank"}}},[n("span",{staticClass:"tab-link"},[t._v("排行\n\t\t")])]),t._v(" "),n("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:{name:"search"}}},[n("span",{staticClass:"tab-link"},[t._v("搜索")])])],1)},staticRenderFns:[]}},UjVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"singer",function(){return i}),n.d(e,"playing",function(){return s}),n.d(e,"fullScreen",function(){return r}),n.d(e,"playList",function(){return a}),n.d(e,"sequenceList",function(){return c}),n.d(e,"mode",function(){return o}),n.d(e,"currentIndex",function(){return u}),n.d(e,"currentSong",function(){return l}),n.d(e,"disc",function(){return d}),n.d(e,"topList",function(){return f}),n.d(e,"searchHistory",function(){return h});var i=function(t){return t.singer},s=function(t){return t.playing},r=function(t){return t.fullScreen},a=function(t){return t.playList},c=function(t){return t.sequenceList},o=function(t){return t.mode},u=function(t){return t.currentIndex},l=function(t){return t.playList[t.currentIndex]||{}},d=function(t){return t.disc},f=function(t){return t.topList},h=function(t){return t.searchHistory}},"W/7t":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={sequence:0,loop:1,random:2}},WeUh:function(t,e,n){t.exports=n.p+"static/img/default.9561f76.jpeg"},XePG:function(t,e){},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),s=n("/ocq"),r=function(t){n.e(5).then(n.bind(null,"0da8")).then(function(e){t(e)})},a=function(t){n.e(6).then(n.bind(null,"FKKE")).then(function(e){t(e)})},c=function(t){n.e(0).then(n.bind(null,"Vbaa")).then(function(e){t(e)})},o=function(t){n.e(2).then(n.bind(null,"JJZb")).then(function(e){t(e)})},u=function(t){n.e(3).then(n.bind(null,"aZYv")).then(function(e){t(e)})},l=function(t){n.e(1).then(n.bind(null,"6oh/")).then(function(e){t(e)})},d=function(t){n.e(4).then(n.bind(null,"Mfpu")).then(function(e){t(e)})},f=function(t){n.e(7).then(n.bind(null,"rHPe")).then(function(e){t(e)})};i.a.use(s.a),e.a=new s.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"recommend",component:d,children:[{path:":id",component:u}]},{path:"/singer",name:"singer",component:r,children:[{path:":id",component:o}]},{path:"/rank",name:"rank",component:a,children:[{path:":id",component:l}]},{path:"/search",name:"search",component:c,children:[{path:":id",component:o}]},{path:"*",component:f}]})},aidx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),r=n("W/7t"),a=n("zu6c"),c=n.n(a),o=n("DXDo"),u=n.n(o),l=n("NYxO"),d=n("hhm8");e.default={data:function(){return{showFlag:!1,refreshDelay:100}},methods:s()({},n.i(l.c)({setCurrentIndex:"SET_CURRENT_INDEX",setPlayingState:"SET_PLAYING_STATE",setMode:"SET_PLAY_MODE",setPlayList:"SET_PLAY_LIST"}),n.i(l.d)(["deleteSong","deleteSongList"]),{toggleFavoriteCls:function(t){},getFavoriteCls:function(t){},_isFavorite:function(t){return this.favoriteList.findIndex(function(e){return t.id===e.id})>-1},show:function(){var t=this;this.showFlag=!0,this.$nextTick(function(){t.$refs.scrollRef.refresh(),t.scrollToCurrent(t.currentSong)})},hide:function(){this.showFlag=!1},getCurrentIcon:function(t){return this.currentSong.id===t.id?"icon-play":""},selectItem:function(t,e){2===this.mode&&(e=this.playList.findIndex(function(e){return e.id===t.id})),this.setCurrentIndex(e),this.setPlayingState(!0)},scrollToCurrent:function(t){var e=this,n=this.sequenceList.findIndex(function(e){return e.id===t.id});this.$nextTick(function(){e.$refs.scrollRef.scrollToElement(e.$refs.listRef[n],300)})},deleteOne:function(t){this.deleteSong(t),this.playList.length||(this.showFlag=!1)},showConfirm:function(){this.$refs.confirmRef.show()},confirm:function(){this.deleteSongList(),this.showFlag=!1},cancel:function(){},changeMode:function(){var t=(this.mode+1)%3;this.setMode(t);var e=null;e=t===r.a.random?n.i(d.a)(this.sequenceList):t==r.a.sequence?this.sequenceList:[this.sequenceList[this.currentIndex]],this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this;console.log();var n=t.findIndex(function(t){return t.id==e.currentSong.id});this.setCurrentIndex(n)},showAddSong:function(){this.$refs.addSongRef.show()}}),computed:s()({},n.i(l.b)(["sequenceList","currentSong","mode","playList","currentIndex"]),{iconMode:function(){return 0===this.mode?"icon-sequence":1===this.mode?"icon-loop":2===this.mode?"icon-random":""},modeText:function(){return 0===this.mode?"顺序播放":1===this.mode?"单曲循环":2===this.mode?"随机播放":""}}),watch:{currentSong:function(t,e){this.showFlag&&t.id!==e.id&&this.scrollToCurrent(t)}},components:{Scroll:c.a,Confirm:u.a}}},cN2K:function(t,e){},hCoU:function(t,e){},hhm8:function(t,e,n){"use strict";function i(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function s(t){for(var e=t.slice(),n=0;n<e.length;n++){var s=i(0,n),r=e[n];e[n]=e[s],e[s]=r}return e}e.a=s},iGu4:function(t,e){},k1Rz:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper",staticClass:"scroll-wrap"},[t._t("default")],2)},staticRenderFns:[]}},k2CR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3Q4o"),s=n.i(i.a)("transform");e.default={name:"process",props:{percent:{type:Number,default:0}},created:function(){this.touch={}},methods:{processTouchstart:function(t){this.touch.initiate=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},processTouchmove:function(t){if(this.touch.initiate){var e=t.touches[0].pageX-this.touch.startX,n=Math.min(this.$refs.progressBar.clientWidth-16,Math.max(0,this.touch.left+e));this.$refs.progress.style.width=n+"px",this.$refs.progressBtn.style[s]="translate3d("+n+"px, 0, 0)"}},processTouchend:function(t){this.touch.initiate=!1;var e=this.$refs.progressBar.clientWidth-16,n=this.$refs.progress.clientWidth/e;this.$emit("percentChange",n)},setProcess:function(t){var e=t.offsetX;this.$refs.progress.style.width=e+"px",this.$refs.progressBtn.style[s]="translate3d("+e+"px,0,0)";var n=this.$refs.progressBar.clientWidth-16,i=this.$refs.progress.clientWidth/n;this.$emit("percentChange",i)}},watch:{percent:function(t){if(t>0&&!this.touch.initiate){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this.$refs.progress.style.width=n+"px",this.$refs.progressBtn.style[s]="translate3d("+n+"px, 0, 0)"}}}}},kQ7F:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.setProcess}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),t._v(" "),n("div",{ref:"progressBtn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){e.preventDefault(),t.processTouchstart(e)},touchmove:function(e){e.preventDefault(),t.processTouchmove(e)},touchend:function(e){e.preventDefault(),t.processTouchend(e)}}},[n("div",{staticClass:"progress-btn"})])])])},staticRenderFns:[]}},lII2:function(t,e,n){n("XePG");var i=n("VU/8")(n("JkZS"),n("mW9Q"),"data-v-7aabe9ba",null);t.exports=i.exports},lwq5:function(t,e,n){"use strict";var i=n("W/7t"),s=n("Kf/3"),r={singer:{},playing:!1,fullScreen:!1,playList:[],sequenceList:[],mode:i.a.sequence,currentIndex:-1,disc:{},topList:{},searchHistory:n.i(s.a)()};e.a=r},mUbh:function(t,e,n){"use strict";function i(t,e){return t.findIndex(function(t){return t.id===e.id})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"selectPlay",function(){return o}),n.d(e,"randomPlay",function(){return u}),n.d(e,"insertSong",function(){return l}),n.d(e,"saveSearchHistory",function(){return d}),n.d(e,"deleteSearchHistory",function(){return f}),n.d(e,"clearSearchHistory",function(){return h}),n.d(e,"deleteSong",function(){return p}),n.d(e,"deleteSongList",function(){return m});var s=n("HzVJ"),r=n("W/7t"),a=n("hhm8"),c=n("Kf/3"),o=function(t,e){var n=t.commit,i=(t.state,e.list),r=e.index;n(s.e,i),n(s.d,i),n(s.g,r),n(s.c,!0),n(s.b,!0)},u=function(t,e){var i=t.commit,c=e.list;i(s.f,r.a.random),i(s.e,c);var o=n.i(a.a)(c);i(s.d,o),i(s.g,0),i(s.b,!0),i(s.c,!0)},l=function(t,e){var n=t.commit,r=t.state,a=r.playList.slice(),c=r.sequenceList.slice(),o=r.currentIndex,u=a[o],l=i(a,e);o++,a.splice(o,0,e),l>-1&&(o>l?(a.splice(l,1),o--):a.splice(l+1,1));var d=i(c,u)+1,f=i(c,e);c.splice(d,0,e),f>-1&&(d>f?c.splice(f,1):c.splice(f+1,1)),n(s.d,a),n(s.e,c),n(s.g,o),n(s.c,!0),n(s.b,!0)},d=function(t,e){var i=t.commit;t.state;i(s.j,n.i(c.b)(e))},f=function(t,e){var i=t.commit;t.state;i(s.j,n.i(c.c)(e))},h=function(t){(0,t.commit)(s.j,n.i(c.d)())},p=function(t,e){var n=t.commit,r=t.state,a=r.playList.slice(),c=r.sequenceList.slice(),o=r.currentIndex,u=i(a,e);a.splice(u,1);var l=i(c,e);c.splice(l,1),(o>u||o===a.length)&&o--,n(s.d,a),n(s.e,c),n(s.g,o),a.length?n(s.b,!0):n(s.b,!1)},m=function(t){var e=t.commit;t.state;e(s.d,[]),e(s.e,[]),e(s.g,[]),e(s.b,!1)}},mW9Q:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-progress-circle"},[n("svg",{attrs:{width:t.radius,height:t.radius,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"progress-background",attrs:{cx:t.radius/2,cy:t.radius/2,r:t.radius/2,fill:"transparent"}}),t._v(" "),n("circle",{staticClass:"progress-bar",attrs:{cx:t.radius/2,cy:t.radius/2,r:t.radius/2,fill:"transparent","stroke-dasharray":t.dasharray,"stroke-dashoffset":t.dashoffset}})]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},nFzD:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"list-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"play-list",on:{click:t.hide}},[n("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"list-header"},[n("h1",{staticClass:"title"},[n("i",{staticClass:"icon",class:t.iconMode,on:{click:t.changeMode}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.modeText))]),t._v(" "),n("span",{staticClass:"clear",on:{click:t.showConfirm}},[n("i",{staticClass:"icon-clear"})])])]),t._v(" "),n("scroll",{ref:"scrollRef",staticClass:"list-content",attrs:{data:t.sequenceList,refreshDelay:t.refreshDelay}},[n("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.sequenceList,function(e,i){return n("li",{key:e.id,ref:"listRef",refInFor:!0,staticClass:"item",on:{click:function(n){t.selectItem(e,i)}}},[n("i",{staticClass:"current",class:t.getCurrentIcon(e)}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"like",on:{click:function(n){n.stopPropagation(),t.toggleFavoriteCls(e)}}},[n("i",{class:t.getFavoriteCls(e)})]),t._v(" "),n("span",{staticClass:"delete",on:{click:function(n){n.stopPropagation(),t.deleteOne(e)}}},[n("i",{staticClass:"icon-delete"})])])}))],1),t._v(" "),n("div",{staticClass:"list-operate"},[n("div",{staticClass:"add",on:{click:t.showAddSong}},[n("i",{staticClass:"icon-add"}),t._v(" "),n("span",{staticClass:"text"},[t._v("添加歌曲到队列")])])]),t._v(" "),n("div",{staticClass:"list-close",on:{click:t.hide}},[n("span",[t._v("关闭")])])],1),t._v(" "),n("confirm",{ref:"confirmRef",on:{confirm:t.confirm,cancel:t.cancel}})],1)])},staticRenderFns:[]}},pJoQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MHeader"}},qZJc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{showFlag:!1}},props:{text:{type:String,default:"确认清空吗"},cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"}},watch:{},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},confirm:function(){this.showFlag=!1,this.$emit("confirm")},cancel:function(){this.showFlag=!1,this.$emit("cancel")}},computed:{},created:function(){},mounted:function(){},destroyed:function(){}}},ukYY:function(t,e,n){"use strict";var i,s=n("bOdI"),r=n.n(s),a=n("HzVJ"),c=(i={},r()(i,a.a,function(t,e){t.singer=e}),r()(i,a.b,function(t,e){t.playing=e}),r()(i,a.c,function(t,e){t.fullScreen=e}),r()(i,a.d,function(t,e){t.playList=e}),r()(i,a.e,function(t,e){t.sequenceList=e}),r()(i,a.f,function(t,e){t.mode=e}),r()(i,a.g,function(t,e){t.currentIndex=e}),r()(i,a.h,function(t,e){t.disc=e}),r()(i,a.i,function(t,e){t.topList=e}),r()(i,a.j,function(t,e){t.searchHistory=e}),i);e.a=c},vvl1:function(t,e,n){n("Hod+");var i=n("VU/8")(n("PbpO"),n("wVjK"),"data-v-0ecee5ba",null);t.exports=i.exports},wVjK:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length > 0"}],staticClass:"player"},[n("transition",{attrs:{name:"normal"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{attrs:{src:t.bgImg,width:"100%",height:"100%"}})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-back"})]),t._v(" "),n("p",{staticClass:"title",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"middle",on:{touchstart:function(e){e.preventDefault(),t.touchStart(e)},touchmove:function(e){e.preventDefault(),t.touchMove(e)},touchend:function(e){e.preventDefault(),t.touchEnd(e)}}},[n("div",{ref:"middleL",staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{ref:"cdWrapPlay",staticClass:"cd"},[n("img",{ref:"imageWrap",staticClass:"image",attrs:{src:t.bgImg}})])]),t._v(" "),n("div",{staticClass:"playing-lyric-wrapper"},[n("div",{staticClass:"playing-lyric"},[n("p",[t._v(t._s(t.playLyric))])])])]),t._v(" "),n("scroll",{ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(e,i){return n("p",{key:e.id,ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===i}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.txt)+"\n\t\t\t\t\t\t\t")])})):n("div",[n("p",{staticClass:"text"},[t._v("暂无歌词")])])])])],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"dot-wrapper"},[n("span",{staticClass:"dot",class:{active:"cd"===t.currentShow}}),t._v(" "),n("span",{staticClass:"dot",class:{active:"lyric"===t.currentShow}})]),t._v(" "),n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.formate(t.currentTime)))]),t._v(" "),n("div",{staticClass:"progress-bar-wrapper"},[n("process",{attrs:{percent:t.percent},on:{percentChange:t.percentChange}})],1),t._v(" "),n("span",{staticClass:"time time-r"},[t._v(t._s(t.formate(t.currentSong.duration)))])]),t._v(" "),n("div",{staticClass:"operators"},[n("div",{staticClass:"icon i-left",on:{click:t.changeMode}},[n("i",{class:t.iconMode})]),t._v(" "),n("div",{staticClass:"icon i-left",on:{click:t.prev}},[n("i",{staticClass:"icon-prev"})]),t._v(" "),n("div",{staticClass:"icon i-center",on:{click:t.togglePlay}},[n("i",{class:t.playIcon})]),t._v(" "),n("div",{staticClass:"icon i-right",on:{click:t.next}},[n("i",{staticClass:"icon-next"})]),t._v(" "),n("div",{staticClass:"icon i-right"},[n("i",{staticClass:"icon icon-not-favorite"})])])])])]),t._v(" "),n("transition",{attrs:{name:"min"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"background"}),t._v(" "),n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.bgImg}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"name",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),n("div",{staticClass:"control"},[n("progress-circle",{attrs:{percent:t.percent,radius:t.radius}},[n("i",{ref:"playMin",staticClass:"icon-mini",class:t.playing?"icon-pause-mini":"icon-play-mini",on:{click:function(e){e.stopPropagation(),t.togglePlay(e)}}})])],1),t._v(" "),n("div",{staticClass:"control",on:{click:function(e){e.stopPropagation(),t.showPlayList(e)}}},[n("i",{staticClass:"icon-playlist"})])])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.url},on:{timeupdate:t.updatetime,error:t.error,canplay:t.ready,ended:t.end}}),t._v(" "),n("play-list",{ref:"playList"})],1)},staticRenderFns:[]}},xJD8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("RMDe"),s=n.n(i),r=n("RGpE"),a=n.n(r),c=n("vvl1"),o=n.n(c);e.default={name:"app",components:{MHeader:s.a,MTab:a.a,Player:o.a}}},zCc6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"confirm-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"confirm",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"confirm-wrapper"},[n("div",{staticClass:"confirm-content"},[n("p",{staticClass:"text"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"operate"},[n("div",{staticClass:"operate-btn left",on:{click:t.confirm}},[t._v(t._s(t.confirmBtnText))]),t._v(" "),n("div",{staticClass:"operate-btn",on:{click:t.cancel}},[t._v(t._s(t.cancelBtnText))])])])])])])},staticRenderFns:[]}},zXYm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MTab"}},zu6c:function(t,e,n){n("QdfO");var i=n("VU/8")(n("EmhP"),n("k1Rz"),"data-v-6828112a",null);t.exports=i.exports}},["NHnr"]);