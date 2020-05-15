<html lang="en" ng-app="app" class="ng-scope" style="height: auto; min-height: 100%;"><head>
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<style type="text/css">
	
		
		@charset "UTF-8";
		[ng\:cloak],
		[ng-cloak],
		[data-ng-cloak],
		[x-ng-cloak],
		.ng-cloak,
		.x-ng-cloak,
		.ng-hide:not(.ng-hide-animate) {
			display: none !important;
		}
		
		ng\:form {
			display: block;
		}
		
		.ng-animate-shim {
			visibility: hidden;
		}
		
		.ng-anchor {
			position: absolute;
		}
	</style>
	<script type="text/javascript">
		// redirect to https if http and not localhost
		if (window.location.protocol !== 'https:' && location.hostname !== 'localhost') {
			location.href = location.href.replace('http://', 'https://');
		}
	</script>
	<meta charset="UTF-8"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"3c6e2799b2",applicationID:"460538542"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1167.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"3c6e2799b2","applicationID":"460538542","transactionName":"b11RYkpRC0FVABVdWVYXdUNWUxFbWw1OQ1NaFl5ZW1sQQg4CD1VaQUxaVUt9ClFfFhE=","queueTime":0,"applicationTime":28,"agent":""}</script>
	<title>Control</title>
	<link rel="shortcut icon" type="image/png" href="favicon.png">
	<style>
	
	</style>
	<link href="https://control.livingasone.com/v2.144/0.css" rel="stylesheet">
	<link href="https://control.livingasone.com/v2.144/1.css" rel="stylesheet">
	<style type="text/css">
		.jqstooltip {
			position: absolute;
			left: 0px;
			top: 0px;
			visibility: hidden;
			background: rgb(0, 0, 0) transparent;
			background-color: rgba(0, 0, 0, 0.6);
			filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);
			-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";
			color: white;
			font: 10px arial, san serif;
			text-align: left;
			white-space: nowrap;
			padding: 5px;
			border: 1px solid white;
			box-sizing: content-box;
			z-index: 10000;
		}
		
		.jqsfield {
			color: white;
			font: 10px arial, san serif;
			text-align: left;
		}
	</style>
	<script charset="utf-8" src="v2.144/shaka.bundle.js"></script>
</head>

<body class="ng-scope skin-green sidebar-mini fixed sidebar-mini-expand-feature" ng-controller="LoginController as $ctrl" ng-class="{'login-page': $ctrl.getCurrentUser() == '' || $ctrl.getCurrentUser() == null, 'skin-green': !($ctrl.getCurrentUser() == '' || $ctrl.getCurrentUser() == null), 'sidebar-mini fixed': !($ctrl.getCurrentUser() == '' || $ctrl.getCurrentUser() == null)}" style="height: auto; min-height: 100%;">
	<style>
		.laoEmbed {
			display: none;
		}
		
		.smEmbed {
			display: none;
		}
	</style>

	<div class="wrapper" style="height: auto; min-height: 100%;">
		<!-- Main Header -->
		<header class="main-header" ng-show="$ctrl.getCurrentUser()">
			<!-- Logo -->
			<a href="index.html" class="logo">
				<!-- mini logo for sidebar mini 50x50 pixels -->
				<span class="logo-mini">Ctrl</span>
				<!-- logo for regular state and mobile devices -->
				<span class="logo-lg" style="text-align:left;">Control</span>
			</a>

			<!-- Header Navbar -->
			<nav class="navbar navbar-static-top" role="navigation" ng-show="$ctrl.getCurrentUser()">
				<!-- Sidebar toggle button-->
				<a href="" class="sidebar-toggle" data-toggle="push-menu" role="button" title="Toggle left-hand navigation size">
					<span class="sr-only">Toggle navigation</span>
				</a>
				<!-- Navbar Right Menu -->
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<!-- User Account Menu -->
						<li class="dropdown user user-menu" ng-show="$ctrl.getCurrentUser()">
							<!-- Menu Toggle Button -->
							<a ng-href="#/users?action=changepswd" href="#/users?action=changepswd">
								<!-- hidden-xs hides the username on small devices so only the image appears. -->
								<i class="fa fa-user"></i>&nbsp;
								<span class="hidden-xs ng-binding">trent</span>
							</a>
						</li>
						<!-- Link to customer details (if admin logged in as customer) -->
						<li class="dropdown user user-menu ng-hide" ng-show="$ctrl.getCurrentUser().customerName">
							<!-- Menu Toggle Button -->
							<a ng-href="#/organizations/6dcebe46-41c1-49f9-a318-8081d14394e3" href="#/organizations/6dcebe46-41c1-49f9-a318-8081d14394e3">
								<!-- hidden-xs hides the username on small devices so only the image appears. -->
								<i class="fa fa-users"></i>&nbsp;
								<span class="hidden-xs ng-binding"></span>
							</a>
						</li>

						<li class="dropdown user user-menu">
							<!-- Menu Toggle Button -->
							<a ng-href="#/logout" ng-click="$ctrl.logout()" id="sign-out-btn" href="#/logout">
								<!-- hidden-xs hides the username on small devices so only the image appears. -->
								<span>Sign Out</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		<!-- Left side column. contains the logo and sidebar -->
		<aside class="main-sidebar" ng-show="$ctrl.getCurrentUser()">
			<!-- sidebar: style can be found in sidebar.less -->
			<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 1890px;">
				<section class="sidebar" style="overflow: hidden; width: auto; height: 1890px;">
					<!-- Sidebar Menu -->
					<ul class="sidebar-menu tree" data-widget="tree">
						<!--<li class="header">Main Menu</li>-->
						<!-- Optionally, you can add icons to the links -->
						<li ng-class="{active: activenav == 'dashboard'}" ng-show="$ctrl.canShowMenu('dashboard')">
							<a ng-href="#/dashboard" id="dashboard-tab" href="#/dashboard">
								<i class="fa fa-area-chart"></i>
								<span>Dashboard</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'encoders'}" ng-show="$ctrl.canShowMenu('encoders')" class="">
							<a ng-href="#/encoders" id="encoders-tab" href="#/encoders">
								<i class="fa fa-cog"></i>
								<span>Encoders</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'events'}" ng-show="$ctrl.canShowMenu('events')" class="active">
							<a ng-href="#/events" id="events-tab" href="#/events">
								<i class="fa fa-video-camera"></i>
								<span>Events</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'schedule'}" ng-show="$ctrl.canShowMenu('schedule')" class="">
							<a ng-href="#/schedule" id="scheduling-tab" href="#/schedule">
								<i class="fa fa-calendar"></i>
								<span>Scheduling</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'socialmedia'}" ng-show="$ctrl.canShowMenu('socialmedia')">
							<a ng-href="#/socialmedia" id="social-media-tab" href="#/socialmedia">
								<i class="fa fa-user"></i>
								<span>Social Media</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'encoderprofiles'}" ng-show="$ctrl.canShowMenu('encoderprofiles')">
							<a ng-href="#/encoderprofiles" id="encoder-profiles-tab" href="#/encoderprofiles">
								<i class="fa fa-database"></i>
								<span>Encoder Profiles</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'eventprofiles'}" ng-show="$ctrl.canShowMenu('eventprofiles')">
							<a ng-href="#/eventprofiles" id="event-profiles-tab" href="#/eventprofiles">
								<i class="fa fa-database"></i>
								<span>Event Profiles</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'users'}" ng-show="$ctrl.canShowMenu('users')">
							<a ng-href="#/users" id="users-tab" href="#/users">
								<i class="fa fa-university"></i>
								<span>Sites &amp; Users</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'contacts'}" ng-show="$ctrl.canShowMenu('contacts')">
							<a ng-href="#/contacts" id="contacts-tab" href="#/contacts">
								<i class="fa fa-list"></i>
								<span>Contacts</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'customers'}" ng-show="$ctrl.canShowMenu('customers')">
							<a ng-href="#/organizations" id="organizations-tab" href="#/organizations">
								<i class="fa fa-users"></i>
								<span>Organizations</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'monitor'}" ng-show="$ctrl.canShowMenu('monitor')">
							<a ng-href="#/monitor" id="monitoring-tab" href="#/monitor">
								<i class="fa fa-dashboard"></i>
								<span>Monitoring</span>
							</a>
						</li>
						<li ng-class="{active: activenav == 'contactsearch'}" ng-show="$ctrl.canShowMenu('contactsearch')">
							<a ng-href="#/contactsearch" id="contact-search-tab" href="#/contactsearch">
								<i class="fa fa-search"></i>
								<span>Search Contacts</span>
							</a>
						</li>
						<li class="treeview" ng-class="{'active': activenav == 'onboarding' || activenav == 'orders' || activenav == 'hardware' || activenav == 'units' || activenav == 'unitoptions' || activenav == 'unitdashboard'}" ng-show="$ctrl.canShowHardwareMenu()">
							<a href="javascript:void(0);" id="hardware-parent-tab">
								<i class="fa fa-laptop"></i>
								<span>Hardware</span>
								<span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
							</a>
							<ul class="treeview-menu">
								<li ng-class="{active: activenav == 'onboarding'}" ng-show="$ctrl.canShowMenu('onboarding')">
									<a ng-href="#/onboarding" id="onboarding-tab" href="#/onboarding"><i class="fa fa-barcode"></i> Onboarding</a>
								</li>
								<li ng-class="{active: activenav == 'orders'}" ng-show="$ctrl.canShowMenu('orders')">
									<a ng-href="#/orders" id="orders-tab" href="#/orders"><i class="fa fa-truck"></i> Orders</a>
								</li>
								<li ng-class="{active: activenav == 'unitdashboard'}" ng-show="$ctrl.canShowMenu('unitdashboard')">
									<a ng-href="#/unitdashboard" id="unit-dashboard-tab" href="#/unitdashboard"><i class="fa fa-area-chart"></i> Dashboard</a>
								</li>
								<li ng-class="{active: activenav == 'units'}" ng-show="$ctrl.canShowMenu('units')">
									<a ng-href="#/units" id="units-tab" href="#/units"><i class="fa fa-search"></i> Search</a>
								</li>
								<li ng-class="{active: activenav == 'unitoptions'}" ng-show="$ctrl.canShowMenu('unitoptions')">
									<a ng-href="#/unitoptions" id="unit-options-tab" href="#/unitoptions"><i class="fa fa-list"></i> Options</a>
								</li>
							</ul>
						</li>
					</ul>
					<!-- /.sidebar-menu -->
				</section>
				<div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 1890px;"></div>
				<div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
			</div>
			<!-- /.sidebar -->
		</aside>

		<div ng-show="status_406" class="status-406 ng-hide">
			<div class="alert alert-danger" style="margin-bottom: 0;">
				<i class="fa fa-warning" style="margin-right:7px"></i>You are unable to access this organization's data. This usually happens when you login as another organization in a different browser tab. You will need to sign out and sign back in again.
			</div>
		</div>

		<!-- Content Wrapper. Contains page content -->
		<!-- ngView: -->
	<div class="content-wrapper ng-scope" ng-view="" style="min-height: 918px;"><!-- Content Header (Page header) -->
<section class="content-header clearfix ng-scope">
	<h1 id="scheduling-title" class="pull-left"><i class="fa fa-users"></i>Organization</h1>
	<div class="pull-right ng-hide" style="margin-bottom:-8px;" ng-show="!show_add_event &amp;&amp; !show_update_event &amp;&amp; !event_to_view &amp;&amp; !event_to_delete &amp;&amp; !is_loading_calendar &amp;&amp; !is_loading_social_media_accts">
		<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
		<div class="btn-group">
			<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()" aria-expanded="false"><i class="fa fa-plus"></i>Schedule Event</a>
			<ul class="dropdown-menu" role="menu">
				<li><a ng-click="showAddEncoderSchedule()">Encoder Schedule</a></li>
				<li><a ng-click="showAddSimLiveWebSchedule()">Sim-Live Web Schedule</a></li>
			</ul>
		</div>
		<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
		<a id="schedule-encoder-evt-only-btn" class="btn btn-primary ng-hide" ng-click="showAddEncoderSchedule()" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
		<a class="btn btn-primary ng-hide" ng-click="showAddSimLiveWebSchedule()" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
	</div>
	<div style="text-align:center;margin-bottom:-8px;" ng-show="!show_add_event &amp;&amp; !show_update_event &amp;&amp; !event_to_view &amp;&amp; !event_to_delete &amp;&amp; !is_loading_calendar &amp;&amp; !is_loading_social_media_accts" class="ng-hide">
		<a class="btn btn-default" ng-show="canShowLoadPastEventsBtn()" ng-click="loadPastEvents()" ng-class="{'disabled': is_loading_past_events}"><i class="fa fa-calendar-plus-o" ng-class="{'fa-cog fa-spin': is_loading_past_events, 'fa-calendar-plus-o': !is_loading_past_events}"></i>Show Past Events</a>
		<a class="btn btn-default ng-hide" ng-show="canShowLoadPrevMonthBtn()" ng-click="loadPrevMonths()" ng-class="{'disabled': is_loading_prev_month}"><i class="fa fa-arrow-up" ng-class="{'fa-cog fa-spin': is_loading_prev_month, 'fa-arrow-up': !is_loading_prev_month}"></i>Show Prev Month</a>
	</div>
</section>

