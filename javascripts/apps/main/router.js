define("javascripts/apps/main/router",["Backbone","./views/FrontPage","./views/ProductPage"],function(t,e,n){var r,o,s,i,a,u={}.hasOwnProperty,c=function(t,e){function n(){this.constructor=t}for(var r in e)u.call(e,r)&&(t[r]=e[r]);n.prototype=e.prototype;t.prototype=new n;t.__super__=e.prototype;return t};r=t("Backbone");o=t("./views/FrontPage");s=t("./views/ProductPage");i=function(t){function e(){a=e.__super__.constructor.apply(this,arguments);return a}c(e,t);e.prototype.routes={home:"index",quiver:"showQuiver",bussg:"showBusSG","*actions":"index"};e.prototype.initialize=function(){return{}};e.prototype.index=function(){var t;t=new o({el:$("#content-container")[0]});$(window).scrollTop(0);return app.layout.selectTab(null)};e.prototype.showQuiver=function(){var t;t=new s({product:"quiver",el:$("#content-container")[0]});$(window).scrollTop(0);return app.layout.selectTab("quiver")};e.prototype.showBusSG=function(){var t;t=new s({product:"bussg",el:$("#content-container")[0]});$(window).scrollTop(0);return app.layout.selectTab("bussg")};return e}(r.Router);n.exports=i});