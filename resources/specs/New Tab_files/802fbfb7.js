var MmFaves;(function(n){function v(n,t){n.type=0;u({collectionType:1,title:"",id:""},n,t)}function y(n,t){n.type=0;u({collectionType:2,title:"",id:""},n,t)}function p(n,t){n.type=0;u({collectionType:8,title:"",id:""},n,t)}function w(n,t,i){t.type=0;u(n,t,i)}function b(n,t){n.type=0;l(n,t)}function k(n,t,i){t.type=1;u(n,t,i)}function d(n,t){n.type=1;l(n,t)}function g(n,t){tt(n,t)}function nt(n,t){it(n,t)}function u(n,u,e){r!=t.Ready?f(n,[u],e,i.Add):sj_evt.fire(o,n,[u],e)}function l(n,u){r!=t.Ready?f(null,[n],u,i.Remove):sj_evt.fire(s,null,[n],u)}function tt(n,u){r!=t.Ready?f(null,n,u,i.GetStatus):sj_evt.fire(h,null,n,u)}function it(n,u){r!=t.Ready?f(n,null,u,i.RemoveCollection):sj_evt.fire(c,n,null,u)}function f(n,i,u,f){if(e.push({col:n,itms:i,cb:u,type:f}),r==t.NotLoaded){var o=sj_gx();o.onreadystatechange=function(){if(o.readyState==4)switch(o.status){case 200:if(o.responseText){ut(o.responseText);break}default:r=t.NotLoaded}};o.open("GET",a,!0);o.send();r=t.Loading}}function rt(){for(r=t.Ready;e.length>0;){var u=e.shift(),n=null;switch(u.type){case i.Add:n=o;break;case i.Remove:n=s;break;case i.GetStatus:n=h;break;case i.RemoveCollection:n=c}sj_evt.fire(n,u.col,u.itms,u.cb)}}function ut(n){var i=_d.querySelector("body"),t=sj_ce("div");t.style.display="none";sj_appHTML(t,n);i.appendChild(t)}var t,i;(function(n){n[n.NotLoaded=0]="NotLoaded";n[n.Loading=1]="Loading";n[n.Ready=2]="Ready"})(t||(t={})),function(n){n[n.Add=0]="Add";n[n.Remove=1]="Remove";n[n.GetStatus=2]="GetStatus";n[n.RemoveCollection=3]="RemoveCollection"}(i||(i={}));var a="/favorites/cfx",o="AddToFaves",s="RemoveFromFaves",h="GetStatus",c="RemoveCollection",e=[],r=t.NotLoaded;n.addImageToStreamCollection=v;n.addImageToHPCollection=y;n.addImageToSharedImagesCollection=p;n.addImageToFavorites=w;n.removeImageFromFavorites=b;n.addVideoToFavorites=k;n.removeVideoFromFavorites=d;n.getStatus=g;n.removeImageCollection=nt;sj_evt.bind("FavCoreLoaded",rt,!0)})(MmFaves||(MmFaves={}))