<!-- Main content -->
<section class="content ng-scope">

	<div class="row">
		<div class="col-md-12">
			<div ng-show="is_loading_calendar || is_loading_social_media_accts || is_loading_time_zone_list || isLoadingAddEventUI() || is_loading_view_event" class="alert alert-info ng-hide"><i class="fa fa-cog fa-spin"></i> Loading ...</div>
			<div ng-show="calendar_prev_events_error &amp;&amp; (!show_add_event &amp;&amp; !show_update_event &amp;&amp; !event_to_view &amp;&amp; !event_to_delete)" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="calendar_error &amp;&amp; !is_loading_calendar &amp;&amp; !is_loading_social_media_accts" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="delete_event_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="add_event_form_validation_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="add_update_event_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="add_update_event_errors.length > 0" class="alert alert-warning ng-hide" style="margin-bottom:10px;">There were problems trying to save the web events. Please review the following error<span ng-show="add_update_event_errors.length > 1" class="ng-hide">s</span>. Once done you may want to refresh the page and examine the web events for this schedule to ensure they are correct.</div>
			<div ng-show="add_update_event_errors">
				<!-- ngRepeat: error in add_update_event_errors track by $index -->
			</div>
			<div ng-show="load_encoder_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_encoder_profile_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_event_profile_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_transcoder_event_profile_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_time_zone_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_web_encoder_profile_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="load_web_events_list_error" class="alert alert-danger ng-binding ng-hide"></div>
			<div ng-show="view_event_error" class="alert alert-danger ng-binding ng-hide"></div>
		</div>
	</div>

	<div ng-show="!calendar_error &amp;&amp; !is_loading_calendar &amp;&amp; !is_loading_social_media_accts &amp;&amp; !is_loading_view_event" class="row calendar-wrapper">

		<div class="col-md-12 ng-hide" ng-show="!show_add_event &amp;&amp; !show_update_event &amp;&amp; !event_to_view &amp;&amp; !event_to_delete">
			<!-- ngRepeat: month in months --><div id="months-list" class="box box-default ng-scope" ng-repeat="month in months">
				<div class="box-body no-padding">
					<div class="calendar">

						<!-- calendar month title -->
						<h2 class="month ng-binding">August <span class="text-muted ng-binding">2019</span></h2>

						<!-- day names row -->
						<ol class="day-names">
							<li class="day">Sun</li>
							<li class="day">Mon</li>
							<li class="day">Tue</li>
							<li class="day">Wed</li>
							<li class="day">Thu</li>
							<li class="day">Fri</li>
							<li class="day">Sat</li>
						</ol>

						<!-- calendar date grid -->
						<ol class="days">
							<!-- ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">28</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">29</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">30</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">31</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">1</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">2</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">3</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">4</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">5</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">6</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">7</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">8</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">9</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">10</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">11</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">12</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">13</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">14</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">15</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">16</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">17</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">18</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">19</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">20</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">21</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">22</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">23</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">24</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">25</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">26</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding today" ng-class="{'today': date.is_today, 'past': date.is_past}">27</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">28</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">29</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">30</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">31</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks -->
						</ol>

					</div>
				</div>
			</div><!-- end ngRepeat: month in months --><div id="months-list" class="box box-default ng-scope" ng-repeat="month in months">
				<div class="box-body no-padding">
					<div class="calendar">

						<!-- calendar month title -->
						<h2 class="month ng-binding">September <span class="text-muted ng-binding">2019</span></h2>

						<!-- day names row -->
						<ol class="day-names">
							<li class="day">Sun</li>
							<li class="day">Mon</li>
							<li class="day">Tue</li>
							<li class="day">Wed</li>
							<li class="day">Thu</li>
							<li class="day">Fri</li>
							<li class="day">Sat</li>
						</ol>

						<!-- calendar date grid -->
						<ol class="days">
							<!-- ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">1</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">2</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">3</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">4</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">5</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">6</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">7</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()" aria-expanded="false"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Special Event</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">8</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:30a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">defaultTranscodedSchedule</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">9</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">10</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">11</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[6:16p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Chris SimLive Test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">12</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">13</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">14</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">15</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">16</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">17</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">18</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">19</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">20</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">21</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">22</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">23</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">24</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">25</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">26</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">27</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">28</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Special Event</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">29</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:30a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">defaultTranscodedSchedule</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">30</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">1</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">2</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">3</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">4</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">5</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks -->
						</ol>

					</div>
				</div>
			</div><!-- end ngRepeat: month in months --><div id="months-list" class="box box-default ng-scope" ng-repeat="month in months">
				<div class="box-body no-padding">
					<div class="calendar">

						<!-- calendar month title -->
						<h2 class="month ng-binding">October <span class="text-muted ng-binding">2019</span></h2>

						<!-- day names row -->
						<ol class="day-names">
							<li class="day">Sun</li>
							<li class="day">Mon</li>
							<li class="day">Tue</li>
							<li class="day">Wed</li>
							<li class="day">Thu</li>
							<li class="day">Fri</li>
							<li class="day">Sat</li>
						</ol>

						<!-- calendar date grid -->
						<ol class="days">
							<!-- ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">29</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding past" ng-class="{'today': date.is_today, 'past': date.is_past}">30</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">1</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">2</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">3</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">4</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">5</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">6</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">7</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">8</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">9</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[6:16p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Chris SimLive Test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">10</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">11</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">12</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">13</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">14</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">15</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">16</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">17</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">18</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">19</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Special Event</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">20</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:30a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">defaultTranscodedSchedule</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">21</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">22</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">23</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">24</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">25</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Friday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">26</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">27</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[8:00a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Sunday Morning Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">28</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[11:40a] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads sim live test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Brads YT schedule test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[1:20p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding">Brads test 20190828 at 13:20</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">29</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope bg-purple" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-refresh" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[1:35p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">test</span></span></span>
									<!-- ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">30</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding">Wednesday Evening Services</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[5:30p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">test</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">31</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events --><a ng-click="viewEvent(event)" ng-show="date.is_current_month" ng-repeat="event in date.events" class="btn btn-xs event-group ng-scope btn-success" ng-class="{'btn-success': isEncoderSchedule(event), 'bg-purple': isSimLiveSchedule(event)}">
									<span class="event-item disabled-event-bkgd" ng-class="{'disabled-event-bkgd': !event.enabled}"><i class="fa schedule-icon fa-university" ng-class="{'fa-refresh': event.eventType == SCHEDULE_TYPE_SIM_LIVE, 'fa-university': event.eventType == SCHEDULE_TYPE_ENCODER}"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': !event.enabled}" class="ng-binding disabled-event">Vive Church Onboarding</span></span></span>
									<!-- ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[10:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web Event 1</span></span></span><!-- end ngRepeat: web_event in event.web_events --><span ng-repeat="web_event in event.web_events" class="event-item ng-scope disabled-event-bkgd" ng-class="{'disabled-event-bkgd': web_event.enabled === 'Disabled' || !event.enabled}"><i class="fa fa-globe fa-globe-resize schedule-icon"></i><i class="fa fa-youtube schedule-icon ng-hide" ng-show="canShowYouTubeIcon(web_event)"></i><i class="fa fa-facebook-square schedule-icon ng-hide" ng-show="canShowFacebookIcon(web_event)"></i><i class="fa fa-warning social-media-warn-lt schedule-icon ng-hide" ng-show="canShowSocialMediaWarningIcon(web_event)"></i><span class="schedule-desc ng-binding">[11:00p] <span ng-class="{'disabled-event': web_event.enabled === 'Disabled' || !event.enabled}" class="ng-binding disabled-event">Vive Church Web 2</span></span></span><!-- end ngRepeat: web_event in event.web_events -->
								</a><!-- end ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">1</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks --><li class="day ng-scope outside" ng-repeat="date in month.date_blocks" ng-class="{'outside': !date.is_current_month}" style="padding: 0 1px 0 1px;">
								<div class="date ng-binding" ng-class="{'today': date.is_today, 'past': date.is_past}">2</div>
								<div ng-show="date.is_current_month &amp;&amp; !date.is_past" class="ng-hide">
									<!-- if they have perm for both event types, then show dropdown menu so they can select a type -->
									<div class="btn-group">
										<a class="add-event btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" ng-show="canShowAddAllSchedulesBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
										<ul class="dropdown-menu" role="menu">
											<li><a ng-click="showAddEncoderSchedule(date)">Encoder Schedule</a></li>
											<li><a ng-click="showAddSimLiveWebSchedule(date)">Sim-Live Web Schedule</a></li>
										</ul>
									</div>
									<!-- if they only have perm for one event type, then don't show single item dropdown, just show dialog for that type -->
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddEncoderSchedule(date)" ng-show="canShowAddEncoderScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
									<a class="add-event btn btn-primary btn-xs ng-hide" ng-click="showAddSimLiveWebSchedule(date)" ng-show="canShowAddWebScheduleOnlyBtn()"><i class="fa fa-plus"></i>Schedule Event</a>
								</div>
								<!-- ngRepeat: event in date.events -->
							</li><!-- end ngRepeat: date in month.date_blocks -->
						</ol>

					</div>
				</div>
			</div><!-- end ngRepeat: month in months -->
			<div style="text-align:center">
				<div ng-show="calendar_next_month_error" class="alert alert-danger ng-binding ng-hide"></div>
				<a class="btn btn-primary" ng-class="{'disabled': is_busy_loading_next_month}" ng-click="loadAdditionalMonths()"><i class="fa fa-plus" ng-class="{'fa-cog fa-spin': is_busy_loading_next_month, 'fa-plus': !is_busy_loading_next_month}"></i>Show Next 3 Months</a>
			</div>
		</div>

		<!-- view sim-live web schedule -->
		<div class="col-md-12 ng-hide" ng-show="event_to_view &amp;&amp; event_to_view.eventType == SCHEDULE_TYPE_SIM_LIVE &amp;&amp; !is_loading_time_zone_list &amp;&amp; !show_update_event">
				<div class="box box-success">
					<div class="box-header with-border">
						<h3 class="box-title">Scheduled Web Event (Sim-Live)</h3>
					</div>
					<div class="box-body table-responsive">
						<div class="row">
							<div class="form-group col-md-3">
								<label>Schedule Description</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-3">
								<label>Web Event Profile to Replay<i class="fa fa-question-circle fa-icon-muted web-event-profile-tooltip" data-original-title="" title=""></i></label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-3">
								<label>Name Event Using</label>
								<div class="ng-binding">Original Web Event Name</div>
							</div>
							<div class="form-group col-md-3">
								<label>Status</label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-3">
								<label><span ng-show="!event_to_view.oneTime">Start </span>Date</label>
								<div class="ng-binding">Aug 27, 2019</div>
							</div>
							<div class="form-group col-md-3">
								<label>Is This A Recurring Event?</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-3 ng-hide" ng-show="event_to_view.oneTime == false">
								<label>End Schedule After Date?</label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-3">
								<label>Start Web Event At</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-3">
								<label>Timezone</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-3">
								<label>Available to Watch<i class="fa fa-question-circle fa-icon-muted available-to-watch-tooltip-sim-live" data-original-title="" title=""></i></label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row" ng-show="has_social_media_toggle">
							<div class="form-group col-lg-12">
								<label>Stream to Social Media</label>
								<p class="text-muted no-social-media-destinations" ng-show="event_to_view.simulcasts == null || event_to_view.simulcasts.length < 1">This sim-live schedule does not currently stream to any social media destinations.</p>
								<table class="table align-middle social-media-destinations ng-hide" ng-show="event_to_view.simulcasts != null || event_to_view.simulcasts.length > 0">
									<tbody><!-- ngRepeat: entry in event_to_view.simulcasts -->
								</tbody></table>
							</div>
						</div>
					</div>
					<div class="box-footer">
						<a class="btn btn-primary" ng-click="showUpdateEvent(event_to_view)" ng-class="{'disabled': isLoadingUpdateEventUI()}" ng-show="canShowEditWebScheduleBtn()"><i class="fa fa-edit" ng-class="{'fa-cog fa-spin': isLoadingUpdateEventUI(), 'fa-edit': !isLoadingUpdateEventUI()}"></i>Edit Schedule</a>
						<a class="btn btn-danger" ng-click="showDeleteEvent(event_to_view)" ng-show="canShowDeleteWebScheduleBtn()"><i class="fa fa-remove"></i>Delete Schedule</a>
						<a class="btn btn-default pull-right" ng-click="cancelViewEvent()">Cancel</a>
					</div>
				</div>
		</div>

		<!-- view encoder schedule -->
		<div class="col-md-12 ng-hide" ng-show="event_to_view &amp;&amp; event_to_view.eventType == SCHEDULE_TYPE_ENCODER &amp;&amp; !is_loading_time_zone_list &amp;&amp; !show_update_event">
			<div class="box box-success">
				<div class="box-header with-border">
					<h3 class="box-title">Scheduled Encoder Event</h3>
				</div>
				<div class="box-body table-responsive">
					<div class="row">
						<div class="form-group col-md-4">
							<label>Schedule Description</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4">
							<label>Name Event Using</label>
							<div class="ng-binding">Event Profile Name</div>
						</div>
						<div class="form-group col-md-4">
							<label>Status</label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-4">
							<label>Encoder</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4">
							<label>Encoder Profile</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4">
							<label>Event Profile</label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-4">
							<label><span ng-show="!event_to_view.oneTime">Start </span>Date</label>
							<div class="ng-binding">Aug 27, 2019</div>
						</div>
						<div class="form-group col-md-4">
							<label>Is This A Recurring Event?</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4 ng-hide" ng-show="event_to_view.oneTime == false">
							<label>End Schedule After Date?</label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-4">
							<label>Start Encoder At</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4">
							<label>Timezone</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-4">
							<label>Stop Encoder After</label>
							<div class="ng-binding"><span class="text-muted ng-binding" style="padding-left:5px;">()</span></div>
						</div>
					</div>

					<div ng-show="canShowWebSchedules()">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="box-subsection-header"><i class="fa fa-globe fa-globe-resize"></i>&nbsp;&nbsp;Web Events</h4>
							</div>
						</div>
						<div class="row ng-hide" ng-show="event_to_view.web_events.length == 0 &amp;&amp; !add_web_event_to_encoder_schedule">
							<div class="col-lg-12">
								<p>None </p><div class="text-muted" style="font-size:smaller">To add a web event, press the "Edit Schedule" button below.</div><p></p>
							</div>
						</div>
						<div class="row ng-hide" ng-show="event_to_view.web_events.length > 0 &amp;&amp; !add_web_event_to_encoder_schedule">
							<div class="col-lg-12">
							<table class="table align-middle" style="margin-bottom:0;">
								<tbody><tr>
									<th>Description</th>
									<th>Time <span class="text-muted" style="font-weight:normal;">(Duration)</span></th>
									<th>Available to Watch<i class="fa fa-question-circle fa-icon-muted available-to-watch-tooltip" data-original-title="" title=""></i></th>
									<th>Web Encoder Profile</th>
									<th>Web Event Profile</th>
									<th ng-show="has_social_media_toggle">Stream to Social Media</th>
									<th>Status</th>
								</tr>
								<!-- ngRepeat: web_event in event_to_view.web_events -->
							</tbody></table>
							</div>
						</div>
					</div>

				</div>
				<div class="box-footer">
					<a class="btn btn-primary" ng-click="showUpdateEvent(event_to_view)" ng-class="{'disabled': isLoadingUpdateEventUI()}" ng-show="canShowEditEncoderScheduleBtn()"><i class="fa fa-edit" ng-class="{'fa-cog fa-spin': isLoadingUpdateEventUI(), 'fa-edit': !isLoadingUpdateEventUI()}"></i>Edit Schedule</a>
					<a class="btn btn-danger" ng-click="showDeleteEvent(event_to_view)" ng-show="canShowDeleteEncoderScheduleBtn()"><i class="fa fa-remove"></i>Delete Schedule</a>
					<a class="btn btn-default pull-right" ng-click="cancelViewEvent()">Cancel</a>
				</div>
			</div>
		</div>

		<!-- delete sim live web schedule -->
		<div class="col-md-12 ng-hide" ng-show="event_to_delete &amp;&amp; event_to_delete.eventType == SCHEDULE_TYPE_SIM_LIVE">
			<div class="box box-danger">
				<div class="box-header with-border">
					<h3 class="box-title">Are you sure you want to <strong>delete</strong> this schedule?</h3>
				</div>
				<div class="box-body table-responsive">
					<div class="row">
						<div class="form-group col-md-3">
							<label>Schedule Description</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-3">
							<label>Web Event Profile to Replay<i class="fa fa-question-circle fa-icon-muted web-event-profile-tooltip" data-original-title="" title=""></i></label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-3">
							<label>Name Event Using</label>
							<div class="ng-binding">Original Web Event Name</div>
						</div>
						<div class="form-group col-md-3">
							<label>Status</label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-3">
							<label><span ng-show="!event_to_delete.oneTime">Start </span>Date</label>
							<div class="ng-binding">Aug 27, 2019</div>
						</div>
						<div class="form-group col-md-3">
							<label>Is This A Recurring Event?</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-3 ng-hide" ng-show="event_to_delete.oneTime == false">
							<label>End Schedule After Date?</label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-3">
							<label>Start Web Event At</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-3">
							<label>Timezone</label>
							<div class="ng-binding"></div>
						</div>
						<div class="form-group col-md-3">
							<label>Available to Watch<i class="fa fa-question-circle fa-icon-muted available-to-watch-tooltip-sim-live" data-original-title="" title=""></i></label>
							<div class="ng-binding"></div>
						</div>
					</div>

					<div class="row" ng-show="has_social_media_toggle">
						<div class="form-group col-lg-12">
							<label>Stream to Social Media</label>
							<p class="text-muted no-social-media-destinations" ng-show="event_to_delete.simulcasts == null || event_to_delete.simulcasts.length < 1">This sim-live schedule does not currently stream to any social media destinations.</p>
							<table class="table align-middle social-media-destinations ng-hide" ng-show="event_to_delete.simulcasts != null || event_to_delete.simulcasts.length > 0">
								<tbody><!-- ngRepeat: entry in event_to_delete.simulcasts -->
							</tbody></table>
						</div>
					</div>
				</div>
				<div class="box-footer">
					<a class="btn btn-danger" ng-click="deleteEvent()" ng-class="{'disabled': is_busy_deleting_event}"><i class="fa fa-remove" ng-class="{'fa-cog fa-spin': is_busy_deleting_event, 'fa-remove': !is_busy_deleting_event}"></i>Delete Schedule</a>
					<a class="btn btn-default pull-right" ng-click="cancelDeleteEvent()">Cancel</a>
				</div>
			</div>
		</div>

		<!-- delete encoder schedule -->
		<div class="col-md-12 ng-hide" ng-show="event_to_delete &amp;&amp; event_to_delete.eventType == SCHEDULE_TYPE_ENCODER">
				<div class="box box-danger">
					<div class="box-header with-border">
						<h3 class="box-title">Are you sure you want to <strong>delete</strong> this schedule?</h3>
					</div>
					<div class="box-body table-responsive">
						<div class="row">
							<div class="form-group col-md-4">
								<label>Schedule Description</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4">
								<label>Name Event Using</label>
								<div class="ng-binding">Event Profile Name</div>
							</div>
							<div class="form-group col-md-4">
								<label>Status</label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-4">
								<label>Encoder</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4">
								<label>Encoder Profile</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4">
								<label>Event Profile</label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-4">
								<label><span ng-show="!event_to_delete.oneTime">Start </span>Date</label>
								<div class="ng-binding">Aug 27, 2019</div>
							</div>
							<div class="form-group col-md-4">
								<label>Is This A Recurring Event?</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4 ng-hide" ng-show="event_to_delete.oneTime == false">
								<label>End Schedule After Date?</label>
								<div class="ng-binding"></div>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-4">
								<label>Start Encoder At</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4">
								<label>Timezone</label>
								<div class="ng-binding"></div>
							</div>
							<div class="form-group col-md-4">
								<label>Stop Encoder After</label>
								<div class="ng-binding"><span class="text-muted ng-binding" style="padding-left:5px;">()</span></div>
							</div>
						</div>

						<div ng-show="canShowWebSchedules()">
							<div class="row">
								<div class="col-lg-12">
									<h4 class="box-subsection-header"><i class="fa fa-globe fa-globe-resize"></i>&nbsp;&nbsp;Web Events</h4>
								</div>
							</div>
							<div class="row ng-hide" ng-show="event_to_delete.web_events.length == 0 &amp;&amp; !add_web_event_to_encoder_schedule">
								<div class="col-lg-12">
									<p>None</p>
								</div>
							</div>
							<div class="row ng-hide" ng-show="event_to_delete.web_events.length > 0 &amp;&amp; !add_web_event_to_encoder_schedule">
								<div class="col-lg-12">
								<table class="table align-middle" style="margin-bottom:0;">
									<tbody><tr>
										<th>Description</th>
										<th>Time <span class="text-muted" style="font-weight:normal;">(Duration)</span></th>
										<th>Available to Watch<i class="fa fa-question-circle fa-icon-muted available-to-watch-tooltip" data-original-title="" title=""></i></th>
										<th>Web Encoder Profile</th>
										<th>Web Event Profile</th>
										<th ng-show="has_social_media_toggle">Stream to Social Media</th>
										<th>Status</th>
									</tr>
									<!-- ngRepeat: web_event in event_to_delete.web_events -->
								</tbody></table>
								</div>
							</div>
						</div>

					</div>
					<div class="box-footer">
						<a class="btn btn-danger" ng-click="deleteEvent()" ng-class="{'disabled': is_busy_deleting_event}"><i class="fa fa-remove" ng-class="{'fa-cog fa-spin': is_busy_deleting_event, 'fa-remove': !is_busy_deleting_event}"></i>Delete Schedule</a>
						<a class="btn btn-default pull-right" ng-click="cancelDeleteEvent()">Cancel</a>
					</div>
				</div>
		</div>

		<!-- add/update event -->
		<div class="col-lg-12" ng-show="event_to_analyze &amp;&amp; event_analytics">
			<div class="box box-success">
				<div class="box-header with-border">
					<h3 class="box-title ng-binding">Analytics&nbsp;&nbsp;-&nbsp;&nbsp;CO Live 11:15 AM Service</h3>
					<h3 class="box-title pull-right text-muted ng-binding">Sun, Sep 29, 2019 10:45:00 AM</h3>
				</div>
				<div class="box-body table-responsive">
					<div class="row">
						<canvas style="height:500px;" id="bestGraphEver"></canvas>
					</div>
				
					<div class="row">
						<div class="form-group col-lg-4">
							<label>Total Viewers</label>
							<p class="ng-binding">276</p>
						</div>
						<div class="col-lg-4">
							<table class="table table-hover align-middle ng-scope" ts-wrapper="" ng-show="event_analytics.totalViewers > 0">
								<tbody><tr class="showIfLast ng-scope">
									
									
								<td colspan="2" class="ng-binding">No items</td></tr><tr style="background-color:#f5f5f5;">
									<th>Resolution</th>
									<th>Viewers</th>
								</tr>
								<!-- ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">144p</td>
									<td class="ng-binding">56</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">270p</td>
									<td class="ng-binding">4</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">360p</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">540p</td>
									<td class="ng-binding">82</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">720p</td>
									<td class="ng-binding">27</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="ng-binding">1080p</td>
									<td class="ng-binding">98</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun -->
							</tbody></table>
						</div>
						<div class="col-lg-4" ng-show="event_analytics.totalViewers > 0">
							<table class="table table-hover align-middle" style="margin-bottom:10px" ng-show="event_analytics.showTimeWatchedOverview">
								<tbody><tr style="background-color:#f5f5f5;">
									<th>How long did they watch?</th>
									<th>Viewers</th>
								</tr>
								<!-- ngRepeat: entry in event_analytics.timeWatchedOverview track by $index --><tr ng-repeat="entry in event_analytics.timeWatchedOverview track by $index" class="ng-scope">
									<td class="ng-binding">0 to 10 minutes</td>
									<td class="ng-binding">53</td>
								</tr><!-- end ngRepeat: entry in event_analytics.timeWatchedOverview track by $index --><tr ng-repeat="entry in event_analytics.timeWatchedOverview track by $index" class="ng-scope">
									<td class="ng-binding">10 to 30 minutes</td>
									<td class="ng-binding">34</td>
								</tr><!-- end ngRepeat: entry in event_analytics.timeWatchedOverview track by $index --><tr ng-repeat="entry in event_analytics.timeWatchedOverview track by $index" class="ng-scope">
									<td class="ng-binding">30+ minutes</td>
									<td class="ng-binding">189</td>
								</tr><!-- end ngRepeat: entry in event_analytics.timeWatchedOverview track by $index -->
							</tbody></table>
							<table class="table table-hover align-middle ng-hide" style="margin-bottom:10px" ng-show="!event_analytics.showTimeWatchedOverview">
								<tbody><tr style="background-color:#f5f5f5;">
									<th>How long did they watch?</th>
									<th>Viewers</th>
								</tr>
								<tr>
									<td>Less than 90 seconds</td>
									<td class="ng-binding">27</td>
								</tr>
								<!-- ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">1.5 to 5 minutes</td>
									<td class="ng-binding">23</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">5 to 10 minutes</td>
									<td class="ng-binding">3</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">10 to 15 minutes</td>
									<td class="ng-binding">10</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">15 to 20 minutes</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">20 to 25 minutes</td>
									<td class="ng-binding">6</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">25 to 30 minutes</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">30 to 35 minutes</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">35 to 40 minutes</td>
									<td class="ng-binding">13</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">40 to 45 minutes</td>
									<td class="ng-binding">7</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">45 to 50 minutes</td>
									<td class="ng-binding">14</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">50 to 55 minutes</td>
									<td class="ng-binding">12</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">55 to 60 minutes</td>
									<td class="ng-binding">14</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">60 to 65 minutes</td>
									<td class="ng-binding">8</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">65 to 70 minutes</td>
									<td class="ng-binding">14</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">70 to 75 minutes</td>
									<td class="ng-binding">11</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">75 to 80 minutes</td>
									<td class="ng-binding">8</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">80 to 85 minutes</td>
									<td class="ng-binding">7</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">85 to 90 minutes</td>
									<td class="ng-binding">10</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">90 to 95 minutes</td>
									<td class="ng-binding">34</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">95 to 100 minutes</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">100 to 105 minutes</td>
									<td class="ng-binding">9</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">105 to 110 minutes</td>
									<td class="ng-binding">2</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">110 to 115 minutes</td>
									<td class="ng-binding">2</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">115 to 120 minutes</td>
									<td class="ng-binding">5</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index --><tr ng-repeat="entry in event_analytics.watchTimesArray track by $index" class="ng-scope">
									<td class="ng-binding">130 to 135 minutes</td>
									<td class="ng-binding">1</td>
								</tr><!-- end ngRepeat: entry in event_analytics.watchTimesArray track by $index -->
							</tbody></table>
							
							<a class="btn btn-default btn-xs pull-right ng-hide" ng-show="!event_analytics.showTimeWatchedOverview" ng-click="event_analytics.showTimeWatchedOverview = true">back to overview</a>
						</div>
</div><style>.userAgent{max-width:200px;}</style><div class="row">
    <div style="
    display: flex;
"><h2 style="
    margin-left: 14px;
">Breakdown of Data</h2><a class="btn btn-default btn-xs pull-right" ng-show="event_analytics.showTimeWatchedOverview" ng-click="event_analytics.showTimeWatchedOverview = false" style="
    height: 23px;
    margin-top: 28px;
    margin-left: 20px;
">download CSV</a></div>

<table class="table table-hover align-middle ng-scope" ts-wrapper="" ng-show="event_analytics.totalViewers > 0">
								<tbody><tr class="showIfLast ng-scope">
									
									
								<td colspan="2" class="ng-binding">No items</td></tr><tr style="background-color:#f5f5f5;">
									<th>ID</th>
									<th>Time Stamp</th>
<th>City</th>
<th>State</th>
<th>Long,Lat</th>
<th>Duration</th>
<th>Platform</th><th>Useragent</th>

								</tr>
								<!-- ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="">1</td>
									<td class="">10/4/2019 12:00:00AM</td>
<td>Mabank</td>
<td>Texas</td>
<td>42.213,-49.211</td>
<td>142s</td>
<td>iOS</td>
<td class="userAgent" style="
    text-overflow: ellipsis;
">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36</td>
								</tr>
<tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="">2</td>
									<td class="">10/4/2019 12:00:00AM</td>
<td>Mabank</td>
<td>Texas</td>
<td>42.213,-49.211</td>
<td>1452s</td>
<td>Roku</td>
<td class="userAgent" style="
    text-overflow: ellipsis;
">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36</td>
								</tr>
<tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="">3</td>
									<td class="">10/4/2019 12:00:00AM</td>
<td>Mabank</td>
<td>Texas</td>
<td>42.213,-49.211</td>
<td>123s</td>
<td>Windows_Chrome</td>
<td class="userAgent" style="
    text-overflow: ellipsis;
">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36</td>
								</tr><tr ng-repeat="entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun" ts-repeat="" class="ng-scope">
									<td class="">4</td>
									<td class="">10/4/2019 12:00:00AM</td>
<td>Mabank</td>
<td>Texas</td>
<td>42.213,-49.211</td>
<td>114s</td>
<td>iOS</td>
<td class="userAgent" style="
    text-overflow: ellipsis;
">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36</td>
								</tr><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun --><!-- end ngRepeat: entry in event_analytics.resolutions_array | tablesortOrderBy:sortFun | tablesortLimit:filterLimitFun | tablesortLimit:pageLimitFun -->
							</tbody></table></div>
							
								<div class="row">
				<div class="col-md-8">
						  <div id="floating-panel" style='position:relative !important;float:left;'>
						      <button onclick="toggleHeatmap()">Toggle Heatmap</button>
						      <button onclick="changeGradient()">Change gradient</button>
						      <button onclick="changeRadius()">Change radius</button>
						      <button onclick="changeOpacity()">Change opacity</button>
						    </div>
						    <div id="map" style="height:500px;width:100%;"></div>
					</div>
				</div>
				
				</div>
			</div>
		</div>
		

		<!-- Popup Dialog - Warning about schedule changes stopping running encoder -->
		<div class="modal fade" id="schedule-warning-modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel" style="font-weight:bold;">These Changes Will Stop the Encoder</h4>
					</div>
					<div class="modal-body">
						The encoder for this schedule is currently started; however, the selected time range specifies that the encoder should not be started at the current time. Since schedule changes take effect immediately, this will cause the encoder to stop.
						<div style="margin-top:10px;">If you don't want to stop the encoder, then you should press cancel and make your schedule changes later (when the encoder isn't started). If it is okay for the encoder to stop, then you can continue with your save.</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary pull-left" ng-click="forceAddOrUpdateRegEvent()"><i class="fa fa-save"></i>&nbsp;&nbsp;Continue with Save (which will stop the encoder)</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Popup Dialog - For adding social media destination to web event -->
		<div class="modal fade" id="add-social-media-modal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
						<h4 class="modal-title" id="myModalLabel" style="font-weight:bold;"><span ng-show="social_media_form.is_new" class="ng-hide">Add</span><span ng-hide="social_media_form.is_new">Edit</span> Social Media Destination</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="form-group col-lg-6" ng-class="{'has-error': dlg_has_error.social_media_account}">
								<label style="display:block;">Social Media Account</label>
								<select class="form-control ng-pristine ng-untouched ng-valid ng-empty" style="width:auto" ng-model="social_media_form.account_id" ng-options="item.uuid as item.formatted_name for item in social_media_acct_list" ng-change="onSocialMediaAcctChanged()"><option value="?" selected="selected"></option><option label="[YouTube] Brad Reitmeyer" value="string:c1cfd31c-d1c5-4796-bc3e-d9624a731049">[YouTube] Brad Reitmeyer</option><option label="[YouTube] Charlie Nance" value="string:2c614df5-29c6-41eb-be9d-e3019d54b9fb">[YouTube] Charlie Nance</option><option label="[YouTube] Chris Ribble" value="string:af2a074a-4141-43bf-95aa-fcb523e50ff4">[YouTube] Chris Ribble</option><option label="[YouTube] Collin Jones Personal (Not allowed to Live Stream)" value="string:b9b6e8d9-e98d-4a5b-bedd-938de8bcda76">[YouTube] Collin Jones Personal (Not allowed to Live Stream)</option><option label="[YouTube] hunter.neil@livingasone.com" value="string:b12b825d-0ba4-4abd-9d43-fc383ca3f106">[YouTube] hunter.neil@livingasone.com</option><option label="[YouTube] jared@jaredlathrop.com (No Access)" value="string:dfd8d7e7-fc48-4294-8fba-415f19876c4e">[YouTube] jared@jaredlathrop.com (No Access)</option><option label="[YouTube] Joe Duffy" value="string:c96761bb-121d-4309-a700-8d9fe490c460">[YouTube] Joe Duffy</option><option label="[YouTube] michael.schmdit@livingasone.com" value="string:d9180173-7ce9-4d19-9caf-f4d0cc8c46e2">[YouTube] michael.schmdit@livingasone.com</option><option label="[YouTube] Parker (LA1) Campus 2" value="string:1fc4ec2a-9780-412b-a411-134b33bf1ab5">[YouTube] Parker (LA1) Campus 2</option><option label="[YouTube] Parker Bain (LA1) - Primary" value="string:b0ca17be-1408-43bb-8319-16c75a52c7b9">[YouTube] Parker Bain (LA1) - Primary</option><option label="[YouTube] Travis Lemmon" value="string:7284bf20-dd1c-4cb8-a61e-dad7f295d20f">[YouTube] Travis Lemmon</option><option label="[YouTube] UseyLAO" value="string:9634d8c0-b9c2-4450-9721-bf0db133ffe4">[YouTube] UseyLAO</option><option label="[Facebook] Brad Reitmeyer" value="string:57c7b1c9-ac0f-4b07-bba5-9ef434d70af4">[Facebook] Brad Reitmeyer</option><option label="[Facebook] Chris Ribble (Work)" value="string:9b3f9f9f-5a53-4cf6-86c7-c6e34373b83e">[Facebook] Chris Ribble (Work)</option><option label="[Facebook] Donna Alchddhgfegdg Lauberg" value="string:50d3460e-dede-4d18-8f10-63f0dc6c0921">[Facebook] Donna Alchddhgfegdg Lauberg</option><option label="[Facebook] Hunter Neil" value="string:18eb60c7-eed7-43f5-9d7e-b5b9554dec71">[Facebook] Hunter Neil</option><option label="[Facebook] Joe Duffy" value="string:5b2c5e0f-fc2a-4738-bd80-59f0ef5f4352">[Facebook] Joe Duffy</option><option label="[Facebook] Matthew Lao" value="string:d62fa7c7-b767-4616-a777-73ae1334599b">[Facebook] Matthew Lao</option><option label="[Facebook] Parker Bain" value="string:dfb66951-d83c-4713-ae7d-ef9e0e4e579c">[Facebook] Parker Bain</option><option label="[Facebook] Trent Brown" value="string:54e6e797-5425-438e-8601-132d699b4ace">[Facebook] Trent Brown</option></select>
							</div>
							<div class="form-group col-lg-6" ng-class="{'has-error': dlg_has_error.social_media_event}">
								<label style="display:block;">Destination</label>
								<p ng-show="social_media_event_list_error" style="position:relative;top:5px;" class="ng-hide"><span class="label label-danger label-readability" style="padding:4px 7px;">Unable to load events.</span> <button type="button" class="btn btn-default btn-xs" ng-click="onSocialMediaAcctChanged()">Retry</button></p>
								<div ng-hide="social_media_event_list_error">
									<p ng-show="social_media_event_list == null &amp;&amp; !is_loading_social_event_list" style="position:relative;top:7px">Select an Account</p>
									<p ng-show="is_loading_social_event_list" style="position:relative;top:7px" class="ng-hide">Loading ...</p>
									<select class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-hide" style="width:auto" ng-show="social_media_event_list  &amp;&amp; !is_loading_social_event_list" ng-model="social_media_form.event_id" ng-options="item.id as item.title for item in social_media_event_list" ng-change="onDestinationChanged()"><option value="?" selected="selected"></option></select>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="form-group col-lg-6" ng-class="{'has-error': dlg_has_error.social_media_privacy}">
								<label style="display:block;">Privacy</label>
								<p ng-show="social_media_form.event_id == null" style="position:relative;top:7px">Select a Destination</p>
								<select class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-hide" style="width:auto" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_options"><option value="?" selected="selected"></option></select>
							</div>
							<div class="form-group col-lg-6" ng-class="{'has-error': dlg_has_error.social_media_publish_status}">
								<label style="display:block;">Publish Status</label>
								<p ng-show="social_media_form.event_id == null" style="position:relative;top:7px">Select a Destination</p>
								<select class="form-control ng-pristine ng-untouched ng-valid ng-empty ng-hide" style="width:auto" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.publishStatus" ng-options="item.value as item.name for item in social_media_publish_options"><option value="?" selected="selected"></option></select>
							</div>
						</div>
						<div class="row ng-hide" ng-show="social_media_form_validation_error">
							<div class="col-lg-12">
								<div class="alert alert-danger ng-binding" style="margin-bottom:0;"></div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary pull-left" ng-click="saveSocialMediaDestination()" ng-class="{'disabled': is_loading_social_event_list}">
							<span ng-show="social_media_form.is_new" class="ng-hide">Done</span>
							<span ng-hide="social_media_form.is_new"><i class="fa fa-save"></i>&nbsp;&nbsp;Save Changes</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Popup Dialog - Provides more info about simulcast error status -->
		<div class="modal fade" id="simulcast-error-more-info" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<simulcast-error-dlg-content code="more_info.code" type="more_info.type" title="more_info.title" web-event-name="" class="ng-isolate-scope"><div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">×</span>
	</button>
	<h4 class="modal-title ng-binding" id="myModalLabel" style="font-weight:bold;"></h4>
</div>

<div class="modal-body">
	<div class="row">
		<div class="col-lg-12">
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_INVALID_SIMULCAST" class="ng-hide">
				<p class="ng-binding">
					An error occurred trying to stream to Unknown. Please
					<a href="https://livingasone.com/support/" target="_blank">contact support</a> and provide the following information:
				</p>
				<p class="ng-binding">
					Web Event Name: <br>
					Code: 
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_INVALID_SIMULCAST_MANIFEST" class="ng-hide">
				<p class="ng-binding">
					An error occurred trying to stream to Unknown. Please
					<a href="https://livingasone.com/support/" target="_blank">contact support</a> and provide the following information:
				</p>
				<p class="ng-binding">
					Web Event Name: <br>
					Code: <br>
					Possible Causes: incompatible encoder profile or a segment length that is too long
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_CONFLICT" class="ng-hide">
				<p class="ng-binding">
					Another web event is already streaming to this Unknown account.
					This can occur when two events are scheduled back-to-back. If that is the case, then the 2nd event should
					begin as soon as the 1st event completes.
				</p>
				<p class="ng-binding">
					Otherwise, in order to stream to this Unknown account you will need
					to stop the other web event that is streaming to the same account.
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_TOKEN_INVALID" class="ng-hide">
				<p class="ng-binding">
					We no longer have permission to access and manage your
					Unknown account. This is required in order to perform live
					streaming. You can re-grant access from the <a ng-href="#/socialmedia" target="_blank" href="#/socialmedia">Social Media</a> page.
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_NOT_ENABLED" class="ng-hide">
				<div ng-show="$ctrl.type == $ctrl.socialMedia.TYPE_YOUTUBE" class="ng-hide">
					<p>
						Live streaming has not been enabled for this YouTube account. To enable Live Streaming, visit the YouTube
						<a href="https://www.youtube.com/features" target="_blank">"Status and Features"</a> page and find the box
						for "Live streaming". Then click the "Enable" button.
					</p>
					<p>It can take up to 24 hours for YouTube to process the request.</p>
				</div>
				<div ng-show="$ctrl.type == $ctrl.socialMedia.TYPE_FACEBOOK" class="ng-hide">
					<p>
						We no longer have permission to publish video to your Facebook account. This is required in order to perform
						live streaming.
					</p>
					<p>
						To grant permission to publish video, visit the Facebook
						<a href="https://www.facebook.com/settings?tab=business_tools" target="_blank">Business Integrations</a>
						page and ensure the "Publish video to your timeline on your behalf" setting is selected for Living As One.
					</p>
				</div>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_ENABLED_BUT_NOT_ACTIVE" class="ng-hide">
				<p>
					Live streaming has not been enabled for this YouTube account. While it appears that live streaming has been
					requested, it has not yet been approved.
				</p>
				<p>It can take up to 24 hours for YouTube to process the request.</p>
				<p>
					If the status remains like this for more than 24 hours,
					<a class="btn btn-default btn-xs" style="position:relative;top:-2px;" ng-click="read_more=true" ng-hide="read_more">read more</a>
					<span ng-show="read_more" class="ng-hide">
						then the channel may have gotten in an unusual state. This can usually be fixed by making a change to your
						YouTube channel settings.</span>
				</p>
				<p ng-show="read_more" class="ng-hide">
					For example, you could change the category, wait for it to auto-save, and then change the category back. After
					doing that you can refresh this page to see if the status for the YouTube account has changed. If that does
					not work, then please
					<a href="https://livingasone.com/support/" target="_blank">contact Living As One support</a>.
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_PARTNER_ERROR" class="ng-hide">
				<p class="ng-binding">
					An error was encountered with Unknown. If this does not resolve
					itself in a few minutes, then please
					<a href="https://livingasone.com/support/" target="_blank">contact support</a> and provide the following information:
				</p>
				<p class="ng-binding">
					Web Event Name: <br>
					Code: 
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_COMMUNICATION_ERROR || $ctrl.code == $ctrl.socialMedia.STATUS_TRANSCODER_ERROR || $ctrl.code == $ctrl.socialMedia.STATUS_ERROR" class="ng-hide">
				<p class="ng-binding">
					An error occurred trying to stream to Unknown. If this does not
					resolve itself in a few minutes, then please
					<a href="https://livingasone.com/support/" target="_blank">contact support</a> and provide the following information:
				</p>
				<p class="ng-binding">
					Web Event Name: <br>
					Code: 
				</p>
			</div>
			<div ng-show="$ctrl.code == $ctrl.socialMedia.STATUS_UNKNOWN" class="ng-hide">
				<p class="ng-binding">
					We are unable to reach Unknown to determine the status of this account.
				</p>
			</div>
		</div>
	</div>
</div>
</simulcast-error-dlg-content>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

	</div>

</section><!-- /.content --></div>
		<!-- /.content-wrapper -->

		<!-- Main Footer -->
		<footer class="main-footer">
			<!-- To the right -->
			<div class="pull-right">v2.144</div>
			<!-- Default to the left -->
			Copyright © 2015-2019 <a href="http://www.livingasone.com/">Living As One</a>. All rights reserved.
			<a ng-href="#/licenseinfo" href="#/licenseinfo">Open Source License Info.</a>
		</footer>
	</div>
	<script type="text/javascript" src="v2.144/runtime.bundle.js"></script>
	<script type="text/javascript" src="v2.144/vendor.bundle.js"></script>
	<script type="text/javascript" src="v2.144/app.bundle.js"></script>

	<div class="daterangepicker ltr show-calendar opensright">
		<div class="ranges"></div>
		<div class="drp-calendar left">
			<div class="calendar-table"></div>
			<div class="calendar-time"></div>
		</div>
		<div class="drp-calendar right">
			<div class="calendar-table"></div>
			<div class="calendar-time"></div>
		</div>
		<div class="drp-buttons"><span class="drp-selected"></span>
			<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
			<button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button>
		</div>
	</div>
	<div class="daterangepicker ltr single auto-apply opensright">
		<div class="ranges"></div>
		<div class="drp-calendar left single" style="display: block;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-calendar right" style="display: none;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-buttons"><span class="drp-selected"></span>
			<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
			<button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button>
		</div>
	</div>
	<div class="daterangepicker ltr single auto-apply opensright">
		<div class="ranges"></div>
		<div class="drp-calendar left single" style="display: block;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-calendar right" style="display: none;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-buttons"><span class="drp-selected"></span>
			<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
			<button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button>
		</div>
	</div>
	<div class="daterangepicker ltr single auto-apply opensright">
		<div class="ranges"></div>
		<div class="drp-calendar left single" style="display: block;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-calendar right" style="display: none;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-buttons"><span class="drp-selected"></span>
			<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
			<button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button>
		</div>
	</div>
	<div class="daterangepicker ltr single auto-apply opensright">
		<div class="ranges"></div>
		<div class="drp-calendar left single" style="display: block;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-calendar right" style="display: none;">
			<div class="calendar-table"></div>
			<div class="calendar-time" style="display: none;"></div>
		</div>
		<div class="drp-buttons"><span class="drp-selected"></span>
			<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
			<button class="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script>
		function initOnChange() {
			$('#destinationChoice').change(function() {
				current = $('#destinationChoice')[0].value;
				if (current == "LAO") {
					$('.laoEmbed').show();
					$('.smEmbed').hide();
				} else {
					$('.laoEmbed').hide();
					$('.smEmbed').show();
				}
			});
			$('.laoEmbed').show();
			$('.smEmbed').hide();
		}
	</script>


	<script>
	
	
window.startWebEvent = '<div class="form-group col-lg-12 smEmbed"></div><div class="form-group col-lg-2">'+
'											<label style="display:block;">Start At</label>'+
'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto;display:inline-block;" ng-model="web_event_to_add_to_encoder_schedule.time_hours" ng-options="value for value in time_hours_list"><option label="1" value="string:1">1</option><option label="2" value="string:2">2</option><option label="3" value="string:3">3</option><option label="4" value="string:4">4</option><option label="5" value="string:5">5</option><option label="6" value="string:6">6</option><option label="7" value="string:7">7</option><option label="8" value="string:8">8</option><option label="9" value="string:9" selected="selected">9</option><option label="10" value="string:10">10</option><option label="11" value="string:11">11</option><option label="12" value="string:12">12</option></select>'+
'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto;display:inline-block;" ng-model="web_event_to_add_to_encoder_schedule.time_minutes" ng-options="value for value in time_minutes_list_1"><option label="00" value="string:00" selected="selected">00</option><option label="01" value="string:01">01</option><option label="02" value="string:02">02</option><option label="03" value="string:03">03</option><option label="04" value="string:04">04</option><option label="05" value="string:05">05</option><option label="06" value="string:06">06</option><option label="07" value="string:07">07</option><option label="08" value="string:08">08</option><option label="09" value="string:09">09</option><option label="10" value="string:10">10</option><option label="11" value="string:11">11</option><option label="12" value="string:12">12</option><option label="13" value="string:13">13</option><option label="14" value="string:14">14</option><option label="15" value="string:15">15</option><option label="16" value="string:16">16</option><option label="17" value="string:17">17</option><option label="18" value="string:18">18</option><option label="19" value="string:19">19</option><option label="20" value="string:20">20</option><option label="21" value="string:21">21</option><option label="22" value="string:22">22</option><option label="23" value="string:23">23</option><option label="24" value="string:24">24</option><option label="25" value="string:25">25</option><option label="26" value="string:26">26</option><option label="27" value="string:27">27</option><option label="28" value="string:28">28</option><option label="29" value="string:29">29</option><option label="30" value="string:30">30</option><option label="31" value="string:31">31</option><option label="32" value="string:32">32</option><option label="33" value="string:33">33</option><option label="34" value="string:34">34</option><option label="35" value="string:35">35</option><option label="36" value="string:36">36</option><option label="37" value="string:37">37</option><option label="38" value="string:38">38</option><option label="39" value="string:39">39</option><option label="40" value="string:40">40</option><option label="41" value="string:41">41</option><option label="42" value="string:42">42</option><option label="43" value="string:43">43</option><option label="44" value="string:44">44</option><option label="45" value="string:45">45</option><option label="46" value="string:46">46</option><option label="47" value="string:47">47</option><option label="48" value="string:48">48</option><option label="49" value="string:49">49</option><option label="50" value="string:50">50</option><option label="51" value="string:51">51</option><option label="52" value="string:52">52</option><option label="53" value="string:53">53</option><option label="54" value="string:54">54</option><option label="55" value="string:55">55</option><option label="56" value="string:56">56</option><option label="57" value="string:57">57</option><option label="58" value="string:58">58</option><option label="59" value="string:59">59</option></select>'+
'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto;display:inline-block;" ng-model="web_event_to_add_to_encoder_schedule.time_meridiem" ng-options="value for value in time_meridiem_list"><option label="AM" value="string:AM" selected="selected">AM</option><option label="PM" value="string:PM">PM</option></select>'+
'										</div>';

window.stopWebEvent = '<div class="form-group col-lg-2">'+
'											<label for="add-event-duration">Stop After</label>'+
'											<div>'+
'												<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto;display:inline-block;" id="add-event-duration-hours" ng-model="web_event_to_add_to_encoder_schedule.duration_hours" ng-options="value for value in duration_hours_list"><option label="0" value="string:0">0</option><option label="1" value="string:1">1</option><option label="2" value="string:2">2</option><option label="3" value="string:3" selected="selected">3</option><option label="4" value="string:4">4</option><option label="5" value="string:5">5</option><option label="6" value="string:6">6</option><option label="7" value="string:7">7</option><option label="8" value="string:8">8</option><option label="9" value="string:9">9</option><option label="10" value="string:10">10</option><option label="11" value="string:11">11</option></select> <span style="padding:0 10px 0 2px;">hours</span>'+
'												<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto;display:inline-block;" id="add-event-duration-minutes" ng-model="web_event_to_add_to_encoder_schedule.duration_minutes" ng-options="value for value in duration_minutes_list_1"><option label="0" value="string:0" selected="selected">0</option><option label="1" value="string:1">1</option><option label="2" value="string:2">2</option><option label="3" value="string:3">3</option><option label="4" value="string:4">4</option><option label="5" value="string:5">5</option><option label="6" value="string:6">6</option><option label="7" value="string:7">7</option><option label="8" value="string:8">8</option><option label="9" value="string:9">9</option><option label="10" value="string:10">10</option><option label="11" value="string:11">11</option><option label="12" value="string:12">12</option><option label="13" value="string:13">13</option><option label="14" value="string:14">14</option><option label="15" value="string:15">15</option><option label="16" value="string:16">16</option><option label="17" value="string:17">17</option><option label="18" value="string:18">18</option><option label="19" value="string:19">19</option><option label="20" value="string:20">20</option><option label="21" value="string:21">21</option><option label="22" value="string:22">22</option><option label="23" value="string:23">23</option><option label="24" value="string:24">24</option><option label="25" value="string:25">25</option><option label="26" value="string:26">26</option><option label="27" value="string:27">27</option><option label="28" value="string:28">28</option><option label="29" value="string:29">29</option><option label="30" value="string:30">30</option><option label="31" value="string:31">31</option><option label="32" value="string:32">32</option><option label="33" value="string:33">33</option><option label="34" value="string:34">34</option><option label="35" value="string:35">35</option><option label="36" value="string:36">36</option><option label="37" value="string:37">37</option><option label="38" value="string:38">38</option><option label="39" value="string:39">39</option><option label="40" value="string:40">40</option><option label="41" value="string:41">41</option><option label="42" value="string:42">42</option><option label="43" value="string:43">43</option><option label="44" value="string:44">44</option><option label="45" value="string:45">45</option><option label="46" value="string:46">46</option><option label="47" value="string:47">47</option><option label="48" value="string:48">48</option><option label="49" value="string:49">49</option><option label="50" value="string:50">50</option><option label="51" value="string:51">51</option><option label="52" value="string:52">52</option><option label="53" value="string:53">53</option><option label="54" value="string:54">54</option><option label="55" value="string:55">55</option><option label="56" value="string:56">56</option><option label="57" value="string:57">57</option><option label="58" value="string:58">58</option><option label="59" value="string:59">59</option></select> <span style="padding-left:2px;">minutes</span>'+
'											'+
'											</div>'+
'										</div>';
	

	

		function addDest() {


			var myvar = '<div id="destList" class="col-lg-12" style="width:100%;">' +
				'											<div class="row">' +
				'												<div class="form-group col-lg-2">' +
				'											<div><label>Destination </label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select id="destinationChoice" class="form-control ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: 240px;" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="LAO" selected="selected">LAO Embed Code</option><option label="Test1" value="FACEBOOK">Facebook</option><option label="TranscodedEncoderProfileScheduleTest" value="YOUTUBE">Youtube</option></select>' +
				'											</div>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Description</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="Schedule Description" ng-model="reg_event_to_add.name" focus-on="add-reg-schedule-input">' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Social Media Account</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-model="social_media_form.account_id" ng-options="item.uuid as item.formatted_name for item in social_media_acct_list" ng-change="onSocialMediaAcctChanged()"><option value="?" selected="selected"></option><option label="[YouTube] Brad Reitmeyer" value="string:c1cfd31c-d1c5-4796-bc3e-d9624a731049">[YouTube] Brad Reitmeyer</option><option label="[YouTube] Charlie Nance" value="string:2c614df5-29c6-41eb-be9d-e3019d54b9fb">[YouTube] Charlie Nance</option><option label="[YouTube] Chris Ribble" value="string:af2a074a-4141-43bf-95aa-fcb523e50ff4">[YouTube] Chris Ribble</option><option label="[YouTube] Collin Jones Personal (Not allowed to Live Stream)" value="string:b9b6e8d9-e98d-4a5b-bedd-938de8bcda76">[YouTube] Collin Jones Personal (Not allowed to Live Stream)</option><option label="[YouTube] jared@jaredlathrop.com (No Access)" value="string:dfd8d7e7-fc48-4294-8fba-415f19876c4e">[YouTube] jared@jaredlathrop.com (No Access)</option><option label="[YouTube] Joe Duffy" value="string:c96761bb-121d-4309-a700-8d9fe490c460">[YouTube] Joe Duffy</option><option label="[YouTube] michael.schmdit@livingasone.com" value="string:d9180173-7ce9-4d19-9caf-f4d0cc8c46e2">[YouTube] michael.schmdit@livingasone.com</option><option label="[YouTube] Parker (LA1) Campus 2" value="string:1fc4ec2a-9780-412b-a411-134b33bf1ab5">[YouTube] Parker (LA1) Campus 2</option><option label="[YouTube] Parker Bain (LA1) - Primary" value="string:b0ca17be-1408-43bb-8319-16c75a52c7b9">[YouTube] Parker Bain (LA1) - Primary</option><option label="[YouTube] Travis Lemmon" value="string:7284bf20-dd1c-4cb8-a61e-dad7f295d20f">[YouTube] Travis Lemmon</option><option label="[YouTube] UseyLAO" value="string:9634d8c0-b9c2-4450-9721-bf0db133ffe4">[YouTube] UseyLAO</option><option label="[Facebook] Brad Reitmeyer" value="string:57c7b1c9-ac0f-4b07-bba5-9ef434d70af4">[Facebook] Brad Reitmeyer</option><option label="[Facebook] Chris Ribble (Work)" value="string:9b3f9f9f-5a53-4cf6-86c7-c6e34373b83e">[Facebook] Chris Ribble (Work)</option><option label="[Facebook] Donna Alchddhgfegdg Lauberg" value="string:50d3460e-dede-4d18-8f10-63f0dc6c0921">[Facebook] Donna Alchddhgfegdg Lauberg</option><option label="[Facebook] Matthew Lao" value="string:d62fa7c7-b767-4616-a777-73ae1334599b">[Facebook] Matthew Lao</option><option label="[Facebook] Trent Brown" value="string:54e6e797-5425-438e-8601-132d699b4ace">[Facebook] Trent Brown</option></select>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Web Event Profile</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width:auto" id="add-event-encoder-profile" ng-model="web_event_to_add_to_encoder_schedule.web_event_profile" ng-options="profile.uuid as profile.name for profile in transcoder_event_profile_list"><option value="?" selected="selected"></option><option label="#1 - Playable From Bucket" value="string:bf80b24c-8566-49d6-8c82-68ed1f192cad">#1 - Playable From Bucket</option><option label="#2 - Playable From Bucket" value="string:33d42e17-1b8d-4247-9b55-70ff5e07fb46">#2 - Playable From Bucket</option><option label="#3 - Playable From Bucket" value="string:f71279fd-f6bb-4dc6-a876-9da358e0e96f">#3 - Playable From Bucket</option><option label="AU Testing" value="string:9cd2e8e4-e30b-43da-a8d2-c75da76f8319">AU Testing</option><option label="brad test only" value="string:d3b56461-9e83-4572-a21a-3ff51a73db7e">brad test only</option><option label="brads-auto-test5" value="string:d001ae34-c3a2-47cb-bad8-a70aae224f91">brads-auto-test5</option><option label="brads-auto-test6" value="string:fa15e355-f6b4-46f6-90f0-eec0f48a925a">brads-auto-test6</option><option label="Charlie Web" value="string:5751b3d8-f9f9-4535-9ea2-7b295a7ef20e">Charlie Web</option><option label="CharlieWebEvent" value="string:fd79405e-3155-4a7b-abb7-d654095a006e">CharlieWebEvent</option><option label="Chris Web (Integration)" value="string:ea7e91ee-854e-4055-a528-82c3f875022b">Chris Web (Integration)</option><option label="EU Testing" value="string:d0ea2beb-5dd6-4de2-8a31-299de8af7dd9">EU Testing</option><option label="Freddy SA Region Test" value="string:3c59b996-7a56-49ab-888e-1be403063bac">Freddy SA Region Test</option><option label="Freddy Web" value="string:ef75e71d-ce22-4cd2-94eb-64f235eee9ec">Freddy Web</option><option label="Integration Testing" value="string:14291f27-5d5e-7334-c081-ba593eafac31">Integration Testing</option><option label="Jared Web Test" value="string:0a998934-e194-4513-ba75-e610d1ed202a">Jared Web Test</option><option label="LA1 Live Production" value="string:ac5490b2-1ef9-498c-808c-8fe219a6b11e">LA1 Live Production</option><option label="La1 test2 multi-bitrate (Not for general test)" value="string:14291f27-5d5e-7334-c081-ba593eafac33">La1 test2 multi-bitrate (Not for general test)</option><option label="Mike-Int" value="string:ad106e38-1228-4638-baad-a981122c9877">Mike-Int</option><option label="Public Web Event" value="string:2371d6e6-76f4-4c0b-b850-54a074015843">Public Web Event</option><option label="test media4" value="string:63047ae6-33ba-4c64-b858-e23da566c32c">test media4</option></select>' +
				'											</div></div>' + window.startWebEvent + window.stopWebEvent + 
				'										<div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Privacy</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_options"><option value="?" selected="selected"></option><option label="Public" value="string:public">Public</option><option label="Private" value="string:private">Private</option><option label="Unlisted" value="string:unlisted">Unlisted</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Destination</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-not-empty ng-touched" style="width: 240px;" ng-show="social_media_event_list  && !is_loading_social_event_list" ng-model="social_media_form.event_id" ng-options="item.id as item.title for item in social_media_event_list" ng-change="onDestinationChanged()"><option label="New broadcast" value="string:yt_create_new" selected="selected">New broadcast</option></select>' +
				'										</div>' +
				'<div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Publish Status</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-touched ng-empty" style="width:200px" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.publishStatus" ng-options="item.value as item.name for item in social_media_publish_options"><option value="?" selected="selected"></option><option label="Published" value="string:published">Published</option><option label="Unpublished" value="string:unpublished">Unpublished</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'											</div></div>' +
				'<div class="form-group smEmbed col-lg-1" style="display: none;">' +
				'											<div><label>Crosspost?</label></div>' +
				'' +
				'<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'<input type="checkbox" />' +
				'												</div>' +
				'											</div>' + window.startWebEvent + window.stopWebEvent +
				'<div class="form-group col-lg-1" style=""> 	<i onclick="deleteRow(this); return false;" class="fa fa-times closeButton"></i> </div>' +
				'										</div>' +
				'										</div>';

			$(myvar).appendTo('#destHolder');
		



		}

		function addDest2() {


			var myvar3 = '<div id="destList" class="col-lg-12" style="width:100%;">' +
				'											<div class="row">' +
				'												<div class="form-group col-lg-2">' +
				'											<div><label>Destination </label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select id="destinationChoice" class="form-control ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: 240px;" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="LAO" selected="selected">LAO Embed Code</option><option label="Test1" value="FACEBOOK">Facebook</option><option label="TranscodedEncoderProfileScheduleTest" value="YOUTUBE">Youtube</option></select>' +
				'											</div>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Description</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="Schedule Description" ng-model="reg_event_to_add.name" focus-on="add-reg-schedule-input">' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Social Media Account</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-model="social_media_form.account_id" ng-options="item.uuid as item.formatted_name for item in social_media_acct_list" ng-change="onSocialMediaAcctChanged()"><option value="?" selected="selected"></option><option label="[YouTube] Brad Reitmeyer" value="string:c1cfd31c-d1c5-4796-bc3e-d9624a731049">[YouTube] Brad Reitmeyer</option><option label="[YouTube] Charlie Nance" value="string:2c614df5-29c6-41eb-be9d-e3019d54b9fb">[YouTube] Charlie Nance</option><option label="[YouTube] Chris Ribble" value="string:af2a074a-4141-43bf-95aa-fcb523e50ff4">[YouTube] Chris Ribble</option><option label="[YouTube] Collin Jones Personal (Not allowed to Live Stream)" value="string:b9b6e8d9-e98d-4a5b-bedd-938de8bcda76">[YouTube] Collin Jones Personal (Not allowed to Live Stream)</option><option label="[YouTube] jared@jaredlathrop.com (No Access)" value="string:dfd8d7e7-fc48-4294-8fba-415f19876c4e">[YouTube] jared@jaredlathrop.com (No Access)</option><option label="[YouTube] Joe Duffy" value="string:c96761bb-121d-4309-a700-8d9fe490c460">[YouTube] Joe Duffy</option><option label="[YouTube] michael.schmdit@livingasone.com" value="string:d9180173-7ce9-4d19-9caf-f4d0cc8c46e2">[YouTube] michael.schmdit@livingasone.com</option><option label="[YouTube] Parker (LA1) Campus 2" value="string:1fc4ec2a-9780-412b-a411-134b33bf1ab5">[YouTube] Parker (LA1) Campus 2</option><option label="[YouTube] Parker Bain (LA1) - Primary" value="string:b0ca17be-1408-43bb-8319-16c75a52c7b9">[YouTube] Parker Bain (LA1) - Primary</option><option label="[YouTube] Travis Lemmon" value="string:7284bf20-dd1c-4cb8-a61e-dad7f295d20f">[YouTube] Travis Lemmon</option><option label="[YouTube] UseyLAO" value="string:9634d8c0-b9c2-4450-9721-bf0db133ffe4">[YouTube] UseyLAO</option><option label="[Facebook] Brad Reitmeyer" value="string:57c7b1c9-ac0f-4b07-bba5-9ef434d70af4">[Facebook] Brad Reitmeyer</option><option label="[Facebook] Chris Ribble (Work)" value="string:9b3f9f9f-5a53-4cf6-86c7-c6e34373b83e">[Facebook] Chris Ribble (Work)</option><option label="[Facebook] Donna Alchddhgfegdg Lauberg" value="string:50d3460e-dede-4d18-8f10-63f0dc6c0921">[Facebook] Donna Alchddhgfegdg Lauberg</option><option label="[Facebook] Matthew Lao" value="string:d62fa7c7-b767-4616-a777-73ae1334599b">[Facebook] Matthew Lao</option><option label="[Facebook] Trent Brown" value="string:54e6e797-5425-438e-8601-132d699b4ace">[Facebook] Trent Brown</option></select>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Web Event Profile</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width:auto" id="add-event-encoder-profile" ng-model="web_event_to_add_to_encoder_schedule.web_event_profile" ng-options="profile.uuid as profile.name for profile in transcoder_event_profile_list"><option value="?" selected="selected"></option><option label="#1 - Playable From Bucket" value="string:bf80b24c-8566-49d6-8c82-68ed1f192cad">#1 - Playable From Bucket</option><option label="#2 - Playable From Bucket" value="string:33d42e17-1b8d-4247-9b55-70ff5e07fb46">#2 - Playable From Bucket</option><option label="#3 - Playable From Bucket" value="string:f71279fd-f6bb-4dc6-a876-9da358e0e96f">#3 - Playable From Bucket</option><option label="AU Testing" value="string:9cd2e8e4-e30b-43da-a8d2-c75da76f8319">AU Testing</option><option label="brad test only" value="string:d3b56461-9e83-4572-a21a-3ff51a73db7e">brad test only</option><option label="brads-auto-test5" value="string:d001ae34-c3a2-47cb-bad8-a70aae224f91">brads-auto-test5</option><option label="brads-auto-test6" value="string:fa15e355-f6b4-46f6-90f0-eec0f48a925a">brads-auto-test6</option><option label="Charlie Web" value="string:5751b3d8-f9f9-4535-9ea2-7b295a7ef20e">Charlie Web</option><option label="CharlieWebEvent" value="string:fd79405e-3155-4a7b-abb7-d654095a006e">CharlieWebEvent</option><option label="Chris Web (Integration)" value="string:ea7e91ee-854e-4055-a528-82c3f875022b">Chris Web (Integration)</option><option label="EU Testing" value="string:d0ea2beb-5dd6-4de2-8a31-299de8af7dd9">EU Testing</option><option label="Freddy SA Region Test" value="string:3c59b996-7a56-49ab-888e-1be403063bac">Freddy SA Region Test</option><option label="Freddy Web" value="string:ef75e71d-ce22-4cd2-94eb-64f235eee9ec">Freddy Web</option><option label="Integration Testing" value="string:14291f27-5d5e-7334-c081-ba593eafac31">Integration Testing</option><option label="Jared Web Test" value="string:0a998934-e194-4513-ba75-e610d1ed202a">Jared Web Test</option><option label="LA1 Live Production" value="string:ac5490b2-1ef9-498c-808c-8fe219a6b11e">LA1 Live Production</option><option label="La1 test2 multi-bitrate (Not for general test)" value="string:14291f27-5d5e-7334-c081-ba593eafac33">La1 test2 multi-bitrate (Not for general test)</option><option label="Mike-Int" value="string:ad106e38-1228-4638-baad-a981122c9877">Mike-Int</option><option label="Public Web Event" value="string:2371d6e6-76f4-4c0b-b850-54a074015843">Public Web Event</option><option label="test media4" value="string:63047ae6-33ba-4c64-b858-e23da566c32c">test media4</option></select>' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Privacy</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_options"><option value="?" selected="selected"></option><option label="Public" value="string:public">Public</option><option label="Private" value="string:private">Private</option><option label="Unlisted" value="string:unlisted">Unlisted</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Destination</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-not-empty ng-touched" style="width: 240px;" ng-show="social_media_event_list  && !is_loading_social_event_list" ng-model="social_media_form.event_id" ng-options="item.id as item.title for item in social_media_event_list" ng-change="onDestinationChanged()"><option label="New broadcast" value="string:yt_create_new" selected="selected">New broadcast</option></select>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Publish Status</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-touched ng-empty" style="width:200px" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.publishStatus" ng-options="item.value as item.name for item in social_media_publish_options"><option value="?" selected="selected"></option><option label="Published" value="string:published">Published</option><option label="Unpublished" value="string:unpublished">Unpublished</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'											</div>' +
				'											</div><div class="form-group col-lg-2" style=""> 	<i class="fa fa-times closeButton"></i> </div>' +
				'										</div>' +
				'										</div>';

			$(myvar3).appendTo('#destHolder2');

			

		}



		function createNewDG() {
			$('body > div.wrapper > div.content-wrapper.ng-scope > section.content.ng-scope > div.row.calendar-wrapper > div:nth-child(6) > form > div > div.box-body.table-responsive > div:nth-child(3) > div:nth-child(5) > div:nth-child(2) > div > p').hide();
			
			$('#addDestButton')[0].innerText = 'Add Destination Group';

			var myvar2 = '<div class="box box-success" style="' +
				'    margin-bottom: 0px;' +
				'    /* border-top-color: #ffffff !important; */' +
				'    padding: 2px;' +
				'    border: solid #494747 1px;' +
				'    margin: 10px;' +
				'    /* margin-right: 34px; */' +
				'    min-height: 307px;' +
				'    height: auto;' +
				'    width: calc(100% - 20px);' +
				'">' +
				'									<div class="box-header with-border" style="' +
				'    background-color: #494747;' +
				'    border-radius: 4px;' +
				'">' +
				'										<h3 class="box-title" style="' +
				'    margin-top: 0px;' +
				'    color: white;' +
				'">Destination Group</h3>' +
				'										<div class="btn-group" style="' +
				'    float: right;' +
				'    width: 250px;' +
				'    margin-right: -3px;' +
				'">' +
				'											' +
				'' +
				'										</div>' +
				'									</div>' +
				'									<div id="weRow" class="row" style="margin-left: 0px;margin-top: 12px;height: auto;">' +
				'										' +
				'<div class="form-group col-lg-2" ng-class="{\'has-error\': has_error.web_event_to_add_to_encoder_schedule_web_encoder_profile}">' +
				'											<label for="add-event-encoder">Web Encoder Profile</label>' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 238px;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'										</div>' +
				'' +
				'' +
				'' +
				'										' +
				'										<div id="destHolder" class="col-lg-12" style="' +
				'    height: auto;' +
				'">' +
				'										<div id="destList" class="col-lg-12" style="width:100%;">' +
				'											<div class="row">' +
				'												<div class="form-group col-lg-2">' +
				'											<div><label>Destination </label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select id="destinationChoice" class="form-control ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: 240px;" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="LAO" selected="selected">LAO Embed Code</option><option label="Test1" value="FACEBOOK">Facebook</option><option label="TranscodedEncoderProfileScheduleTest" value="YOUTUBE">Youtube</option></select>' +
				'											</div>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Description</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-touched" placeholder="Schedule Description" ng-model="reg_event_to_add.name" focus-on="add-reg-schedule-input">' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Social Media Account</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-model="social_media_form.account_id" ng-options="item.uuid as item.formatted_name for item in social_media_acct_list" ng-change="onSocialMediaAcctChanged()"><option value="?" selected="selected"></option><option label="[YouTube] Brad Reitmeyer" value="string:c1cfd31c-d1c5-4796-bc3e-d9624a731049">[YouTube] Brad Reitmeyer</option><option label="[YouTube] Charlie Nance" value="string:2c614df5-29c6-41eb-be9d-e3019d54b9fb">[YouTube] Charlie Nance</option><option label="[YouTube] Chris Ribble" value="string:af2a074a-4141-43bf-95aa-fcb523e50ff4">[YouTube] Chris Ribble</option><option label="[YouTube] Collin Jones Personal (Not allowed to Live Stream)" value="string:b9b6e8d9-e98d-4a5b-bedd-938de8bcda76">[YouTube] Collin Jones Personal (Not allowed to Live Stream)</option><option label="[YouTube] jared@jaredlathrop.com (No Access)" value="string:dfd8d7e7-fc48-4294-8fba-415f19876c4e">[YouTube] jared@jaredlathrop.com (No Access)</option><option label="[YouTube] Joe Duffy" value="string:c96761bb-121d-4309-a700-8d9fe490c460">[YouTube] Joe Duffy</option><option label="[YouTube] michael.schmdit@livingasone.com" value="string:d9180173-7ce9-4d19-9caf-f4d0cc8c46e2">[YouTube] michael.schmdit@livingasone.com</option><option label="[YouTube] Parker (LA1) Campus 2" value="string:1fc4ec2a-9780-412b-a411-134b33bf1ab5">[YouTube] Parker (LA1) Campus 2</option><option label="[YouTube] Parker Bain (LA1) - Primary" value="string:b0ca17be-1408-43bb-8319-16c75a52c7b9">[YouTube] Parker Bain (LA1) - Primary</option><option label="[YouTube] Travis Lemmon" value="string:7284bf20-dd1c-4cb8-a61e-dad7f295d20f">[YouTube] Travis Lemmon</option><option label="[YouTube] UseyLAO" value="string:9634d8c0-b9c2-4450-9721-bf0db133ffe4">[YouTube] UseyLAO</option><option label="[Facebook] Brad Reitmeyer" value="string:57c7b1c9-ac0f-4b07-bba5-9ef434d70af4">[Facebook] Brad Reitmeyer</option><option label="[Facebook] Chris Ribble (Work)" value="string:9b3f9f9f-5a53-4cf6-86c7-c6e34373b83e">[Facebook] Chris Ribble (Work)</option><option label="[Facebook] Donna Alchddhgfegdg Lauberg" value="string:50d3460e-dede-4d18-8f10-63f0dc6c0921">[Facebook] Donna Alchddhgfegdg Lauberg</option><option label="[Facebook] Matthew Lao" value="string:d62fa7c7-b767-4616-a777-73ae1334599b">[Facebook] Matthew Lao</option><option label="[Facebook] Trent Brown" value="string:54e6e797-5425-438e-8601-132d699b4ace">[Facebook] Trent Brown</option></select>' +
				'										</div><div class="form-group laoEmbed col-lg-2" style="display: block;">' +
				'											<div><label>Web Event Profile</label></div>' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width:auto" id="add-event-encoder-profile" ng-model="web_event_to_add_to_encoder_schedule.web_event_profile" ng-options="profile.uuid as profile.name for profile in transcoder_event_profile_list"><option value="?" selected="selected"></option><option label="#1 - Playable From Bucket" value="string:bf80b24c-8566-49d6-8c82-68ed1f192cad">#1 - Playable From Bucket</option><option label="#2 - Playable From Bucket" value="string:33d42e17-1b8d-4247-9b55-70ff5e07fb46">#2 - Playable From Bucket</option><option label="#3 - Playable From Bucket" value="string:f71279fd-f6bb-4dc6-a876-9da358e0e96f">#3 - Playable From Bucket</option><option label="AU Testing" value="string:9cd2e8e4-e30b-43da-a8d2-c75da76f8319">AU Testing</option><option label="brad test only" value="string:d3b56461-9e83-4572-a21a-3ff51a73db7e">brad test only</option><option label="brads-auto-test5" value="string:d001ae34-c3a2-47cb-bad8-a70aae224f91">brads-auto-test5</option><option label="brads-auto-test6" value="string:fa15e355-f6b4-46f6-90f0-eec0f48a925a">brads-auto-test6</option><option label="Charlie Web" value="string:5751b3d8-f9f9-4535-9ea2-7b295a7ef20e">Charlie Web</option><option label="CharlieWebEvent" value="string:fd79405e-3155-4a7b-abb7-d654095a006e">CharlieWebEvent</option><option label="Chris Web (Integration)" value="string:ea7e91ee-854e-4055-a528-82c3f875022b">Chris Web (Integration)</option><option label="EU Testing" value="string:d0ea2beb-5dd6-4de2-8a31-299de8af7dd9">EU Testing</option><option label="Freddy SA Region Test" value="string:3c59b996-7a56-49ab-888e-1be403063bac">Freddy SA Region Test</option><option label="Freddy Web" value="string:ef75e71d-ce22-4cd2-94eb-64f235eee9ec">Freddy Web</option><option label="Integration Testing" value="string:14291f27-5d5e-7334-c081-ba593eafac31">Integration Testing</option><option label="Jared Web Test" value="string:0a998934-e194-4513-ba75-e610d1ed202a">Jared Web Test</option><option label="LA1 Live Production" value="string:ac5490b2-1ef9-498c-808c-8fe219a6b11e">LA1 Live Production</option><option label="La1 test2 multi-bitrate (Not for general test)" value="string:14291f27-5d5e-7334-c081-ba593eafac33">La1 test2 multi-bitrate (Not for general test)</option><option label="Mike-Int" value="string:ad106e38-1228-4638-baad-a981122c9877">Mike-Int</option><option label="Public Web Event" value="string:2371d6e6-76f4-4c0b-b850-54a074015843">Public Web Event</option><option label="test media4" value="string:63047ae6-33ba-4c64-b858-e23da566c32c">test media4</option></select>' +
				'											</div></div>' +  
				'										   <div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Privacy</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-empty ng-touched" style="width: 240px;" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_options"><option value="?" selected="selected"></option><option label="Public" value="string:public">Public</option><option label="Private" value="string:private">Private</option><option label="Unlisted" value="string:unlisted">Unlisted</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +
				'											</div>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Destination</label></div>' +
				'' +
				'											' +
				'											<select class="form-control ng-pristine ng-valid ng-not-empty ng-touched" style="width: 240px;" ng-show="social_media_event_list  && !is_loading_social_event_list" ng-model="social_media_form.event_id" ng-options="item.id as item.title for item in social_media_event_list" ng-change="onDestinationChanged()"><option label="New broadcast" value="string:yt_create_new" selected="selected">New broadcast</option></select>' +
				'										</div><div class="form-group smEmbed col-lg-2" style="display: none;">' +
				'											<div><label>Publish Status</label></div>' +
				'' +
				'											<select class="form-control ng-pristine ng-valid ng-touched ng-empty" style="width:200px;" ng-hide="social_media_form.event_id == null" ng-model="social_media_form.publishStatus" ng-options="item.value as item.name for item in social_media_publish_options"><option value="?" selected="selected"></option><option label="Published" value="string:published">Published</option><option label="Unpublished" value="string:unpublished">Unpublished</option></select>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'												<select class="form-control laoEmbed ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse" style="width: auto; display: inline-block;" id="add-event-encoder" ng-model="web_event_to_add_to_encoder_schedule.web_encoder_profile" ng-options="encoder.uuid as encoder.name for encoder in web_encoder_profile_list"><option label="Default" value="object:null" selected="selected">Default</option><option label="3+4" value="string:d2ecd380-600e-493a-95de-0ac3942418b5">3+4</option><option label="Default but different" value="string:4d925686-fd51-4812-894b-a2e96f7bbec0">Default but different</option><option label="Deinterlace" value="string:f40c8d4b-e7de-48fe-ae83-c65432a60a64">Deinterlace</option><option label="L1 R2" value="string:d4e87496-0d60-4d4e-b0e4-73d4b100d80e">L1 R2</option><option label="L5 R6" value="string:87be1998-cc2c-447c-b202-e0a09a0c0624">L5 R6</option><option label="Mono Test" value="string:7d3c07bf-eca2-4b2c-b285-a7a054453b44">Mono Test</option><option label="Test1" value="string:5dcebe46-21c1-49f9-b318-8081d14394e5">Test1</option><option label="TranscodedEncoderProfileScheduleTest" value="string:14391f27-5d5e-7334-c081-ba593eafac31">TranscodedEncoderProfileScheduleTest</option></select>' +

				'										</div></div>' +
				'<div class="form-group smEmbed col-lg-1" style="display: none;">' +
				'											<div><label>Crosspost?</label></div>' +
				'' +
				'<div ng-show="hasRegisteredSocialMediaAccts()" class="">' +
				'												' +
				'<input class="cpAction" type="checkbox" />' +
				'												</div></div>' + window.startWebEvent + window.stopWebEvent +
				'<div class="cpOptions col-lg-12" style="display:none;"><div class=\"col-lg-4\" style=\"\r\n    \/* height: 196px; *\/\r\n\">\r\n                          \r\n                        \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" style=\"\r\n    \/* display: none; *\/\r\n\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n                          <input type=\"checkbox\" style=\"\r\n    padding: 10px;\r\n    width: 14px;\r\n\">\r\n                        <\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span type=\"text\" class=\"form-control\" style=\"\r\n  background-color: #f1f1f1;  border: none;\r\n\">Living As One Test Page\r\n<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" style=\"\r\n    \/* display: none; *\/\r\n\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n                          <input type=\"checkbox\" style=\"\r\n    padding: 10px;\r\n    width: 14px;\r\n\">\r\n                        <\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span type=\"text\" class=\"form-control\" style="background-color: #f1f1f1;">Pastor Personal Page\r\n<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" style=\"\r\n    \/* display: none; *\/\r\n\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n                          <input type=\"checkbox\" style=\"\r\n    padding: 10px;\r\n    width: 14px;\r\n\">\r\n                        <\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span type=\"text\" style="background-color: #f1f1f1;" class=\"form-control\">Worship Group Page\r\n<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" style=\"\r\n    \/* display: none; *\/\r\n\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n                          <input type=\"checkbox\" style=\"\r\n    padding: 10px;\r\n    width: 14px;\r\n\">\r\n                        <\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span type=\"text\" style="background-color: #f1f1f1;" class=\"form-control\">XYZ Ministry Page\r\n<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t<\/div></div>' +
				'										</div>' +
				'' +
				'											</div>' +
				'										</div>' +
				'' +
				'' +
				'' +
				'' +
				'' +
				'' +
				'										' +
				'										' +
				'										' +
				'										' +
				'										' +
				'										<div class="form-group col-lg-9" style="' +
				'    margin-left: 0px;' +
				'">' +
				'											' +
				'' +
				'											<p ng-hide="hasRegisteredSocialMediaAccts()" class="text-muted no-social-media-destinations ng-hide">In order to stream to social media, you will first need to add a social media account. This can be done from the "Social Media" menu.</p>' +
				'											<div ng-show="hasRegisteredSocialMediaAccts()" class="" style="' +
				'    margin-top: 10px;' +
				'">' +
				'												' +
				'												<table class="table align-middle social-media-destinations ng-hide" ng-show="web_event_to_add_to_encoder_schedule.simulcasts != null || web_event_to_add_to_encoder_schedule.simulcasts.length > 0">' +
				'													<tbody><!-- ngRepeat: entry in web_event_to_add_to_encoder_schedule.simulcasts -->' +
				'												</tbody></table>' +
				'' +
				'<div style=\"display: inline-block;vertical-align:bottom;padding-bottom:8px;\" ng-show=\"canShowAddSocialMediaDestinationBtn(web_event_to_add_to_encoder_schedule.simulcasts)\">													<button style=\"margin-left: 0px;margin-bottom: 13px;\" onclick=\"addDest(); return false;\" class=\"btn btn-default dropdown-toggle\" aria-expanded=\"true\"><i class=\"fa fa-plus\" style=\"    margin-right: 10px;\"></i>Add Destination</button><br><div class=\"btn-group\" style=\"    float: right;    display: inline-block;    width: 250px;    margin-right: -3px;    margin-left: 16px;\">												</div><button type=\"button\" class=\"btn btn-primary\" ng-click=\"AddOrUpdateEncoderScheduleWebEvent()\">Save Destination Group</button>																					<button onclick=\"removeDest(); return false;\" class=\"btn btn-default\" style=\"width: 140px;color: white;display: inline-block;margin-left: 0px;background-color: #ad2424 !important;\"><i class=\"fa fa-times\" style=\"    margin-right: 10px;\"></i>Remove Group</button></div>'+
				'											</div>' +
				'										</div></div>' +
				'										' +
				'						' +
				'									' +
				'									' +
				'' +
				'	' +
				'' +
				'' +
				'' +
				'' +
				'' +
				'<div id="smRow" class="row" style="margin-left: 0px; margin-top: 12px; height: 264px; display: none;">' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_account}">' +
				'											<label style="display:block;">Account</label>' +
				'											<select class="form-control ng-valid ng-touched ng-dirty ng-not-empty ng-valid-parse" style="width: 177px;" ng-model="social_media_form.account_id" ng-options="item.uuid as item.formatted_name for item in social_media_acct_list" ng-change="onSocialMediaAcctChanged()">' +
				'												<option label="[YouTube] Brad Reitmeyer" value="string:c1cfd31c-d1c5-4796-bc3e-d9624a731049">[YouTube] Brad Reitmeyer</option>' +
				'												<option label="[YouTube] Charlie Nance" value="string:2c614df5-29c6-41eb-be9d-e3019d54b9fb">[YouTube] Charlie Nance</option>' +
				'												<option label="[YouTube] Chris Ribble" value="string:af2a074a-4141-43bf-95aa-fcb523e50ff4">[YouTube] Chris Ribble</option>' +
				'												<option label="[YouTube] Collin Jones Personal (Not allowed to Live Stream)" value="string:b9b6e8d9-e98d-4a5b-bedd-938de8bcda76">[YouTube] Collin Jones Personal (Not allowed to Live Stream)</option>' +
				'												<option label="[YouTube] jared@jaredlathrop.com (No Access)" value="string:dfd8d7e7-fc48-4294-8fba-415f19876c4e">[YouTube] jared@jaredlathrop.com (No Access)</option>' +
				'												<option label="[YouTube] Joe Duffy" value="string:c96761bb-121d-4309-a700-8d9fe490c460">[YouTube] Joe Duffy</option>' +
				'												<option label="[YouTube] michael.schmdit@livingasone.com" value="string:d9180173-7ce9-4d19-9caf-f4d0cc8c46e2">[YouTube] michael.schmdit@livingasone.com</option>' +
				'												<option label="[YouTube] Parker (LA1) Campus 2" value="string:1fc4ec2a-9780-412b-a411-134b33bf1ab5">[YouTube] Parker (LA1) Campus 2</option>' +
				'												<option label="[YouTube] Parker Bain (LA1) - Primary" value="string:b0ca17be-1408-43bb-8319-16c75a52c7b9">[YouTube] Parker Bain (LA1) - Primary</option>' +
				'												<option label="[YouTube] Paul Martel (Personal)" value="string:d04a287a-c0bb-4fbe-b881-e131560506ed">[YouTube] Paul Martel (Personal)</option>' +
				'												<option label="[YouTube] Travis Lemmon" value="string:7284bf20-dd1c-4cb8-a61e-dad7f295d20f">[YouTube] Travis Lemmon</option>' +
				'												<option label="[YouTube] UseyLAO" value="string:9634d8c0-b9c2-4450-9721-bf0db133ffe4">[YouTube] UseyLAO</option>' +
				'												<option label="[Facebook] Brad Reitmeyer" value="string:45812a65-9d37-4000-864f-3ceb2dbb2030">[Facebook] Brad Reitmeyer</option>' +
				'												<option label="[Facebook] Chris Ribble (Work)" value="string:9b3f9f9f-5a53-4cf6-86c7-c6e34373b83e">[Facebook] Chris Ribble (Work)</option>' +
				'												<option label="[Facebook] Donna Alchddhgfegdg Lauberg" value="string:1d3bb2ba-ed0b-4ec3-ab71-2ad80e82c88b">[Facebook] Donna Alchddhgfegdg Lauberg</option>' +
				'												<option label="[Facebook] Jared - Facebook (No Access)" value="string:6e34df43-d2ef-4664-b679-f810c663ec4c">[Facebook] Jared - Facebook (No Access)</option>' +
				'												<option label="[Facebook] Matthew Lao" value="string:972151bc-dab6-47fd-97e0-fc388e94f261">[Facebook] Matthew Lao</option>' +
				'											</select>' +
				'' +
				'										</div>' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_event}">' +
				'											<label style="display:block;">Destination</label>' +
				'											<p ng-show="social_media_event_list_error" style="position:relative;top:5px;" class="ng-hide"><span class="label label-danger" style="padding:4px 7px;">Unable to load events.</span>' +
				'												<button type="button" class="btn btn-default btn-xs" ng-click="onSocialMediaAcctChanged()">Retry</button>' +
				'											</p>' +
				'											<div ng-hide="social_media_event_list_error">' +
				'												<p ng-show="social_media_event_list == null && !is_loading_social_event_list" style="position:relative;top:7px" class="ng-hide">Select an Account</p>' +
				'												<p ng-show="is_loading_social_event_list" style="position:relative;top:7px" class="ng-hide">Loading ...</p>' +
				'												<select class="form-control ng-pristine ng-valid ng-touched ng-not-empty" style="width:auto" ng-show="social_media_event_list  && !is_loading_social_event_list" ng-model="social_media_form.event_id" ng-options="item.id as item.title for item in social_media_event_list">' +
				'													<option label="New broadcast" value="string:yt_create_new" selected="selected">New broadcast</option>' +
				'												</select>' +
				'											</div>' +
				'										</div>' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_privacy}">' +
				'											<label style="display:block;">Privacy</label>' +
				'											<select class="form-control ng-pristine ng-valid ng-not-empty ng-touched" style="width:auto" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_list">' +
				'												<option label="Public" value="string:public">Public</option>' +
				'												<option label="Unlisted" value="string:unlisted" selected="selected">Unlisted</option>' +
				'												<option label="Private" value="string:private">Private</option>' +
				'											</select>' +
				'										</div>' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_privacy}">' +
				'											<label style="display:block;">Publish State</label>' +
				'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_list">' +
				'												<option label="Live Now" value="string:public">Live Now</option>' +
				'												<option label="Preview" value="string:unlisted" selected="selected">Preview</option>' +
				'											</select>' +
				'										</div>' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_privacy}">' +
				'											<label style="display:block;">Start Position</label>' +
				'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width: 165px;" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_list">' +
				'												<option label="Start of Event" value="string:public">Start of Event</option>' +
				'												<option label="Predefined Start Cue" value="string:unlisted" selected="selected">Predefined Start Cue</option>' +
				'												<option label="Web Event Player Current Position" value="string:unlisted" selected="selected">Web Event Player Current Position</option>' +
				'												<option label="Web Event Player Current Position" value="string:unlisted" selected="selected">An Existing Cue</option>' +
				'											</select>' +
				'										</div>' +
				'										<div class="form-group col-lg-2" ng-class="{\'has-error\': dlg_has_error.social_media_privacy}">' +
				'											<label style="display:block;">End Position</label>' +
				'' +
				'' +
				'											<select class="form-control ng-pristine ng-untouched ng-valid ng-not-empty" style="width:auto" ng-model="social_media_form.privacy" ng-options="item.value as item.name for item in social_media_privacy_list">' +
				'												<option label="End of Event" value="string:public">End of Event</option>' +
				'												<option label="Predefined Stop Cue" value="string:unlisted" selected="selected">Predefined Stop Cue</option>' +
				'											</select>' +
				'										</div>' +
				'										<div class="col-lg-4" style="' +
				'    /* height: 196px; */' +
				'">' +
				'											<label>Crosspost Destinations<span class="input-group-addon" style="' +
				'    width: 36px;' +
				'    display: inline-block;' +
				'    margin-left: 0px;' +
				'    background-color: white;' +
				'    border: none;' +
				'">' +
				'                          <input type="checkbox" style="' +
				'    padding: 10px;' +
				'    width: 22px;' +
				'">' +
				'                        </span></label>' +
				'											<div class="input-group" style="' +
				'    /* display: none; */' +
				'">' +
				'												<span class="input-group-addon">' +
				'                          <input type="checkbox" style="' +
				'    padding: 10px;' +
				'    width: 14px;' +
				'">' +
				'                        </span>' +
				'												<span type="text" class="form-control" style="' +
				'    border: none;' +
				'">Living As One Test Page' +
				'</span>' +
				'											</div>' +
				'											<div class="input-group" style="' +
				'    /* display: none; */' +
				'">' +
				'												<span class="input-group-addon">' +
				'                          <input type="checkbox" style="' +
				'    padding: 10px;' +
				'    width: 14px;' +
				'">' +
				'                        </span>' +
				'												<span type="text" class="form-control">Pastor Personal Page' +
				'</span>' +
				'											</div>' +
				'											<div class="input-group" style="' +
				'    /* display: none; */' +
				'">' +
				'												<span class="input-group-addon">' +
				'                          <input type="checkbox" style="' +
				'    padding: 10px;' +
				'    width: 14px;' +
				'">' +
				'                        </span>' +
				'												<span type="text" class="form-control">Worship Group Page' +
				'</span>' +
				'											</div>' +
				'											<div class="input-group" style="' +
				'    /* display: none; */' +
				'">' +
				'												<span class="input-group-addon">' +
				'                          <input type="checkbox" style="' +
				'    padding: 10px;' +
				'    width: 14px;' +
				'">' +
				'                        </span>' +
				'												<span type="text" class="form-control">XYZ Ministry Page' +
				'</span>' +
				'											</div>' +
				'										</div><span style="' +
				'    float: right;' +
				'    width: 85px;' +
				'    background-color: #00a65a;' +
				'    color: white;' +
				'    text-align: center;' +
				'    padding: 9px;' +
				'    border-radius: 3px;' +
				'    padding-top: 4px;' +
				'    margin-right: 24px;' +
				'    padding-bottom: 4px;' +
				'    margin-top: 141px;' +
				'    margin-bottom: 11px;' +
				'">Save</span></div>' +
				'' +
				'								</div>';







			$(myvar2).insertBefore('body > div.wrapper > div.content-wrapper.ng-scope > section.content.ng-scope > div.row.calendar-wrapper > div:nth-child(6) > form > div > div.box-body.table-responsive > div:nth-child(3) > div:nth-child(5) > div:nth-child(2) > div');


			initOnChange();
			initCP();
		}


		// function deleteRow(this){

		// 	$(this.this).closest('.destList').hide();

		// }
		function removeDest() {
			console.log('hide it..')

		}

		function initCP() {
			$('.cpAction').change(function() {
				if ($('.cpAction')[0].value == "on") {
					$('.cpOptions').show();

				} else {
					$('.cpOptions').hide();
				}

			});
		}
	</script>
	
	  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

  
  <script>
