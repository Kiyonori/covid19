(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{285:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2cb42184",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("97e7ab7c",content,!0,{sourceMap:!1})},288:function(t,e,n){"use strict";var r=n(285);n.n(r).a},289:function(t,e,n){(e=n(13)(!1)).push([t.i,".header[data-v-55eabffa]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-55eabffa]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-55eabffa]{font-size:2rem}}",""]),t.exports=e},290:function(t,e,n){var content=n(305);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e882ae98",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(288),n(4)),l=n(38),c=n.n(l),d=n(278),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"55eabffa",null);e.a=component.exports;c()(component,{VIcon:d.a})},293:function(t,e,n){"use strict";n(74);var r=n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),o=(n(297),n(4)),l=n(38),c=n.n(l),d=n(278),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize/10+"rem","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},297:function(t,e,n){"use strict";var r=n(286);n.n(r).a},298:function(t,e,n){(e=n(13)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},304:function(t,e,n){"use strict";var r=n(290);n.n(r).a},305:function(t,e,n){(e=n(13)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #008830}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=e},307:function(t,e,n){"use strict";var r=n(1).a.extend(),o=(n(304),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},520:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(307),l=n(292),c=n(293),d=r.a.extend({components:{PageHeader:l.a,StaticCard:o.a,ExternalLink:c.a},head:function(){return{title:this.$t("企業の皆様・はたらく皆様へ")}}}),f=n(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Worker"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("企業の皆様・はたらく皆様へ"))+"\n  ")]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://covid19.supportnavi.metro.tokyo.lg.jp/","icon-size":24}},[t._v(t._s(t.$t("東京都 新型コロナウイルス感染症 支援情報ナビ"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("東京都及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.tokyo-kyugyo.com/","icon-size":24}},[t._v(t._s(t.$t("東京都感染拡大防止協力金"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("新型コロナウイルス感染拡大防止のため、都の要請や協力依頼に応じて、施設の使用停止や営業時間の短縮に全面的に協力いただける中小事業者の皆様に対し、協力金を支給いたします（支給額50万円〈2事業所以上で休業等に取り組む事業者は100万円〉）。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://smooth-biz.metro.tokyo.lg.jp/","icon-size":24}},[t._v(t._s(t.$t("新しいワークスタイルや企業活動の東京モデル「スムーズビズ」"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。"))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);