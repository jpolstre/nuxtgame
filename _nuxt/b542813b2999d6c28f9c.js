(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("fc6190be",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var l=n(177);n.n(l).a},179:function(t,e,n){(t.exports=n(39)(!1)).push([t.i,".bg-title{background:rgba(0,0,0,.5)}",""])},181:function(t,e,n){"use strict";n.r(e);n(56),n(72);var l=n(37),r=n.n(l),o={asyncData:function(t){var e=t.params,n=(t.error,t.payload);if(n){var l=n,o=l.screenshots.map((function(t){return t.url.replace("t_thumb","t_1080p")}));return{game:l,imgs:o,visible:!1,index:0}}return r.a.get("".concat("https://cors-anywhere.herokuapp.com/","https://api-v3.igdb.com/games/").concat(e.id,"/?fields=name,cover.url,summary,platforms.name,first_release_date,screenshots.url,websites.url,websites.category,total_rating,involved_companies.company.name")).then((function(t){var e=t.data[0],n=e.screenshots.map((function(t){return t.url.replace("t_thumb","t_1080p")}));return{game:e,imgs:n,visible:!1,index:0}})).catch((function(t){console.log(t)}))},head:function(){return{title:this.game.name+" | Video Games"}},computed:{getWebSiteUrl:function(){if(this.game.websites&&this.game.websites.length>0){var t=this.game.websites.filter((function(t){return 1===t.category}));if(t.length)return t[0].url;if((t=this.game.websites.filter((function(t){return 2===t.category}))).length)return t[0].url}return!1},bgImage:function(){return this.game.screenshots[Math.floor(Math.random()*(this.game.screenshots.length-1))].url.replace("t_thumb","t_1080p")}},methods:{showImg:function(t,e){t.preventDefault(),this.index=e,this.visible=!0},handleHide:function(){event.preventDefault(),this.visible=!1}}},c=(n(178),n(15)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hero bg-gray-600",style:"background:url("+t.bgImage+");background-size:cover;"},[n("div",{staticClass:"container mx-auto flex flex-col md:flex-row items-end pb-8",staticStyle:{height:"450px"}},[n("div",{staticClass:"w-full md:w-1/4"}),t._v(" "),n("div",{staticClass:"w-full md:w-3/4 md:ml-12 mt-24 md:mt-2"},[n("div",{staticClass:"w-full md:w-2/3 bg-title py-2 px-4 rounded-lg"},[n("h1",{staticClass:"font-heading text-white text-2xl md:text-3xl"},[t._v(t._s(t.game.name))]),t._v(" "),n("div",{staticClass:"text-white"},[t._v(t._s(t.game.involved_companies[0].company.name))])]),t._v(" "),n("div",{staticClass:"w-1/3"})])])]),t._v(" "),n("div",{staticClass:"container mx-auto flex flex-col md:flex-row"},[n("div",{staticClass:"w-full md:w-1/4 -mt-32"},[n("img",{staticClass:"mb-4 shadow-md rounded-lg",attrs:{src:t.game.cover.url.replace("t_thumb","t_cover_big"),alt:"cover"}}),t._v(" "),n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-semibold"},[t._v("Platforms:")]),t._v(" "),t._l(t.game.platforms,(function(e){return n("span",{key:e.id},[t._v(t._s(e.name)+",")])}))],2),t._v(" "),n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-semibold"},[t._v("Released:")]),t._v(" "),n("span",[t._v(t._s(new Date(1e3*t.game.first_release_date).toDateString()))])]),t._v(" "),t.getWebSiteUrl?n("div",{staticClass:"mb-4"},[n("a",{attrs:{target:"_blank",href:t.getWebSiteUrl}},[t._v("Official Website")])]):t._e(),t._v(" "),t.game.total_rating?n("div",{staticClass:"mb-6"},[n("div",{staticClass:"text-5xl font-semibold"},[t._v(t._s(Math.round(t.game.total_rating))+"%")]),t._v(" "),n("div",{staticClass:"font-semibold"},[t._v("Overall Rating")])]):t._e()]),t._v(" "),n("div",{staticClass:"w-full md:w-3/4 md:ml-12 py-8 leading-normal"},[n("p",{staticClass:"mb-12"},[t._v(t._s(t.game.summary))]),t._v(" "),n("div",{staticClass:"flex flex-wrap -mx-4"},t._l(t.game.screenshots,(function(e,l){return n("a",{key:l,staticClass:"w-full md:w-1/4 px-4 mb-12 no-underline pic",attrs:{href:"#"},on:{click:function(e){return t.showImg(e,l)}}},[n("img",{attrs:{src:e.url.replace("t_thumb","t_cover_big"),alt:"screenshot"}})])})),0)])]),t._v(" "),n("client-only",[n("vue-easy-lightbox",{attrs:{visible:t.visible,index:t.index,imgs:t.imgs},on:{hide:t.handleHide}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);