const lineAtMessageStart = {
  getLinePosition: function (chart, pointIndex) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[pointIndex]._model.x;
  },
  renderVerticalLine: function (chartInstance, pointIndex) {
      const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
      const scale = chartInstance.scales['y-axis-0'];
      const context = chartInstance.chart.ctx;

      // render vertical line
      context.beginPath();
      context.strokeStyle = '#01a559';
      context.moveTo(lineLeftOffset, scale.top);
      context.lineTo(lineLeftOffset, scale.bottom);
      context.stroke();

      // write label
      context.fillStyle = "#000";
      context.textAlign = 'center';

      context.fillText('Message Start Cue', lineLeftOffset, (scale.bottom - scale.top) + scale.top + 20);
  },

  afterDatasetsDraw: function (chart, easing) {
      if (chart.config.lineAtMessageStart) {
          chart.config.lineAtMessageStart.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
      }
  }
  };

  Chart.plugins.register(lineAtMessageStart);
  
   
const lineAtServiceStart = {
  getLinePosition: function (chart, pointIndex) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[pointIndex]._model.x;
  },
  renderVerticalLine: function (chartInstance, pointIndex) {
      const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
      const scale = chartInstance.scales['y-axis-0'];
      const context = chartInstance.chart.ctx;

      // render vertical line
      context.beginPath();
      context.strokeStyle = '#01a559';
      context.moveTo(lineLeftOffset, scale.top);
      context.lineTo(lineLeftOffset, scale.bottom);
      context.stroke();

      // write label
      context.fillStyle = "#000";
      context.textAlign = 'center';

      context.fillText('Service Start Cue', lineLeftOffset, (scale.bottom - scale.top) + scale.top + 20);
  },

  afterDatasetsDraw: function (chart, easing) {
      if (chart.config.lineAtServiceStart) {
          chart.config.lineAtServiceStart.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
      }
  }
  };

  Chart.plugins.register(lineAtServiceStart);
  
    
