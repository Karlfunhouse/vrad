(this.webpackJsonpvrad=this.webpackJsonpvrad||[]).push([[0],{24:function(e,a,t){e.exports=t(46)},29:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),s=t.n(i),c=(t(29),t(6)),l=t.n(c),o=t(8),m=t(10),u=t(11),g=t(13),p=t(12),d=t(1),f=(t(31),t(32),t(3)),v=function(e){var a=e.username,t=e.usage,n=e.favoriteListings,i=e.logout;return r.a.createElement("div",{className:"user-container"},r.a.createElement("div",{className:"user-wrapper"},r.a.createElement("p",{className:"user-message"},"Welcome ",a,", we hope you find something for your",r.a.createElement("span",{className:"usage"}," ",t)," needs."),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement(f.b,{to:"/favorites"},r.a.createElement("button",{className:n.length>0?"favorite-btn":"no-favorite-btn",disabled:n.length>0?null:"disabled","data-testid":"Favorite Button"},"\u2764"," ",n.length?"Favorite Listings: ".concat(n.length):"No Favorite Listings")),r.a.createElement("button",{className:"logout-btn",onClick:i},"Logout"))))},E=(t(38),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).hide=function(){e.setState({display:"hide"})},e.state={display:"covid19-container"},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.display,"data-testid":this.state.display},r.a.createElement("p",{className:"covid19-text"},"Get the latest on our COVID-19 response and cancellation policies."),r.a.createElement("a",{className:"covid19-link",href:"https://www.coronavirus.gov/",target:"_blank",rel:"noopener noreferrer"},"Learn more"),r.a.createElement("button",{className:"covid19-close-btn",onClick:this.hide},"X"))}}]),t}(n.Component)),h=(t(39),function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",null,"Vacation Rentals Around Denver"))}),b=t(16),j=(t(40),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.checkLogin(n.state)},n.state={email:"",username:"",usage:""},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.username,n=e.usage,i=!(a&&t&&n);return r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",{className:"login-message"},"Welcome! Please enter your info:"),r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"login-item"},r.a.createElement("label",{htmlFor:"username",className:"input-label"},"Username: "),r.a.createElement("input",{type:"text",placeholder:"username",id:"username",name:"username",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"login-item"},r.a.createElement("label",{htmlFor:"email",className:"input-label"},"Email: "),r.a.createElement("input",{type:"email",placeholder:"email",id:"email",name:"email",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"login-item"},r.a.createElement("label",{htmlFor:"usage"},"What do you need a place for?"),r.a.createElement("div",{className:"login-usage",id:"usage"},r.a.createElement("label",{htmlFor:"business"},r.a.createElement("input",{type:"radio",id:"business",name:"usage",value:"business",onClick:this.handleChange,required:!0}),"Business:"),r.a.createElement("label",{htmlFor:"vacation"},r.a.createElement("input",{type:"radio",id:"vacation",name:"usage",value:"vacation",onClick:this.handleChange}),"Vacation"),r.a.createElement("label",{htmlFor:"party"},r.a.createElement("input",{type:"radio",id:"party",name:"usage",value:"party",onClick:this.handleChange}),"Party"))),r.a.createElement("div",{className:"login-item"},r.a.createElement("button",{type:"submit",className:"login-btn",onClick:this.handleSubmit,disabled:i},"LOGIN"))))}}]),t}(n.Component)),_=(t(41),t(42),function(e){var a=e.area,t=a.area,n=a.name,i=a.location,s=a.about,c=a.listings;return r.a.createElement("section",{className:"area-wrapper"},r.a.createElement("div",{className:t},r.a.createElement("h2",{className:"area-area"},t)),r.a.createElement("div",{className:"area-info"},r.a.createElement("h2",{className:"area-name"},n),r.a.createElement("p",{className:"area-location"},i),r.a.createElement("p",{className:"area-about"},s)),r.a.createElement(f.b,{onClick:function(){return e.displayListings(c)},to:"/areas/".concat(t.replace(/\s/g,""),"/listings")},r.a.createElement("button",{className:"listings-btn"},"See Listings")))}),N=function(e){var a=e.areas.map((function(a){return r.a.createElement(_,{area:a,key:a.id,displayListings:e.displayListings})}));return r.a.createElement("section",null,r.a.createElement("p",{className:"error"},e.error),r.a.createElement("div",{className:"area-container"},a))},y=(t(43),t(44),function(e){var a=e.listing,t=a.name,n=a.address,i=a.listing_id,s=a.img,c=a.area,l=a.favorite,o=n.street,m=n.zip;return r.a.createElement("div",{className:"listing-wrapper"},r.a.createElement("img",{className:"listing-img",src:"/images/".concat(s[Math.floor(Math.random()*s.length)]),alt:""}),r.a.createElement("h2",{className:l?"listing-name-favorite":"listing-name"},l&&"\u2764 ",t,l&&" \u2764"),r.a.createElement("p",{className:"listing-address"},o,", ",m,", Denver"),r.a.createElement(f.b,{to:"/areas/".concat(c,"/listings/").concat(i),onClick:function(){return e.displayListing(e.listing)}},r.a.createElement("button",{className:"listing-btn"},"See Details")))}),L=function(e){var a=e.listings.map((function(a){return r.a.createElement(y,{listing:a,key:a.listing_id,displayListing:e.displayListing})}));return r.a.createElement("section",null,r.a.createElement("nav",{className:"listing-container-nav"},r.a.createElement(f.b,{to:"/areas"},r.a.createElement("button",{className:"back-areas-btn",onClick:e.removeError},"Back To Areas"))),r.a.createElement("p",{className:"error"},e.error),r.a.createElement("div",{className:"listing-container"},a))},k=(t(45),function(e){var a=e.listing.img.map((function(e){return r.a.createElement("img",{alt:"",className:"listing-info-img",key:e,src:"/images/".concat(e)})})),t=e.listing,n=t.name,i=t.address,s=t.area,c=t.listing_id,l=t.details,o=t.favorite,m=i.street,u=i.zip,g=l.baths,p=l.beds,d=l.cost_per_night,v=l.superhost;return r.a.createElement("section",null,r.a.createElement("nav",{className:"listing-info-nav"},r.a.createElement("button",{className:o?"unfavorite-btn":"favorite-btn",onClick:function(){return e.addFavoriteListing(e.listing)}},"\u2764"," ",o?"Remove from Favorites":"Add to Favorites"),r.a.createElement(f.b,{to:"/areas/".concat(s.replace(/\s/g,""),"/listings")},r.a.createElement("button",{className:"back-listings-btn"},"Back To Listings")),r.a.createElement(f.b,{to:"/areas"},r.a.createElement("button",{className:"back-areas-btn"},"Back To Areas"))),r.a.createElement("div",{className:"listing-info-container"},r.a.createElement("div",{className:"listing-info"},r.a.createElement("h2",{className:o?"listing-info-name-favorite":"listing-info-name"},o&&"\u2764 ",n,o&&" \u2764"),r.a.createElement("p",{className:"listing-info-p"},"Area: ",r.a.createElement("span",{className:"info-accent"},s)),r.a.createElement("p",{className:"listing-info-p"},"Address:"," ",r.a.createElement("span",{className:"info-accent"},"".concat(m,", ").concat(u,", Denver"))),r.a.createElement("p",{className:"listing-info-p"},"Bath: ",r.a.createElement("span",{className:"info-accent"},g)),r.a.createElement("p",{className:"listing-info-p"},"Beds: ",r.a.createElement("span",{className:"info-accent"},p)),r.a.createElement("p",{className:"listing-info-p"},r.a.createElement("span",{className:"info-accent"},"$",d)," / night"),r.a.createElement("p",{className:"listing-info-p"},"Superhost:"," ",r.a.createElement("span",{className:"info-accent"},v?"Yes":"No")),r.a.createElement("p",{className:"listing-info-p"},"Listing ID: ",r.a.createElement("span",{className:"info-accent"},c))),r.a.createElement("div",{className:"slide-gallery"},r.a.createElement("figure",{className:"slider"},a))))}),O=t(15),w={3:["3_a.jpg","3_b.jpg","3_c.jpg"],8:["8_a.jpg","8_b.jpg","8_c.jpg"],9:["9_a.jpg","9_b.jpg","9_c.jpg"],11:["11_a.jpg","11_b.jpg","11_c.jpg"],21:["21_a.jpg","21_b.jpg","21_c.jpg"],27:["27_a.jpg","27_b.jpg","27_c.jpg"],44:["44_a.jpg","44_b.jpg","44_c.jpg"],56:["56_a.jpg","56_b.jpg","56_c.jpg"],66:["66_a.jpg","66_b.jpg","66_c.jpg"],77:["77_a.jpg","77_b.jpg","77_c.jpg"],90:["90_a.jpg","90_b.jpg","90_c.jpg"],92:["92_a.jpg","92_b.jpg","92_c.jpg"],221:["221_a.jpg","221_b.jpg","221_c.jpg"],310:["310_a.jpg","310_b.jpg","310_c.jpg"],411:["411_a.jpg","411_b.jpg","411_c.jpg"],555:["555_a.jpg","555_b.jpg","555_c.jpg"],744:["744_a.jpg","744_b.jpg","744_c.jpg"],3921:["3921_a.jpg","3921_b.jpg","3921_c.jpg"],6135:["6135_a.jpg","6135_b.jpg","6135_c.jpg"],83331:["83331_a.jpg","83331_b.jpg","83331_c.jpg"]},C="https://vrad-api.herokuapp.com",x=function(){var e=Object(o.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=[],e.next=4,fetch(C+"/api/v1/areas");case 4:return t=e.sent,e.next=7,t.json();case 7:return e.sent.areas.forEach(function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(C+t.details);case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,i=Object(O.a)(Object(O.a)({},r),{},{area:t.area}),a.push(i);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.map((function(e){var a=Object.entries(w).find((function(a){return a[0]===e.split("").splice(17).join("")&&a[1]}));return fetch(C+e).then((function(e){return e.json()})).then((function(e){return Object(O.a)(Object(O.a)({favorite:!1},e),{},{img:a[1]})}))})),e.abrupt("return",Promise.all(t).catch((function(e){return console.error(e)})));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),F=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).componentDidMount=Object(o.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x();case 2:(t=a.sent)&&e.setState({areas:t}),!t&&e.setState({error:"Oops, loading failed! :("});case 5:case"end":return a.stop()}}),a)}))),e.displayListings=function(){var a=Object(o.a)(l.a.mark((function a(t){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S(t);case 2:n=a.sent,console.log(n),n&&e.setState({listings:n}),!n&&e.setState({error:"Oops, loading failed! :("});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.displayListing=function(a){e.setState({listing:a})},e.removeError=function(){e.setState({error:null})},e.displayFavorites=function(e){},e.checkLogin=function(a){e.setState({username:a.username,email:a.email,usage:a.usage,isLoggedIn:!0})},e.logout=function(){e.setState({username:"",email:"",usage:"",favoriteListings:[],isLoggedIn:!1})},e.addFavoriteListing=function(a){var t=e.state.favoriteListings.slice();if(t.find((function(e){return e.listing_id===a.listing_id}))){a.favorite=!1;var n=t.findIndex((function(e){return e.listing_id===a.listing_id}));t.splice(n,1)}else a.favorite=!0,t.push(a);e.setState({favoriteListings:t})},e.state={isLoggedIn:!1,username:"",email:"",usage:"",favoriteListings:[],areas:[],listings:[],listing:null,error:null},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.isLoggedIn,n=a.listings,i=a.listing,s=a.username,c=a.usage,l=a.favoriteListings,o=a.areas,m=a.error;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h,null),t&&r.a.createElement(v,{logout:this.logout,username:s,usage:c,favoriteListings:l}),t?r.a.createElement(d.a,{to:"/areas"}):r.a.createElement(d.a,{to:"/"}),r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(j,{checkLogin:e.checkLogin})}}),r.a.createElement(d.b,{path:"/areas",exact:!0,render:function(){return r.a.createElement(N,{error:m,areas:o,displayListings:e.displayListings})}}),r.a.createElement(d.b,{path:"/areas/:area/listings",exact:!0,render:function(){return r.a.createElement(L,{listings:n,displayListing:e.displayListing,error:m,removeError:e.removeError})}}),r.a.createElement(d.b,{path:"/favorites",exact:!0,render:function(){return r.a.createElement(L,{listings:l,displayListing:e.displayListing})}}),r.a.createElement(d.b,{path:"/areas/:listing_id/listings/:listing_id",exact:!0,render:function(){return r.a.createElement(k,{listing:i,addFavoriteListing:e.addFavoriteListing})}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c9eee4ae.chunk.js.map