const lineAtMessageEnd = {
  getLinePosition: function (chart, pointIndex) {
      const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
      const data = meta.data;
      return data[pointIndex]._model.x;
  },
  renderVerticalLine: function (chartInstance, pointIndex) {
      const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
      const scale = chartInstance.scales['y-axis-0'];
      const context = chartInstance.chart.ctx;

      // render vertical line
      context.beginPath();
      context.strokeStyle = '#01a559';
      context.moveTo(lineLeftOffset, scale.top);
      context.lineTo(lineLeftOffset, scale.bottom);
      context.stroke();

      // write label
      context.fillStyle = "#000";
      context.textAlign = 'center';

      context.fillText('Message End Cue', lineLeftOffset, (scale.bottom - scale.top) + scale.top + 20);
  },

  afterDatasetsDraw: function (chart, easing) {
      if (chart.config.lineAtMessageEnd) {
          chart.config.lineAtMessageEnd.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
      }
  }
  };

  Chart.plugins.register(lineAtMessageEnd); 
          
    
            var ctx = document.getElementById('bestGraphEver').getContext('2d');
            var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                datasets: [
        
                {
                    data: [6,9,15,25,37,72,99,120,125,129,130,131,129,127,127,122,72,50,20,15],
                    label: "View Time Duration",
                    borderColor: '#00a65a',
                    fill: true,
                    backgroundColor: '#00a65a87',
                    borderColor: '#00a65a',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#00a65a',
                    pointRadius: 10,
                    pointHoverRadius: 12,
                }, 
    
                ]
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'View Time Duration'
                },
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        fontSize: 11,
                        fontColor: '#A9ABAC',
                    }
                },
                scales: {
                    xAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(153, 153, 153, 0.1)",
                        },
                        scaleLabel: {
                            display: true,
                        },
                        ticks: {
                            fontSize: 9,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                        }
                    }],
                    yAxes: [{
                        display: true,
                        //stacked: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 9,
                            fontColor: '#999',
                            autoSkip: true,
                            maxTicksLimit: 6,
                        }
                    }],
                },
                tooltips: {
                    backgroundColor: "rgba(68, 79, 96,0.7)",
                    xPadding: 10,
                    yPadding: 15,
                    cornerRadius: 4,
                    borderColor: "rgba(68, 79, 96,0.7)",
                    caretSize: 4,
                },
            },
            lineAtServiceStart: [5],
            lineAtMessageStart: [10],
            lineAtMessageEnd: [15],
        });
    
    
  
    
    </script>






<style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
      #floating-panel {
        background-color: #fff;
        border: 1px solid #999;
        left: 25%;
        padding: 5px;
        position: absolute;
        top: 10px;
        z-index: 5;
      }
    </style>

  
    <script>

      var map, heatmap;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
//           styles: [
//   {
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#f5f5f5"
//       }
//     ]
//   },
//   {
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#dcd0e6"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#704b8d"
//       }
//     ]
//   },
//   {
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "color": "#251a2f"
//       },
//       {
//         "weight": 0.5
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#bdbdbd"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape.natural.terrain",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#4fc8c1"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#757575"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#9ee4f5"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#ffffff"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#b9ecf9"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#865ba8"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#dadada"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#a282bc"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#79529a"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#fcdcd6"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#79529a"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.line",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e5e5e5"
//       }
//     ]
//   },
//   {
//     "featureType": "transit.station",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#eeeeee"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c9c9c9"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//       {
//         "color": "#9e9e9e"
//       }
//     ]
//   }
// ],
          center: {lat: 37.775, lng: -122.434},
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }


      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      function getPoints() {
        return [
          new google.maps.LatLng(37.782551, -122.445368),
          new google.maps.LatLng(37.782745, -122.444586),
          new google.maps.LatLng(37.782842, -122.443688),
          new google.maps.LatLng(37.782919, -122.442815),
          new google.maps.LatLng(37.782992, -122.442112),
          new google.maps.LatLng(37.783100, -122.441461),
          new google.maps.LatLng(37.783206, -122.440829),
          new google.maps.LatLng(37.783273, -122.440324),
          new google.maps.LatLng(37.783316, -122.440023),
          new google.maps.LatLng(37.783357, -122.439794),
          new google.maps.LatLng(37.783371, -122.439687),
          new google.maps.LatLng(37.783368, -122.439666),
          new google.maps.LatLng(37.783383, -122.439594),
          new google.maps.LatLng(37.783508, -122.439525),
          new google.maps.LatLng(37.783842, -122.439591),
          new google.maps.LatLng(37.784147, -122.439668),
          new google.maps.LatLng(37.784206, -122.439686),
          new google.maps.LatLng(37.784386, -122.439790),
          new google.maps.LatLng(37.784701, -122.439902),
          new google.maps.LatLng(37.784965, -122.439938),
          new google.maps.LatLng(37.785010, -122.439947),
          new google.maps.LatLng(37.785360, -122.439952),
          new google.maps.LatLng(37.785715, -122.440030),
          new google.maps.LatLng(37.786117, -122.440119),
          new google.maps.LatLng(37.786564, -122.440209),
          new google.maps.LatLng(37.786905, -122.440270),
          new google.maps.LatLng(37.786956, -122.440279),
          new google.maps.LatLng(37.800224, -122.433520),
          new google.maps.LatLng(37.800155, -122.434101),
          new google.maps.LatLng(37.800160, -122.434430),
          new google.maps.LatLng(37.800378, -122.434527),
          new google.maps.LatLng(37.800738, -122.434598),
          new google.maps.LatLng(37.800938, -122.434650),
          new google.maps.LatLng(37.801024, -122.434889),
          new google.maps.LatLng(37.800955, -122.435392),
          new google.maps.LatLng(37.800886, -122.435959),
          new google.maps.LatLng(37.800811, -122.436275),
          new google.maps.LatLng(37.800788, -122.436299),
          new google.maps.LatLng(37.800719, -122.436302),
          new google.maps.LatLng(37.800702, -122.436298),
          new google.maps.LatLng(37.800661, -122.436273),
          new google.maps.LatLng(37.800395, -122.436172),
          new google.maps.LatLng(37.800228, -122.436116),
          new google.maps.LatLng(37.800169, -122.436130),
          new google.maps.LatLng(37.800066, -122.436167),
          new google.maps.LatLng(37.784345, -122.422922),
          new google.maps.LatLng(37.784389, -122.422926),
          new google.maps.LatLng(37.784437, -122.422924),
          new google.maps.LatLng(37.784746, -122.422818),
          new google.maps.LatLng(37.785436, -122.422959),
          new google.maps.LatLng(37.786120, -122.423112),
          new google.maps.LatLng(37.786433, -122.423029),
          new google.maps.LatLng(37.786631, -122.421213),
          new google.maps.LatLng(37.786660, -122.421033),
          new google.maps.LatLng(37.786801, -122.420141),
          new google.maps.LatLng(37.786823, -122.420034),
          new google.maps.LatLng(37.786831, -122.419916),
          new google.maps.LatLng(37.787034, -122.418208),
          new google.maps.LatLng(37.787056, -122.418034),
          new google.maps.LatLng(37.787169, -122.417145),
          new google.maps.LatLng(37.787217, -122.416715),
          new google.maps.LatLng(37.786144, -122.416403),
          new google.maps.LatLng(37.785292, -122.416257),
          new google.maps.LatLng(37.780666, -122.390374),
          new google.maps.LatLng(37.780501, -122.391281),
          new google.maps.LatLng(37.780148, -122.392052),
          new google.maps.LatLng(37.780173, -122.391148),
          new google.maps.LatLng(37.780693, -122.390592),
          new google.maps.LatLng(37.781261, -122.391142),
          new google.maps.LatLng(37.781808, -122.391730),
          new google.maps.LatLng(37.782340, -122.392341),
          new google.maps.LatLng(37.782812, -122.393022),
          new google.maps.LatLng(37.783300, -122.393672),
          new google.maps.LatLng(37.783809, -122.394275),
          new google.maps.LatLng(37.784246, -122.394979),
          new google.maps.LatLng(37.784791, -122.395958),
          new google.maps.LatLng(37.785675, -122.396746),
          new google.maps.LatLng(37.786262, -122.395780),
          new google.maps.LatLng(37.786776, -122.395093),
          new google.maps.LatLng(37.787282, -122.394426),
          new google.maps.LatLng(37.787783, -122.393767),
          new google.maps.LatLng(37.788343, -122.393184),
          new google.maps.LatLng(37.788895, -122.392506),
          new google.maps.LatLng(37.789371, -122.391701),
          new google.maps.LatLng(37.789722, -122.390952),
          new google.maps.LatLng(37.790315, -122.390305),
          new google.maps.LatLng(37.790738, -122.389616),
          new google.maps.LatLng(37.779448, -122.438702),
          new google.maps.LatLng(37.779023, -122.438585),
          new google.maps.LatLng(37.778542, -122.438492),
          new google.maps.LatLng(37.778100, -122.438411),
          new google.maps.LatLng(37.777986, -122.438376),
          new google.maps.LatLng(37.777680, -122.438313),
          new google.maps.LatLng(37.777316, -122.438273),
          new google.maps.LatLng(37.777135, -122.438254),
          new google.maps.LatLng(37.776987, -122.438303),
          new google.maps.LatLng(37.776946, -122.438404),
          new google.maps.LatLng(37.776944, -122.438467),
          new google.maps.LatLng(37.776892, -122.438459),
          new google.maps.LatLng(37.776842, -122.438442),
          new google.maps.LatLng(37.776822, -122.438391),
          new google.maps.LatLng(37.776814, -122.438412),
          new google.maps.LatLng(37.776787, -122.438628),
          new google.maps.LatLng(37.776729, -122.438650),
          new google.maps.LatLng(37.776759, -122.438677),
          new google.maps.LatLng(37.776772, -122.438498),
          new google.maps.LatLng(37.776787, -122.438389),
          new google.maps.LatLng(37.776848, -122.438283),
          new google.maps.LatLng(37.776870, -122.438239),
          new google.maps.LatLng(37.777015, -122.438198),
          new google.maps.LatLng(37.777333, -122.438256),
          new google.maps.LatLng(37.777595, -122.438308),
          new google.maps.LatLng(37.777797, -122.438344),
          new google.maps.LatLng(37.778160, -122.438442),
          new google.maps.LatLng(37.778414, -122.438508),
          new google.maps.LatLng(37.778445, -122.438516),
          new google.maps.LatLng(37.778503, -122.438529),
          new google.maps.LatLng(37.778607, -122.438549),
          new google.maps.LatLng(37.778670, -122.438644),
          new google.maps.LatLng(37.778847, -122.438706),
          new google.maps.LatLng(37.779240, -122.438744),
          new google.maps.LatLng(37.779738, -122.438822),
          new google.maps.LatLng(37.780201, -122.438882),
          new google.maps.LatLng(37.780400, -122.438905),
          new google.maps.LatLng(37.780501, -122.438921),
          new google.maps.LatLng(37.780892, -122.438986),
          new google.maps.LatLng(37.781446, -122.439087),
          new google.maps.LatLng(37.781985, -122.439199),
          new google.maps.LatLng(37.782239, -122.439249),
          new google.maps.LatLng(37.782286, -122.439266),
          new google.maps.LatLng(37.797847, -122.429388),
          new google.maps.LatLng(37.797874, -122.429180),
          new google.maps.LatLng(37.797885, -122.429069),
          new google.maps.LatLng(37.797887, -122.429050),
          new google.maps.LatLng(37.797933, -122.428954),
          new google.maps.LatLng(37.798242, -122.428990),
          new google.maps.LatLng(37.798617, -122.429075),
          new google.maps.LatLng(37.798719, -122.429092),
          new google.maps.LatLng(37.798944, -122.429145),
          new google.maps.LatLng(37.799320, -122.429251),
          new google.maps.LatLng(37.799590, -122.429309),
          new google.maps.LatLng(37.799677, -122.429324),
          new google.maps.LatLng(37.799966, -122.429360),
          new google.maps.LatLng(37.800288, -122.429430),
          new google.maps.LatLng(37.800443, -122.429461),
          new google.maps.LatLng(37.800465, -122.429474),
          new google.maps.LatLng(37.800644, -122.429540),
          new google.maps.LatLng(37.800948, -122.429620),
          new google.maps.LatLng(37.801242, -122.429685),
          new google.maps.LatLng(37.801375, -122.429702),
          new google.maps.LatLng(37.801400, -122.429703),
          new google.maps.LatLng(37.801453, -122.429707),
          new google.maps.LatLng(37.801473, -122.429709),
          new google.maps.LatLng(37.801532, -122.429707),
          new google.maps.LatLng(37.801852, -122.429729),
          new google.maps.LatLng(37.802173, -122.429789),
          new google.maps.LatLng(37.802459, -122.429847),
          new google.maps.LatLng(37.802554, -122.429825),
          new google.maps.LatLng(37.802647, -122.429549),
          new google.maps.LatLng(37.802693, -122.429179),
          new google.maps.LatLng(37.802729, -122.428751),
          new google.maps.LatLng(37.766104, -122.409291),
          new google.maps.LatLng(37.766103, -122.409268),
          new google.maps.LatLng(37.766138, -122.409229),
          new google.maps.LatLng(37.766183, -122.409231),
          new google.maps.LatLng(37.766153, -122.409276),
          new google.maps.LatLng(37.766005, -122.409365),
          new google.maps.LatLng(37.765897, -122.409570),
          new google.maps.LatLng(37.765767, -122.409739),
          new google.maps.LatLng(37.765693, -122.410389),
          new google.maps.LatLng(37.765615, -122.411201),
          new google.maps.LatLng(37.765533, -122.412121),
          new google.maps.LatLng(37.765467, -122.412939),
          new google.maps.LatLng(37.765444, -122.414821),
          new google.maps.LatLng(37.765444, -122.414964),
          new google.maps.LatLng(37.765318, -122.415424),
          new google.maps.LatLng(37.763961, -122.415296),
          new google.maps.LatLng(37.763115, -122.415196),
          new google.maps.LatLng(37.762967, -122.415183),
          new google.maps.LatLng(37.762278, -122.415127),
          new google.maps.LatLng(37.761675, -122.415055),
          new google.maps.LatLng(37.760932, -122.414988),
          new google.maps.LatLng(37.759337, -122.414862),
          new google.maps.LatLng(37.773187, -122.421922),
          new google.maps.LatLng(37.773043, -122.422118),
          new google.maps.LatLng(37.773007, -122.422165),
          new google.maps.LatLng(37.772979, -122.422219),
          new google.maps.LatLng(37.772865, -122.422394),
          new google.maps.LatLng(37.772779, -122.422503),
          new google.maps.LatLng(37.772676, -122.422701),
          new google.maps.LatLng(37.772606, -122.422806),
          new google.maps.LatLng(37.772566, -122.422840),
          new google.maps.LatLng(37.772508, -122.422852),
          new google.maps.LatLng(37.772387, -122.423011),
          new google.maps.LatLng(37.772099, -122.423328),
          new google.maps.LatLng(37.771704, -122.423783),
          new google.maps.LatLng(37.771481, -122.424081),
          new google.maps.LatLng(37.771400, -122.424179),
          new google.maps.LatLng(37.771352, -122.424220),
          new google.maps.LatLng(37.771248, -122.424327),
          new google.maps.LatLng(37.770904, -122.424781),
          new google.maps.LatLng(37.770520, -122.425283),
          new google.maps.LatLng(37.770337, -122.425553),
          new google.maps.LatLng(37.770128, -122.425832),
          new google.maps.LatLng(37.769756, -122.426331),
          new google.maps.LatLng(37.769300, -122.426902),
          new google.maps.LatLng(37.769132, -122.427065),
          new google.maps.LatLng(37.769092, -122.427103),
          new google.maps.LatLng(37.768979, -122.427172),
          new google.maps.LatLng(37.768595, -122.427634),
          new google.maps.LatLng(37.768372, -122.427913),
          new google.maps.LatLng(37.768337, -122.427961),
          new google.maps.LatLng(37.768244, -122.428138),
          new google.maps.LatLng(37.767942, -122.428581),
          new google.maps.LatLng(37.767482, -122.429094),
          new google.maps.LatLng(37.767031, -122.429606),
          new google.maps.LatLng(37.766732, -122.429986),
          new google.maps.LatLng(37.766680, -122.430058),
          new google.maps.LatLng(37.766633, -122.430109),
          new google.maps.LatLng(37.766580, -122.430211),
          new google.maps.LatLng(37.766367, -122.430594),
          new google.maps.LatLng(37.765910, -122.431137),
          new google.maps.LatLng(37.765353, -122.431806),
          new google.maps.LatLng(37.764962, -122.432298),
          new google.maps.LatLng(37.764868, -122.432486),
          new google.maps.LatLng(37.764518, -122.432913),
          new google.maps.LatLng(37.763435, -122.434173),
          new google.maps.LatLng(37.762847, -122.434953),
          new google.maps.LatLng(37.762291, -122.435935),
          new google.maps.LatLng(37.762224, -122.436074),
          new google.maps.LatLng(37.761957, -122.436892),
          new google.maps.LatLng(37.761652, -122.438886),
          new google.maps.LatLng(37.761284, -122.439955),
          new google.maps.LatLng(37.761210, -122.440068),
          new google.maps.LatLng(37.761064, -122.440720),
          new google.maps.LatLng(37.761040, -122.441411),
          new google.maps.LatLng(37.761048, -122.442324),
          new google.maps.LatLng(37.760851, -122.443118),
          new google.maps.LatLng(37.759977, -122.444591),
          new google.maps.LatLng(37.759913, -122.444698),
          new google.maps.LatLng(37.759623, -122.445065),
          new google.maps.LatLng(37.758902, -122.445158),
          new google.maps.LatLng(37.758428, -122.444570),
          new google.maps.LatLng(37.757687, -122.443340),
          new google.maps.LatLng(37.757583, -122.443240),
          new google.maps.LatLng(37.757019, -122.442787),
          new google.maps.LatLng(37.756603, -122.442322),
          new google.maps.LatLng(37.756380, -122.441602),
          new google.maps.LatLng(37.755790, -122.441382),
          new google.maps.LatLng(37.754493, -122.442133),
          new google.maps.LatLng(37.754361, -122.442206),
          new google.maps.LatLng(37.753719, -122.442650),
          new google.maps.LatLng(37.753096, -122.442915),
          new google.maps.LatLng(37.751617, -122.443211),
          new google.maps.LatLng(37.751496, -122.443246),
          new google.maps.LatLng(37.750733, -122.443428),
          new google.maps.LatLng(37.750126, -122.443536),
          new google.maps.LatLng(37.750103, -122.443784),
          new google.maps.LatLng(37.750390, -122.444010),
          new google.maps.LatLng(37.750448, -122.444013),
          new google.maps.LatLng(37.750536, -122.444040),
          new google.maps.LatLng(37.750493, -122.444141),
          new google.maps.LatLng(37.790859, -122.402808),
          new google.maps.LatLng(37.790864, -122.402768),
          new google.maps.LatLng(37.790995, -122.402539),
          new google.maps.LatLng(37.791148, -122.402172),
          new google.maps.LatLng(37.791385, -122.401312),
          new google.maps.LatLng(37.791405, -122.400776),
          new google.maps.LatLng(37.791288, -122.400528),
          new google.maps.LatLng(37.791113, -122.400441),
          new google.maps.LatLng(37.791027, -122.400395),
          new google.maps.LatLng(37.791094, -122.400311),
          new google.maps.LatLng(37.791211, -122.400183),
          new google.maps.LatLng(37.791060, -122.399334),
          new google.maps.LatLng(37.790538, -122.398718),
          new google.maps.LatLng(37.790095, -122.398086),
          new google.maps.LatLng(37.789644, -122.397360),
          new google.maps.LatLng(37.789254, -122.396844),
          new google.maps.LatLng(37.788855, -122.396397),
          new google.maps.LatLng(37.788483, -122.395963),
          new google.maps.LatLng(37.788015, -122.395365),
          new google.maps.LatLng(37.787558, -122.394735),
          new google.maps.LatLng(37.787472, -122.394323),
          new google.maps.LatLng(37.787630, -122.394025),
          new google.maps.LatLng(37.787767, -122.393987),
          new google.maps.LatLng(37.787486, -122.394452),
          new google.maps.LatLng(37.786977, -122.395043),
          new google.maps.LatLng(37.786583, -122.395552),
          new google.maps.LatLng(37.786540, -122.395610),
          new google.maps.LatLng(37.786516, -122.395659),
          new google.maps.LatLng(37.786378, -122.395707),
          new google.maps.LatLng(37.786044, -122.395362),
          new google.maps.LatLng(37.785598, -122.394715),
          new google.maps.LatLng(37.785321, -122.394361),
          new google.maps.LatLng(37.785207, -122.394236),
          new google.maps.LatLng(37.785751, -122.394062),
          new google.maps.LatLng(37.785996, -122.393881),
          new google.maps.LatLng(37.786092, -122.393830),
          new google.maps.LatLng(37.785998, -122.393899),
          new google.maps.LatLng(37.785114, -122.394365),
          new google.maps.LatLng(37.785022, -122.394441),
          new google.maps.LatLng(37.784823, -122.394635),
          new google.maps.LatLng(37.784719, -122.394629),
          new google.maps.LatLng(37.785069, -122.394176),
          new google.maps.LatLng(37.785500, -122.393650),
          new google.maps.LatLng(37.785770, -122.393291),
          new google.maps.LatLng(37.785839, -122.393159),
          new google.maps.LatLng(37.782651, -122.400628),
          new google.maps.LatLng(37.782616, -122.400599),
          new google.maps.LatLng(37.782702, -122.400470),
          new google.maps.LatLng(37.782915, -122.400192),
          new google.maps.LatLng(37.783137, -122.399887),
          new google.maps.LatLng(37.783414, -122.399519),
          new google.maps.LatLng(37.783629, -122.399237),
          new google.maps.LatLng(37.783688, -122.399157),
          new google.maps.LatLng(37.783716, -122.399106),
          new google.maps.LatLng(37.783798, -122.399072),
          new google.maps.LatLng(37.783997, -122.399186),
          new google.maps.LatLng(37.784271, -122.399538),
          new google.maps.LatLng(37.784577, -122.399948),
          new google.maps.LatLng(37.784828, -122.400260),
          new google.maps.LatLng(37.784999, -122.400477),
          new google.maps.LatLng(37.785113, -122.400651),
          new google.maps.LatLng(37.785155, -122.400703),
          new google.maps.LatLng(37.785192, -122.400749),
          new google.maps.LatLng(37.785278, -122.400839),
          new google.maps.LatLng(37.785387, -122.400857),
          new google.maps.LatLng(37.785478, -122.400890),
          new google.maps.LatLng(37.785526, -122.401022),
          new google.maps.LatLng(37.785598, -122.401148),
          new google.maps.LatLng(37.785631, -122.401202),
          new google.maps.LatLng(37.785660, -122.401267),
          new google.maps.LatLng(37.803986, -122.426035),
          new google.maps.LatLng(37.804102, -122.425089),
          new google.maps.LatLng(37.804211, -122.424156),
          new google.maps.LatLng(37.803861, -122.423385),
          new google.maps.LatLng(37.803151, -122.423214),
          new google.maps.LatLng(37.802439, -122.423077),
          new google.maps.LatLng(37.801740, -122.422905),
          new google.maps.LatLng(37.801069, -122.422785),
          new google.maps.LatLng(37.800345, -122.422649),
          new google.maps.LatLng(37.799633, -122.422603),
          new google.maps.LatLng(37.799750, -122.421700),
          new google.maps.LatLng(37.799885, -122.420854),
          new google.maps.LatLng(37.799209, -122.420607),
          new google.maps.LatLng(37.795656, -122.400395),
          new google.maps.LatLng(37.795203, -122.400304),
          new google.maps.LatLng(37.778738, -122.415584),
          new google.maps.LatLng(37.778812, -122.415189),
          new google.maps.LatLng(37.778824, -122.415092),
          new google.maps.LatLng(37.778833, -122.414932),
          new google.maps.LatLng(37.778834, -122.414898),
          new google.maps.LatLng(37.778740, -122.414757),
          new google.maps.LatLng(37.778501, -122.414433),
          new google.maps.LatLng(37.778182, -122.414026),
          new google.maps.LatLng(37.777851, -122.413623),
          new google.maps.LatLng(37.777486, -122.413166),
          new google.maps.LatLng(37.777109, -122.412674),
          new google.maps.LatLng(37.776743, -122.412186),
          new google.maps.LatLng(37.776440, -122.411800),
          new google.maps.LatLng(37.776295, -122.411614),
          new google.maps.LatLng(37.776158, -122.411440),
          new google.maps.LatLng(37.775806, -122.410997),
          new google.maps.LatLng(37.775422, -122.410484),
          new google.maps.LatLng(37.775126, -122.410087),
          new google.maps.LatLng(37.775012, -122.409854),
          new google.maps.LatLng(37.775164, -122.409573),
          new google.maps.LatLng(37.775498, -122.409180),
          new google.maps.LatLng(37.775868, -122.408730),
          new google.maps.LatLng(37.776256, -122.408240),
          new google.maps.LatLng(37.776519, -122.407928),
          new google.maps.LatLng(37.776539, -122.407904),
          new google.maps.LatLng(37.776595, -122.407854),
          new google.maps.LatLng(37.776853, -122.407547),
          new google.maps.LatLng(37.777234, -122.407087),
          new google.maps.LatLng(37.777644, -122.406558),
          new google.maps.LatLng(37.778066, -122.406017),
          new google.maps.LatLng(37.778468, -122.405499),
          new google.maps.LatLng(37.778866, -122.404995),
          new google.maps.LatLng(37.779295, -122.404455),
          new google.maps.LatLng(37.779695, -122.403950),
          new google.maps.LatLng(37.779982, -122.403584),
          new google.maps.LatLng(37.780295, -122.403223),
          new google.maps.LatLng(37.780664, -122.402766),
          new google.maps.LatLng(37.781043, -122.402288),
          new google.maps.LatLng(37.781399, -122.401823),
          new google.maps.LatLng(37.781727, -122.401407),
          new google.maps.LatLng(37.781853, -122.401247),
          new google.maps.LatLng(37.781894, -122.401195),
          new google.maps.LatLng(37.782076, -122.400977),
          new google.maps.LatLng(37.782338, -122.400603),
          new google.maps.LatLng(37.782666, -122.400133),
          new google.maps.LatLng(37.783048, -122.399634),
          new google.maps.LatLng(37.783450, -122.399198),
          new google.maps.LatLng(37.783791, -122.398998),
          new google.maps.LatLng(37.784177, -122.398959),
          new google.maps.LatLng(37.784388, -122.398971),
          new google.maps.LatLng(37.784404, -122.399128),
          new google.maps.LatLng(37.784586, -122.399524),
          new google.maps.LatLng(37.784835, -122.399927),
          new google.maps.LatLng(37.785116, -122.400307),
          new google.maps.LatLng(37.785282, -122.400539),
          new google.maps.LatLng(37.785346, -122.400692),
          new google.maps.LatLng(37.765769, -122.407201),
          new google.maps.LatLng(37.765790, -122.407414),
          new google.maps.LatLng(37.765802, -122.407755),
          new google.maps.LatLng(37.765791, -122.408219),
          new google.maps.LatLng(37.765763, -122.408759),
          new google.maps.LatLng(37.765726, -122.409348),
          new google.maps.LatLng(37.765716, -122.409882),
          new google.maps.LatLng(37.765708, -122.410202),
          new google.maps.LatLng(37.765705, -122.410253),
          new google.maps.LatLng(37.765707, -122.410369),
          new google.maps.LatLng(37.765692, -122.410720),
          new google.maps.LatLng(37.765699, -122.411215),
          new google.maps.LatLng(37.765687, -122.411789),
          new google.maps.LatLng(37.765666, -122.412373),
          new google.maps.LatLng(37.765598, -122.412883),
          new google.maps.LatLng(37.765543, -122.413039),
          new google.maps.LatLng(37.765532, -122.413125),
          new google.maps.LatLng(37.765500, -122.413553),
          new google.maps.LatLng(37.765448, -122.414053),
          new google.maps.LatLng(37.765388, -122.414645),
          new google.maps.LatLng(37.765323, -122.415250),
          new google.maps.LatLng(37.765303, -122.415847),
          new google.maps.LatLng(37.765251, -122.416439),
          new google.maps.LatLng(37.765204, -122.417020),
          new google.maps.LatLng(37.765172, -122.417556),
          new google.maps.LatLng(37.765164, -122.418075),
          new google.maps.LatLng(37.765153, -122.418618),
          new google.maps.LatLng(37.765136, -122.419112),
          new google.maps.LatLng(37.765129, -122.419378),
          new google.maps.LatLng(37.765119, -122.419481),
          new google.maps.LatLng(37.765100, -122.419852),
          new google.maps.LatLng(37.765083, -122.420349),
          new google.maps.LatLng(37.765045, -122.420930),
          new google.maps.LatLng(37.764992, -122.421481),
          new google.maps.LatLng(37.764980, -122.421695),
          new google.maps.LatLng(37.764993, -122.421843),
          new google.maps.LatLng(37.764986, -122.422255),
          new google.maps.LatLng(37.764975, -122.422823),
          new google.maps.LatLng(37.764939, -122.423411),
          new google.maps.LatLng(37.764902, -122.424014),
          new google.maps.LatLng(37.764853, -122.424576),
          new google.maps.LatLng(37.764826, -122.424922),
          new google.maps.LatLng(37.764796, -122.425375),
          new google.maps.LatLng(37.764782, -122.425869),
          new google.maps.LatLng(37.764768, -122.426089),
          new google.maps.LatLng(37.764766, -122.426117),
          new google.maps.LatLng(37.764723, -122.426276),
          new google.maps.LatLng(37.764681, -122.426649),
          new google.maps.LatLng(37.782012, -122.404200),
          new google.maps.LatLng(37.781574, -122.404911),
          new google.maps.LatLng(37.781055, -122.405597),
          new google.maps.LatLng(37.780479, -122.406341),
          new google.maps.LatLng(37.779996, -122.406939),
          new google.maps.LatLng(37.779459, -122.407613),
          new google.maps.LatLng(37.778953, -122.408228),
          new google.maps.LatLng(37.778409, -122.408839),
          new google.maps.LatLng(37.777842, -122.409501),
          new google.maps.LatLng(37.777334, -122.410181),
          new google.maps.LatLng(37.776809, -122.410836),
          new google.maps.LatLng(37.776240, -122.411514),
          new google.maps.LatLng(37.775725, -122.412145),
          new google.maps.LatLng(37.775190, -122.412805),
          new google.maps.LatLng(37.774672, -122.413464),
          new google.maps.LatLng(37.774084, -122.414186),
          new google.maps.LatLng(37.773533, -122.413636),
          new google.maps.LatLng(37.773021, -122.413009),
          new google.maps.LatLng(37.772501, -122.412371),
          new google.maps.LatLng(37.771964, -122.411681),
          new google.maps.LatLng(37.771479, -122.411078),
          new google.maps.LatLng(37.770992, -122.410477),
          new google.maps.LatLng(37.770467, -122.409801),
          new google.maps.LatLng(37.770090, -122.408904),
          new google.maps.LatLng(37.769657, -122.408103),
          new google.maps.LatLng(37.769132, -122.407276),
          new google.maps.LatLng(37.768564, -122.406469),
          new google.maps.LatLng(37.767980, -122.405745),
          new google.maps.LatLng(37.767380, -122.405299),
          new google.maps.LatLng(37.766604, -122.405297),
          new google.maps.LatLng(37.765838, -122.405200),
          new google.maps.LatLng(37.765139, -122.405139),
          new google.maps.LatLng(37.764457, -122.405094),
          new google.maps.LatLng(37.763716, -122.405142),
          new google.maps.LatLng(37.762932, -122.405398),
          new google.maps.LatLng(37.762126, -122.405813),
          new google.maps.LatLng(37.761344, -122.406215),
          new google.maps.LatLng(37.760556, -122.406495),
          new google.maps.LatLng(37.759732, -122.406484),
          new google.maps.LatLng(37.758910, -122.406228),
          new google.maps.LatLng(37.758182, -122.405695),
          new google.maps.LatLng(37.757676, -122.405118),
          new google.maps.LatLng(37.757039, -122.404346),
          new google.maps.LatLng(37.756335, -122.403719),
          new google.maps.LatLng(37.755503, -122.403406),
          new google.maps.LatLng(37.754665, -122.403242),
          new google.maps.LatLng(37.753837, -122.403172),
          new google.maps.LatLng(37.752986, -122.403112),
          new google.maps.LatLng(37.751266, -122.403355)
        ];
      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_EpCL6VryY2WThvgNTYmElquGet8HBU4&libraries=visualization&callback=initMap">
    </script>

</body></html>