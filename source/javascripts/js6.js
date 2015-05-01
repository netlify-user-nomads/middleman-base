/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);;
/*
css3-mediaqueries.js - CSS Helper and CSS3 Media Queries Enabler

author: Wouter van der Graaf <wouter at dynora nl>
version: 1.0 (20110330)
license: MIT
website: http://code.google.com/p/css3-mediaqueries-js/

W3C spec: http://www.w3.org/TR/css3-mediaqueries/

Note: use of embedded <style> is not recommended when using media queries, because IE  has no way of returning the raw literal css text from a <style> element.
*/


// true prototypal inheritance (http://javascript.crockford.com/prototypal.html)
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}


// user agent sniffing shortcuts
var ua = {
	toString: function () {
		return navigator.userAgent;
	},
	test: function (s) {
		return this.toString().toLowerCase().indexOf(s.toLowerCase()) > -1;
	}
};
ua.version = (ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];
ua.webkit = ua.test('webkit');
ua.gecko = ua.test('gecko') && !ua.webkit;
ua.opera = ua.test('opera');
ua.ie = ua.test('msie') && !ua.opera;
ua.ie6 = ua.ie && document.compatMode && typeof document.documentElement.style.maxHeight === 'undefined';
ua.ie7 = ua.ie && document.documentElement && typeof document.documentElement.style.maxHeight !== 'undefined' && typeof XDomainRequest === 'undefined';
ua.ie8 = ua.ie && typeof XDomainRequest !== 'undefined';



// initialize when DOM content is loaded
var domReady = function () {
	var fns = [];
	var init = function () {
		if (!arguments.callee.done) { // run init functions once
			arguments.callee.done = true;
			for (var i = 0; i < fns.length; i++) {
				fns[i]();
			}
		}
	};

	// listeners for different browsers
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', init, false);
	}
	if (ua.ie) {
		(function () {
			try {
				// throws errors until after ondocumentready
				document.documentElement.doScroll('left');

				// If we are in an iframe, the above does not work properly.
        // Trying to access the length attribute of document.body, however,
        // does throw an error until ondocumentready, fixing this issue.
        document.body.length;
			}
			catch (e) {
				setTimeout(arguments.callee, 50);
				return;
			}
			// no errors, fire
			init();
		})();
		// trying to always fire before onload
		document.onreadystatechange = function () {
			if (document.readyState === 'complete') {
				document.onreadystatechange = null;
				init();
			}
		};
	}
	if (ua.webkit && document.readyState) {
		(function () {
			if (document.readyState !== 'loading') {
				init();
			}
			else {
				setTimeout(arguments.callee, 10);
			}
		})();
	}
	window.onload = init; // fallback

  return function (fn) { // add fn to init functions
    if (typeof fn === 'function') {
      // If DOM ready has already been fired, fire the function
      // right away.
      if(init.done) {
        fn();
      } else {
        // Add to the queue
        fns[fns.length] = fn;
      }
    }
    return fn;
  };
}();


// helper library for parsing css to objects
var cssHelper = function () {

	var regExp = {
		BLOCKS: /[^\s{;][^{;]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,
		BLOCKS_INSIDE: /[^\s{][^{]*\{[^{}]*\}/g,
		DECLARATIONS: /[a-zA-Z\-]+[^;]*:[^;]+;/g,
		RELATIVE_URLS: /url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,
		// strip whitespace and comments, @import is evil
		REDUNDANT_COMPONENTS: /(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;|@-moz-document\s*url-prefix\(\)\s*{(([^{}])+{([^{}])+}([^{}])+)+})/g,
		REDUNDANT_WHITESPACE: /\s*(,|:|;|\{|\})\s*/g,
		WHITESPACE_IN_PARENTHESES: /\(\s*(\S*)\s*\)/g,
		MORE_WHITESPACE: /\s{2,}/g,
		FINAL_SEMICOLONS: /;\}/g,
		NOT_WHITESPACE: /\S+/g
	};

	var parsed, parsing = false;

	var waiting = [];
	var wait = function (fn) {
		if (typeof fn === 'function') {
			waiting[waiting.length] = fn;
		}
	};
	var ready = function () {
		for (var i = 0; i < waiting.length; i++) {
			waiting[i](parsed);
		}
	};
	var events = {};
	var broadcast = function (n, v) {
		if (events[n]) {
			var listeners = events[n].listeners;
			if (listeners) {
				for (var i = 0; i < listeners.length; i++) {
					listeners[i](v);
				}
			}
		}
	};

	var requestText = function (url, fnSuccess, fnFailure) {
		if (ua.ie && !window.XMLHttpRequest) {
			window.XMLHttpRequest = function () {
				return new ActiveXObject('Microsoft.XMLHTTP');
			};
		}
		if (!XMLHttpRequest) {
			return '';
		}
		var r = new XMLHttpRequest();
		try {
			r.open('get', url, true);
			r.setRequestHeader('X_REQUESTED_WITH', 'XMLHttpRequest');
		}
		catch (e) {
			fnFailure();
			return;
		}
		var done = false;
		setTimeout(function () {
			done = true;
		}, 5000);
		document.documentElement.style.cursor = 'progress';
		r.onreadystatechange = function () {
			if (r.readyState === 4 && !done) {
				if (!r.status && location.protocol === 'file:' ||
						(r.status >= 200 && r.status < 300) ||
						r.status === 304 ||
						navigator.userAgent.indexOf('Safari') > -1 && typeof r.status === 'undefined') {
					fnSuccess(r.responseText);
				}
				else {
					fnFailure();
				}
				document.documentElement.style.cursor = '';
				r = null; // avoid memory leaks
			}
		};
		r.send('');
	};

	var sanitize = function (text) {
		text = text.replace(regExp.REDUNDANT_COMPONENTS, '');
		text = text.replace(regExp.REDUNDANT_WHITESPACE, '$1');
        text = text.replace(regExp.WHITESPACE_IN_PARENTHESES, '($1)');
		text = text.replace(regExp.MORE_WHITESPACE, ' ');
		text = text.replace(regExp.FINAL_SEMICOLONS, '}'); // optional final semicolons
		return text;
	};

	var objects = {
	    stylesheet: function (el) {
	        var o = {};
	        var amqs = [], mqls = [], rs = [], rsw = [];
	        var s = el.cssHelperText;

	        // add attribute media queries
	        var attr = el.getAttribute('media');
	        if (attr) {
	            var qts = attr.toLowerCase().split(',')
	        }
	        else {
	            var qts = ['all'] // imply 'all'
            }
	        for (var i = 0; i < qts.length; i++) {
	            amqs[amqs.length] = objects.mediaQuery(qts[i], o);
	        }

	        // add media query lists and rules (top down order)
		    var blocks = s.match(regExp.BLOCKS); // @charset is not a block
		    if (blocks !== null) {
			    for (var i = 0; i < blocks.length; i++) {
				    if (blocks[i].substring(0, 7) === '@media ') { // media query (list)
					    var mql = objects.mediaQueryList(blocks[i], o);
					    rs = rs.concat(mql.getRules());
					    mqls[mqls.length] = mql;
				    }
				    else { // regular rule set, page context (@page) or font description (@font-face)
					    rs[rs.length] = rsw[rsw.length] = objects.rule(blocks[i], o, null);
				    }
			    }
		    }

	        o.element = el;
	        o.getCssText = function () {
	            return s;
	        };
	        o.getAttrMediaQueries = function () {
	            return amqs;
	        };
	        o.getMediaQueryLists = function () {
	            return mqls;
	        };
	        o.getRules = function () {
	            return rs;
	        };
	        o.getRulesWithoutMQ = function () {
	            return rsw;
	        };
	        return o;
	    },

		mediaQueryList: function (s, stsh) {
			var o = {};
			var idx = s.indexOf('{');
			var lt = s.substring(0, idx);
			s = s.substring(idx + 1, s.length - 1);
			var mqs = [], rs = [];

			// add media queries
			var qts = lt.toLowerCase().substring(7).split(',');
			for (var i = 0; i < qts.length; i++) { // parse each media query
				mqs[mqs.length] = objects.mediaQuery(qts[i], o);
			}

			// add rule sets
			var rts = s.match(regExp.BLOCKS_INSIDE);
			if (rts !== null) {
				for (i = 0; i < rts.length; i++) {
					rs[rs.length] = objects.rule(rts[i], stsh, o);
				}
			}

			o.type = 'mediaQueryList';
			o.getMediaQueries = function () {
				return mqs;
			};
			o.getRules = function () {
				return rs;
			};
			o.getListText = function () {
				return lt;
			};
			o.getCssText = function () {
				return s;
			};
			return o;
		},

		mediaQuery: function (s, listOrSheet) {
			s = s || '';
			var mql, stsh;
			if (listOrSheet.type === 'mediaQueryList') {
			    mql = listOrSheet;
		    }
		    else {
		        stsh = listOrSheet;
		    }
			var not = false, type;
			var expr = [];
			var valid = true;
			var tokens = s.match(regExp.NOT_WHITESPACE);



			for (var i = 0; i < tokens.length; i++) {
				var token = tokens[i];
				if (!type && (token === 'not' || token === 'only')) { // 'not' and 'only' keywords
					// keyword 'only' does nothing, as if it was not present
					if (token === 'not') {
						not = true;
					}
				}
				else if (!type) { // media type
					type = token;
				}
				else if (token.charAt(0) === '(') { // media feature expression
					var pair = token.substring(1, token.length - 1).split(':');
					expr[expr.length] = {
						mediaFeature: pair[0],
						value: pair[1] || null
					};
				}
			}

			return {
			    getQueryText: function () {
			        return s;
			    },
			    getAttrStyleSheet: function () {
			        return stsh || null;
			    },
				getList: function () {
					return mql || null;
				},
				getValid: function () {
					return valid;
				},
				getNot: function () {
					return not;
				},
				getMediaType: function () {
					return type;
				},
				getExpressions: function () {
					return expr;
				}
			};
		},

		rule: function (s, stsh, mql) {
			var o = {};
			var idx = s.indexOf('{');
			var st = s.substring(0, idx);
			var ss = st.split(',');
			var ds = [];
			var dts = s.substring(idx + 1, s.length - 1).split(';');
			for (var i = 0; i < dts.length; i++) {
				ds[ds.length] = objects.declaration(dts[i], o);
			}

			o.getStylesheet = function () {
			    return stsh || null;
			};
			o.getMediaQueryList = function () {
				return mql || null;
			};
			o.getSelectors = function () {
				return ss;
			};
			o.getSelectorText = function () {
				return st;
			};
			o.getDeclarations = function () {
				return ds;
			};
			o.getPropertyValue = function (n) {
				for (var i = 0; i < ds.length; i++) {
					if (ds[i].getProperty() === n) {
						return ds[i].getValue();
					}
				}
				return null;
			};
			return o;
		},

		declaration: function (s, r) {
			var idx = s.indexOf(':');
			var p = s.substring(0, idx);
			var v = s.substring(idx + 1);
			return {
				getRule: function () {
					return r || null;
				},
				getProperty: function () {
					return p;
				},
				getValue: function () {
					return v;
				}
			};
		}
	};

	var parseText = function (el) {
		if (typeof el.cssHelperText !== 'string') {
			return;
		}
		var o = {
		    stylesheet: null,
			mediaQueryLists: [],
			rules: [],
			selectors: {},
			declarations: [],
			properties: {}
		};

		// build stylesheet object
		var stsh = o.stylesheet = objects.stylesheet(el);

		// collect media query lists
		var mqls = o.mediaQueryLists = stsh.getMediaQueryLists();

		// collect all rules
		var ors = o.rules = stsh.getRules();

		// collect all selectors
		var oss = o.selectors;
		var collectSelectors = function (r) {
			var ss = r.getSelectors();
			for (var i = 0; i < ss.length; i++) {
				var n = ss[i];
				if (!oss[n]) {
					oss[n] = [];
				}
				oss[n][oss[n].length] = r;
			}
		};
		for (i = 0; i < ors.length; i++) {
			collectSelectors(ors[i]);
		}

		// collect all declarations
		var ods = o.declarations;
		for (i = 0; i < ors.length; i++) {
			ods = o.declarations = ods.concat(ors[i].getDeclarations());
		}

		// collect all properties
		var ops = o.properties;
		for (i = 0; i < ods.length; i++) {
			var n = ods[i].getProperty();
			if (!ops[n]) {
				ops[n] = [];
			}
			ops[n][ops[n].length] = ods[i];
		}

		el.cssHelperParsed = o;
		parsed[parsed.length] = el;
		return o;
	};

	var parseEmbedded = function (el, s) {
	    return;
	    // This function doesn't work because of a bug in IE, where innerHTML gives us parsed css instead of raw literal.
		el.cssHelperText = sanitize(s || el.innerHTML);
		return parseText(el);
	};

	var parse = function () {
		parsing = true;
		parsed = [];
		var linked = [];
		var finish = function () {
			for (var i = 0; i < linked.length; i++) {
				parseText(linked[i]);
			}
			var styles = document.getElementsByTagName('style');
			for (i = 0; i < styles.length; i++) {
				parseEmbedded(styles[i]);
			}
			parsing = false;
			ready();
		};
		var links = document.getElementsByTagName('link');
		for (var i = 0; i < links.length; i++) {
			var link = links[i];
			if (link.getAttribute('rel').indexOf('style') > -1 && link.href && link.href.length !== 0 && !link.disabled) {
				linked[linked.length] = link;
			}
		}
		if (linked.length > 0) {
			var c = 0;
			var checkForFinish = function () {
				c++;
				if (c === linked.length) { // parse in right order, so after last link is read
					finish();
				}
			};
			var processLink = function (link) {
				var href = link.href;
				requestText(href, function (text) {
					// fix url's
					text = sanitize(text).replace(regExp.RELATIVE_URLS, 'url(' + href.substring(0, href.lastIndexOf('/')) + '/$1)');
					link.cssHelperText = text;
					checkForFinish();
				}, checkForFinish);
			};
			for (i = 0; i < linked.length; i++) {
				processLink(linked[i]);
			}
		}
		else {
			finish();
		}
	};

	var types = {
	    stylesheets: 'array',
		mediaQueryLists: 'array',
		rules: 'array',
		selectors: 'object',
		declarations: 'array',
		properties: 'object'
	};

	var collections = {
	    stylesheets: null,
		mediaQueryLists: null,
		rules: null,
		selectors: null,
		declarations: null,
		properties: null
	};

	var addToCollection = function (name, v) {
		if (collections[name] !== null) {
			if (types[name] === 'array') {
				return (collections[name] = collections[name].concat(v));
			}
			else {
				var c = collections[name];
				for (var n in v) {
					if (v.hasOwnProperty(n)) {
						if (!c[n]) {
							c[n] = v[n];
						}
						else {
							c[n] = c[n].concat(v[n]);
						}
					}
				}
				return c;
			}
		}
	};

	var collect = function (name) {
		collections[name] = (types[name] === 'array') ? [] : {};
		for (var i = 0; i < parsed.length; i++) {
		    var pname = name === 'stylesheets' ? 'stylesheet' : name; // the exception
			addToCollection(name, parsed[i].cssHelperParsed[pname]);
		}
		return collections[name];
	};

	// viewport size
	var getViewportSize = function (d) {
		if (typeof window.innerWidth != 'undefined') {
			return window['inner' + d];
		}
		else if (typeof document.documentElement !== 'undefined'
				&& typeof document.documentElement.clientWidth !== 'undefined'
				&& document.documentElement.clientWidth != 0) {
			return document.documentElement['client' + d];
		}
	};

	// public static functions
	return {
		addStyle: function (s, mediaTypes, process) {
			var el;
			var styleElId = 'css-mediaqueries-js';
			var styleMedia = '';

			var styleEl = document.getElementById(styleElId);

			if (mediaTypes && mediaTypes.length > 0) {
			    styleMedia = mediaTypes.join(',');
					styleElId += styleMedia;
			}

      if (null !== styleEl) {
          el = styleEl;
      }
      else {
          el = document.createElement('style');
          el.setAttribute('type', 'text/css');
          el.setAttribute('id', styleElId);
          el.setAttribute('media', styleMedia);
          document.getElementsByTagName('head')[0].appendChild(el);
      }

      if (el.styleSheet) { // IE
          el.styleSheet.cssText += s;
      }
      else {
	        el.appendChild(document.createTextNode(s));
      }

			el.addedWithCssHelper = true;

			if (typeof process === 'undefined' || process === true) {
				cssHelper.parsed(function (parsed) {
					var o = parseEmbedded(el, s);
					for (var n in o) {
						if (o.hasOwnProperty(n)) {
							addToCollection(n, o[n]);
						}
					}
					broadcast('newStyleParsed', el);
				});
			}
			else {
				el.parsingDisallowed = true;
			}
			return el;
		},

		removeStyle: function (el) {
			if (el.parentNode)
				return el.parentNode.removeChild(el);
		},

		parsed: function (fn) {
			if (parsing) {
				wait(fn);
			}
			else {
				if (typeof parsed !== 'undefined') {
					if (typeof fn === 'function') {
						fn(parsed);
					}
				}
				else {
					wait(fn);
					parse();
				}
			}
		},

		stylesheets: function (fn) {
		    cssHelper.parsed(function (parsed) {
		        fn(collections.stylesheets || collect('stylesheets'));
		    });
		},

		mediaQueryLists: function (fn) {
			cssHelper.parsed(function (parsed) {
				fn(collections.mediaQueryLists || collect('mediaQueryLists'));
			});
		},

		rules: function (fn) {
			cssHelper.parsed(function (parsed) {
				fn(collections.rules || collect('rules'));
			});
		},

		selectors: function (fn) {
			cssHelper.parsed(function (parsed) {
				fn(collections.selectors || collect('selectors'));
			});
		},

		declarations: function (fn) {
			cssHelper.parsed(function (parsed) {
				fn(collections.declarations || collect('declarations'));
			});
		},

		properties: function (fn) {
			cssHelper.parsed(function (parsed) {
				fn(collections.properties || collect('properties'));
			});
		},

		broadcast: broadcast,

		addListener: function (n, fn) { // in case n is 'styleadd': added function is called everytime style is added and parsed
			if (typeof fn === 'function') {
				if (!events[n]) {
					events[n] = {
						listeners: []
					};
				}
				events[n].listeners[events[n].listeners.length] = fn;
			}
		},

		removeListener: function (n, fn) {
			if (typeof fn === 'function' && events[n]) {
				var ls = events[n].listeners;
				for (var i = 0; i < ls.length; i++) {
					if (ls[i] === fn) {
						ls.splice(i, 1);
						i -= 1;
					}
				}
			}
		},

		getViewportWidth: function () {
			return getViewportSize('Width');
		},

		getViewportHeight: function () {
			return getViewportSize('Height');
		}
	};
}();



// function to test and apply parsed media queries against browser capabilities
domReady(function enableCssMediaQueries() {
	var meter;

	var regExp = {
		LENGTH_UNIT: /[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,
		RESOLUTION_UNIT: /[0-9]+(dpi|dpcm)$/,
		ASPECT_RATIO: /^[0-9]+\/[0-9]+$/,
		ABSOLUTE_VALUE: /^[0-9]*(\.[0-9]+)*$/
	};

	var styles = [];

	var nativeSupport = function () {
		// check support for media queries
		var id = 'css3-mediaqueries-test';
		var el = document.createElement('div');
		el.id = id;
		var style = cssHelper.addStyle('@media all and (width) { #' + id +
			' { width: 1px !important; } }', [], false); // false means don't parse this temp style
		document.body.appendChild(el);
		var ret = el.offsetWidth === 1;
		style.parentNode.removeChild(style);
		el.parentNode.removeChild(el);
		nativeSupport = function () {
			return ret;
		};
		return ret;
	};

	var createMeter = function () { // create measuring element
		meter = document.createElement('div');
		meter.style.cssText = 'position:absolute;top:-9999em;left:-9999em;' +
			'margin:0;border:none;padding:0;width:1em;font-size:1em;'; // cssText is needed for IE, works for the others
		document.body.appendChild(meter);
		// meter must have browser default font size of 16px
		if (meter.offsetWidth !== 16) {
			meter.style.fontSize = 16 / meter.offsetWidth + 'em';
		}
		meter.style.width = '';
	};

	var measure = function (value) {
		meter.style.width = value;
		var amount = meter.offsetWidth;
		meter.style.width = '';
		return amount;
	};

	var testMediaFeature = function (feature, value) {
		// non-testable features: monochrome|min-monochrome|max-monochrome|scan|grid
		var l = feature.length;
		var min = (feature.substring(0, 4) === 'min-');
		var max = (!min && feature.substring(0, 4) === 'max-');

		if (value !== null) { // determine value type and parse to usable amount
			var valueType;
			var amount;
			if (regExp.LENGTH_UNIT.exec(value)) {
				valueType = 'length';
				amount = measure(value);
			}
			else if (regExp.RESOLUTION_UNIT.exec(value)) {
				valueType = 'resolution';
				amount = parseInt(value, 10);
				var unit = value.substring((amount + '').length);
			}
			else if (regExp.ASPECT_RATIO.exec(value)) {
				valueType = 'aspect-ratio';
				amount = value.split('/');
			}
			else if (regExp.ABSOLUTE_VALUE) {
				valueType = 'absolute';
				amount = value;
			}
			else {
				valueType = 'unknown';
			}
		}

		var width, height;
		if ('device-width' === feature.substring(l - 12, l)) { // screen width
			width = screen.width;
			if (value !== null) {
				if (valueType === 'length') {
					return ((min && width >= amount) || (max && width < amount) || (!min && !max && width === amount));
				}
				else {
					return false;
				}
			}
			else { // test width without value
				return width > 0;
			}
		}
		else if ('device-height' === feature.substring(l - 13, l)) { // screen height
			height = screen.height;
			if (value !== null) {
				if (valueType === 'length') {
					return ((min && height >= amount) || (max && height < amount) || (!min && !max && height === amount));
				}
				else {
					return false;
				}
			}
			else { // test height without value
				return height > 0;
			}
		}
		else if ('width' === feature.substring(l - 5, l)) { // viewport width
			width = document.documentElement.clientWidth || document.body.clientWidth; // the latter for IE quirks mode
			if (value !== null) {
				if (valueType === 'length') {
					return ((min && width >= amount) || (max && width < amount) || (!min && !max && width === amount));
				}
				else {
					return false;
				}
			}
			else { // test width without value
				return width > 0;
			}
		}
		else if ('height' === feature.substring(l - 6, l)) { // viewport height
			height = document.documentElement.clientHeight || document.body.clientHeight; // the latter for IE quirks mode
			if (value !== null) {
				if (valueType === 'length') {
					return ((min && height >= amount) || (max && height < amount) || (!min && !max && height === amount));
				}
				else {
					return false;
				}
			}
			else { // test height without value
				return height > 0;
			}
		}
		else if ('orientation' === feature.substring(l - 11, l)) { // orientation

			width = document.documentElement.clientWidth || document.body.clientWidth; // the latter for IE quirks mode
			height = document.documentElement.clientHeight || document.body.clientHeight; // the latter for IE quirks mode

			if (valueType === 'absolute') {
				return (amount === 'portrait') ? (width <= height) : (width > height);
			}
			else {
				return false;
			}
		}
		else if ('aspect-ratio' === feature.substring(l - 12, l)) { // window aspect ratio
			width = document.documentElement.clientWidth || document.body.clientWidth; // the latter for IE quirks mode
			height = document.documentElement.clientHeight || document.body.clientHeight; // the latter for IE quirks mode

			var curRatio = width / height;
			var ratio = amount[1] / amount[0];

			if (valueType === 'aspect-ratio') {
				return ((min && curRatio >= ratio) || (max && curRatio < ratio) || (!min && !max && curRatio === ratio));
			}
			else {
				return false;
			}
		}
		else if ('device-aspect-ratio' === feature.substring(l - 19, l)) { // screen aspect ratio
			return valueType === 'aspect-ratio' && screen.width * amount[1] === screen.height * amount[0];
		}
		else if ('color-index' === feature.substring(l - 11, l)) { // number of colors
			var colors = Math.pow(2, screen.colorDepth);
			if (value !== null) {
				if (valueType === 'absolute') {
					return ((min && colors >= amount) || (max && colors < amount) || (!min && !max && colors === amount));
				}
				else {
					return false;
				}
			}
			else { // test height without value
				return colors > 0;
			}
		}
		else if ('color' === feature.substring(l - 5, l)) { // bits per color component
			var color = screen.colorDepth;
			if (value !== null) {
				if (valueType === 'absolute') {
					return ((min && color >= amount) || (max && color < amount) || (!min && !max && color === amount));
				}
				else {
					return false;
				}
			}
			else { // test height without value
				return color > 0;
			}
		}
		else if ('resolution' === feature.substring(l - 10, l)) {
			var res;
			if (unit === 'dpcm') {
				res = measure('1cm');
			}
			else {
				res = measure('1in');
			}
			if (value !== null) {
				if (valueType === 'resolution') {
					return ((min && res >= amount) || (max && res < amount) || (!min && !max && res === amount));
				}
				else {
					return false;
				}
			}
			else { // test height without value
				return res > 0;
			}
		}
		else {
			return false;
		}
	};

	var testMediaQuery = function (mq) {
		var test = mq.getValid();
		var expressions = mq.getExpressions();
		var l = expressions.length;
		if (l > 0) {
			for (var i = 0; i < l && test; i++) {
				test = testMediaFeature(expressions[i].mediaFeature, expressions[i].value);
			}
			var not = mq.getNot();
			return (test && !not || not && !test);
		}
		return test;
	};

	var testMediaQueryList = function (mql, ts) {
	    // ts is null or an array with any media type but 'all'.
		var mqs = mql.getMediaQueries();
		var t = {};
		for (var i = 0; i < mqs.length; i++) {
		    var type = mqs[i].getMediaType();
		    if (mqs[i].getExpressions().length === 0) {
		        continue;
		        // TODO: Browser check! Assuming old browsers do apply the bare media types, even in a list with media queries.
		    }
		    var typeAllowed = true;
		    if (type !== 'all' && ts && ts.length > 0) {
		        typeAllowed = false;
		        for (var j = 0; j < ts.length; j++) {
		            if (ts[j] === type) {
		                typeAllowed = true;
                    }
		        }
		    }
			if (typeAllowed && testMediaQuery(mqs[i])) {
				t[type] = true;
			}
		}
		var s = [], c = 0;
		for (var n in t) {
			if (t.hasOwnProperty(n)) {
				if (c > 0) {
					s[c++] = ',';
				}
				s[c++] = n;
			}
		}
		if (s.length > 0) {
			styles[styles.length] = cssHelper.addStyle('@media ' + s.join('') + '{' + mql.getCssText() + '}', ts, false);
		}
	};

	var testMediaQueryLists = function (mqls, ts) {
		for (var i = 0; i < mqls.length; i++) {
			testMediaQueryList(mqls[i], ts);
		}
	};

	var testStylesheet = function (stsh) {
	    var amqs = stsh.getAttrMediaQueries();
	    var allPassed = false;
	    var t = {};
		for (var i = 0; i < amqs.length; i++) {
			if (testMediaQuery(amqs[i])) {
				t[amqs[i].getMediaType()] = amqs[i].getExpressions().length > 0;
			}
		}
		var ts = [], tswe = [];
		for (var n in t) {
			if (t.hasOwnProperty(n)) {
				ts[ts.length] = n;
				if (t[n]) {
				    tswe[tswe.length] = n
				}
			    if (n === 'all') {
			        allPassed = true;
                }
			}
		}
		if (tswe.length > 0) { // types with query expressions that passed the test
		    styles[styles.length] = cssHelper.addStyle(stsh.getCssText(), tswe, false);
		}
		var mqls = stsh.getMediaQueryLists();
		if (allPassed) {
		    // If 'all' in media attribute passed the test, then test all @media types in linked CSS and create style with those types.
		    testMediaQueryLists(mqls);
		}
		else {
		    // Or else, test only media attribute types that passed the test and also 'all'.
		    // For positive '@media all', create style with attribute types that passed their test.
		    testMediaQueryLists(mqls, ts);
	    }
    };

	var testStylesheets = function (stshs) {
	    for (var i = 0; i < stshs.length; i++) {
	        testStylesheet(stshs[i]);
	    }
	    if (ua.ie) {
			// force repaint in IE
			document.documentElement.style.display = 'block';
			setTimeout(function () {
				document.documentElement.style.display = '';
			}, 0);
			// delay broadcast somewhat for IE
			setTimeout(function () {
				cssHelper.broadcast('cssMediaQueriesTested');
			}, 100);
		}
		else {
			cssHelper.broadcast('cssMediaQueriesTested');
		}
	};

	var test = function () {
		for (var i = 0; i < styles.length; i++) {
			cssHelper.removeStyle(styles[i]);
		}
		styles = [];
		cssHelper.stylesheets(testStylesheets);
	};

	var scrollbarWidth = 0;
	var checkForResize = function () {
		var cvpw = cssHelper.getViewportWidth();
		var cvph = cssHelper.getViewportHeight();

		// determine scrollbar width in IE, see resizeHandler
		if (ua.ie) {
			var el = document.createElement('div');
			el.style.position = 'absolute';
			el.style.top = '-9999em';
			el.style.overflow = 'scroll';
			document.body.appendChild(el);
			scrollbarWidth = el.offsetWidth - el.clientWidth;
			document.body.removeChild(el);
		}

		var timer;
		var resizeHandler = function () {
			var vpw = cssHelper.getViewportWidth();
			var vph = cssHelper.getViewportHeight();
			// check whether vp size has really changed, because IE also triggers resize event when body size changes
			// 20px allowance to accomodate short appearance of scrollbars in IE in some cases
			if (Math.abs(vpw - cvpw) > scrollbarWidth || Math.abs(vph - cvph) > scrollbarWidth) {
				cvpw = vpw;
				cvph = vph;
				clearTimeout(timer);
				timer = setTimeout(function () {
					if (!nativeSupport()) {
						test();
					}
					else {
						cssHelper.broadcast('cssMediaQueriesTested');
					}
				}, 500);
			}
		};

		window.onresize = function () {
			var x = window.onresize || function () {}; // save original
			return function () {
				x();
				resizeHandler();
			};
		}();
	};

	// prevent jumping of layout by hiding everything before painting <body>
    var docEl = document.documentElement;
	docEl.style.marginLeft = '-32767px';

	// make sure it comes back after a while
	setTimeout(function () {
		docEl.style.marginLeft = '';
	}, 5000);

	return function () {
		if (!nativeSupport()) { // if browser doesn't support media queries
			cssHelper.addListener('newStyleParsed', function (el) {
				testStylesheet(el.cssHelperParsed.stylesheet);
			});
			// return visibility after media queries are tested
			cssHelper.addListener('cssMediaQueriesTested', function () {
				// force repaint in IE by changing width
				if (ua.ie) {
					docEl.style.width = '1px';
				}
				setTimeout(function () {
					docEl.style.width = ''; // undo width
					docEl.style.marginLeft = ''; // undo hide
				}, 0);
				// remove this listener to prevent following execution
				cssHelper.removeListener('cssMediaQueriesTested', arguments.callee);
			});
			createMeter();
			test();
		}
		else {
			docEl.style.marginLeft = ''; // undo visibility hidden
		}
		checkForResize();
	};
}());


// bonus: hotfix for IE6 SP1 (bug KB823727)
try {
	document.execCommand('BackgroundImageCache', false, true);
} catch (e) {}
;
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});;
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});;
/*! Copyright (c) 2014 Arnaud Mondit (http://brindillesnomades.com)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 2.0.4
*
* Requires: jQuery 1.2.2+
*/
(function(e){e.fn.scrollsteps=function(t){function s(e){var t=e.deltaY;var s=e.deltaX;if(s==undefined||t==undefined){console.log("Could not identify delta of scrolling, is the jQuery Mousescroll plugin present?");return}var o=(new Date).getTime();if(o-n<i["transitionDuration"]){if(o-r<i["quietPeriodBetweenTwoScrollEvents"]){e.preventDefault();r=o;return}}r=o;e.preventDefault();if(t!=0){var u=t>0?"up":"down";if(u=="up"){i["up"](e)}else{i["down"](e)}}if(s!=0){var a=s<0?"left":"right";if(a=="left"){i["left"](e)}else{i["right"](e)}}n=o}var n=0;var r=0;var i={transitionDuration:2e3,up:null,down:null,left:null,right:null,quietPeriodBetweenTwoScrollEvents:400};e.extend(i,t);return this.each(function(){e(this).on("mousewheel",s)})}})(jQuery)
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
;
var content_slider_counter=0;(function(e){function t(e,t){this._constructor(e,t,0)}function n(n,i){var s=this;this.$element=e(n);this.$base=this.$element;this.$element.wrap('<div class="main_content_slider_wrapper">');this.$parent_wrapper=this.$element.parent();this.parent_wrapper_width=0;this.id=this.$element.attr("id");if(typeof this.id=="undefined"){content_slider_counter++;this.id="all_around_slider_"+content_slider_counter}this.options=e.extend({},e.fn.content_slider.defaults,i);if(this.options.main_circle_position==1){var o=this.options.circle_left_offset;this.options.circle_left_offset=0}if(this.options.main_circle_position==2){var u=this.options.minus_width;this.options.minus_width=0}if(this.options.main_circle_position>0){this.options.max_shown_items+=this.options.max_shown_items-1}if(this.options.border_on_off==0){this.options.arrow_width=this.options.small_arrow_width;this.options.arrow_height=this.options.small_arrow_height;this.options.activate_border_div=0;this.options.use_thin_arrows=0;this.options.small_border=0;this.options.big_border=0}if(this.options.use_thin_arrows==1){this.options.arrow_width=this.options.small_arrow_width;this.options.arrow_height=this.options.small_arrow_height}if(this.options.activate_border_div==1){this.options.small_pic_width+=this.options.small_border*2;this.options.small_pic_height+=this.options.small_border*2;this.options.big_pic_width+=this.options.big_border*2;this.options.big_pic_height+=this.options.big_border*2;this.options.small_border+=1;this.options.big_border+=1}if(this.options.keep_on_top_middle_circle)this.options.dinamically_set_class_id=1;if(this.options.hide_content==1)this.options.wrapper_text_max_height=0;if(this.options.content_margin_left!=0)e(this.options.text_object,this.$element).css("margin-left",this.options.content_margin_left+"px");this.have_text_label=0;this.have_text_label_up=0;this.have_text_label_down=0;this.lock=0;this.lock2=0;this.click=0;this.keep_going=0;this.going_counter=0;this.sum_movement=0;this.is_auto_play=0;this.dismiss_auto_play=0;if(this.options.hv_switch)this.last_mouse_x=this.options.y_offset;else this.last_mouse_x=0;this.show_mouse_move=0;this.max_show=this.options.max_shown_items+2;this.anim_counter=0;this.func=this.go_right;this.arrow_hidden_counter=0;this.clicked=0;this.speed=this.options.moving_speed;this.mid_elem=Math.floor(this.options.max_shown_items/2);this.max_pos=3;this.opration=0;this.offset=0;this.was_gone=0;this.number_of_items=0;this.slider_state=0;this.prettyPhoto_status=0;this.mouse_in_animation=0;this.hover_status=0;this.mouse_out_animation=0;this.minus=0;this.real_width=0;this.last_resolution_mode=0;this.last_resolution=0;this.under_600=0;this.mouse_state=0;this.mouse_moved=0;this.ignore_click_up=0;this.ignore_click_up2=0;this.ignore_click_down=0;var a=this.$element.offset();this.x_offset=a.left;this.y_offset=a.top;a=this.$parent_wrapper.offset();this.parent_x_offset=a.left;this.last_c={pos:0,master_click:1};this.first_touch_x=0;this.first_touch_y=0;this.first_scroll_y=0;this.is_touch_device="ontouchstart"in document.documentElement;this.last_height=this.options.wrapper_text_max_height;this.prettyPhoto_open_status=0;if(!this.options.top_offset)this.options.top_offset=Math.floor(this.options.big_pic_height/2)+this.options.big_border+1;if(this.options.hv_switch==1&&this.options.max_shown_items==1){this.options.left_offset+=4}this.math=new r(this.options.map.length,this.options.max_shown_items,this.mid_elem,this.options.active_item-this.mid_elem-1,0,this.options.child_div_width,this.options.big_pic_width,this.options.small_pic_width,this.options.small_pic_height,this.options.big_pic_width,this.options.big_pic_height,this.options.top_offset,this.options.small_border,this.options.big_border,this.options.arrow_width,this.options.arrow_height,this.options.container_class_padding,this.options.mode,this,this.options.left_offset);if(this.options.main_circle_position==1){var f=this.math._calculate_child_coordinates_by_n(this.mid_elem+1,0);var l=f.new_pos+this.options.left_offset;if(this.options.hv_switch==0){var c=this.options.arrow_width;if(this.options.border_on_off==0||this.options.use_thin_arrows==1)c=this.options.small_arrow_width}else{var c=this.options.arrow_height;if(this.options.border_on_off==0||this.options.use_thin_arrows==1)c=this.options.small_arrow_height;o+=4}this.options.circle_left_offset=0-(l-c);this.options.circle_left_offset+=o}var h;if(this.options.main_circle_position==2){h=this.math._calculate_child_coordinates_by_n(this.max_show-1,0);var p=h.new_pos+this.options.left_offset;var f=this.math._calculate_child_coordinates_by_n(this.mid_elem+2,0);var d=f.new_pos+this.options.left_offset;this.options.minus_width=p-d;this.options.minus_width+=u}if(this.options.hv_switch==0){h=this.math._calculate_child_coordinates_by_n(this.max_show-1,0);this.max_width=h.new_pos+this.options.left_offset;if(this.options.minus_width>0)this.max_width-=this.options.minus_width}else{this.max_width=this.options.wrapper_text_max_height}this.$parent_wrapper.css({"max-width":this.max_width+"px"});this.ret_values={height:0,width:0};this.ret_values.height=2*this.options.top_offset+this.options.shadow_offset;this.create_html();this.$prettyPhoto_div=e("div.image_more_info",this.$base);this.$prettyPhoto_a=e("a",this.$prettyPhoto_div);this.$prettyPhoto_img=e("img",this.$prettyPhoto_div);if(this.options.hide_prettyPhoto==0){this.$prettyPhoto_img.css({padding:"0px","background-color":this.options.prettyPhoto_color});if(this.options.prettyPhoto_img!="")this.$prettyPhoto_img.attr("src",this.options.prettyPhoto_img);if(this.options.allow_shadow==0){this.$prettyPhoto_div.css("box-shadow","0px 0px 0px #fff")}if(this.options.keep_on_top_middle_circle){this.$prettyPhoto_div.css("z-index",this.max_show+1)}}else{this.$prettyPhoto_div.hide()}this.$items=e("div."+this.options.picture_class,this.$base);if(this.options.allow_shadow==0){this.$items.css({"-moz-box-shadow":"0px 0px 0px #fff","-webkit-box-shadow":"0px 0px 0px #fff","box-shadow":"0px 0px 0px #fff"})}this.$left_arrow_class=e(this.options.left_arrow_class,this.$element);this.$right_arrow_class=e(this.options.right_arrow_class,this.$element);this.$left_arrow=e(this.options.left_arrow_class+" img",this.$element);this.$right_arrow=e(this.options.right_arrow_class+" img",this.$element);if(this.options.hide_arrows==0){if(this.options.border_on_off==0||this.options.use_thin_arrows==1){this.$left_arrow_class.addClass("circle_slider_no_border");this.$right_arrow_class.addClass("circle_slider_no_border")}if(this.options.use_thin_arrows==1){this.$left_arrow_class.addClass("circle_slider_no_border2_left")}if(this.options.border_on_off==1){this.$left_arrow.css("background",this.options.arrow_color);this.$right_arrow.css("background",this.options.arrow_color)}if(this.options.border_on_off==0||this.options.use_thin_arrows==1){if(this.options.hv_switch==0){this.$left_arrow.css({"z-index":"1000","margin-top":"15px"});this.$right_arrow.css({"z-index":"1000","margin-top":"15px"})}else{this.$left_arrow.css({"z-index":"1000","margin-left":"15px"});this.$right_arrow.css({"z-index":"1000","margin-left":"15px"})}}this._set_arrows_events()}else{this.$left_arrow_class.hide();this.$right_arrow_class.hide()}var v=0;this.items=new Array;e.each(this.$items,function(n,r){s.items[v]=new t(r,e.extend(s.options,{$parent:s.$element,parent_this:s,n:v}));v++});this.number_of_items=v;this._preset_all_children_parameters(0);this._align_arrows();this.last_middle=this.math._convert_position_to_image_array(0,this.mid_elem);if(this.options.max_shown_items==1&&this.options.hv_switch==0){this.$container.css("left","13px")}if(this.options.max_shown_items>1&&this.options.hv_switch==0&&this.options.border_on_off==0){this.$container.css("left","2px")}this._set_parent_window_size();this.mid=this._return_middle_position_of_content();this.slider_text=e("."+this.options.left_text_class,this.$element);this.max_size=Math.floor((this.options.wrapper_text_max_height-this.ret_values.height-45)/2);this.orig_max_size=this.max_size;if(this.options.max_shown_items>1&&this.options.hv_switch==0){if(this.options.border_on_off==1)e(this.options.text_object,this.$element).css("width",this.max_width-16+"px");else e(this.options.text_object,this.$element).css("width",this.max_width-22+"px")}e(window).resize(e.proxy(this._resize,this));this._resize();var m=this.$container.offset();if(this.options.hv_switch)this.offset=m.top;else this.offset=m.left+this.minus;if(this.options.hv_switch)this._set_text_div_width_ver();else this._set_text_div_width_hor();this.show_text(this.math._convert_position_to_image_array(0,this.mid_elem));this._set_prettyPhoto_div_position();if(this.options.enable_mousewheel==1){this.$container.bind("mousewheel",function(e,t,n,r){e.preventDefault();if(t==-1)s.public_go_left();else s.public_go_right()})}if(this.options.auto_play)this.start_auto_play();if(this.is_touch_device)this._start_main_hover();e(window).on("keydown",e.proxy(this.keypress,this));e(window).on("hashchange",e.proxy(this.hashchange,this));if(this.options.hv_switch==0&&this.options.border_on_off==1&&this.options.use_thin_arrows==1){this.$left_arrow.css("margin-left","0px")}}function r(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b){var w=this;this.parent_this=y;this.image_array_lenght=e;this.visible_window_lenght=t;this.div_window_lenght=this.visible_window_lenght+2;this.beginning_position_number=-1;this.n_img_offset=r;this.begining_n_img_offset2=r;this.position_n_offset=i;this.element_width=s;this.master_element_width=o;this.master_element_height=l;this.current_mid_after_ratio=1;this.max_show=this.visible_window_lenght;this.sum_movement=0;this.mid_elem=n;this.left_offset=b;this.small_pic_width=u;this.small_pic_height=a;this.big_pic_width=f;this.big_pic_height=l;this.top_offset=c;this.small_border=h;this.big_border=p;this.arrow_width=d;this.arrow_height=v;this.container_padding=m;this.mode=g}t.prototype={$:function(e){return this.$element.find(e)},_constructor:function(t,n,r){var i=this;this.$element=e(t);this.$base=this.$element;this.$parent=n.$parent;this.options=n;this.n=n.n;this.parent_this=n.parent_this;this.have_element=1;this.$image=e("img",this.$element);this.$border_div=e("div."+this.options.border_class,this.$element);this.image_src=this.$image.attr("src");this.real_i=this.$image.attr("class");var s=this.real_i.substring(15);this.real_i=parseInt(s,10);if(this.parent_this.have_text_label_up){this.upper_text_label_show=this.options.map[this.real_i].upper_text_label_show;this.upper_text_label=this.options.map[this.real_i].upper_text_label;this.upper_text_label_style=this.options.map[this.real_i].upper_text_label_style;this.$upper_text=this.$element.next("div.all_around_text_up");if(this.$upper_text.length){this.$upper_text_span=e("span",this.$upper_text)}}if(this.parent_this.have_text_label_down){this.lower_text_label_show=this.options.map[this.real_i].lower_text_label_show;this.lower_text_label=this.options.map[this.real_i].lower_text_label;this.lower_text_label_style=this.options.map[this.real_i].lower_text_label_style;this.$lower_text=this.$element.nextAll("div.all_around_text_down:first");if(this.$lower_text.length){this.$lower_text_span=e("span",this.$lower_text)}}this.turn_counter=0;this.last_mouse_x=0;this.show_mouse_move=0;this.sum_movement=0;this.mouse_in_animation=0;this.hover_status=0;this.mouse_out_animation=0;this.positions=0;this.max=this.parent_this.max_show;this.position_in_slider=this.n;this.marg_left=Math.floor((this.options.big_pic_width-this.options.small_pic_width)/2);this.marg_top=Math.floor((this.options.big_pic_height-this.options.small_pic_height)/2);this.$element.mousedown(e.proxy(this._mouse_down,this));this.$element.mouseup(e.proxy(this._mouse_up,this));this.$element.mouseleave(e.proxy(this._mouse_leave,this));this.$element.mousemove(e.proxy(this._mouse_move,this));this.$image.mousedown(e.proxy(this._mouse_down,this));this.$image.mouseup(e.proxy(this._mouse_up,this));if(this.options.dinamically_set_position_class){this.$element.addClass("all_around_position_"+this.position_in_slider)}},_set_img:function(e,t){var n=0;var r=0;var i="";if(this.options.activate_border_div==0&&this.options.border_on_off==1){n=10;r=10}if(this.parent_this.options.hv_switch==0)i="width: "+(this.options.small_pic_width+r)+"px; ";if(this.parent_this.have_text_label_up){this.upper_text_label_show=this.options.map[t].upper_text_label_show;this.upper_text_label=this.options.map[t].upper_text_label;this.upper_text_label_style=this.options.map[t].upper_text_label_style;this.$upper_text_span.html(this.upper_text_label);this.$upper_text_span.attr("style",i+this.upper_text_label_style)}if(this.parent_this.have_text_label_down){this.lower_text_label_show=this.options.map[t].lower_text_label_show;this.lower_text_label=this.options.map[t].lower_text_label;this.lower_text_label_style=this.options.map[t].lower_text_label_style;this.$lower_text_span.html(this.lower_text_label);if(this.parent_this.options.hv_switch==0)this.$lower_text_span.attr("style",i+this.lower_text_label_style)}this.image_src=e;this.$image.attr("src",e);if(this.options.dinamically_set_class_id){if(typeof t!="undefined"){if(t!=this.real_i){this.$element.removeClass("all_around_circle_"+this.real_i);this.real_i=t;this.$image.attr("class","all_around_img_"+t);this.$element.addClass("all_around_circle_"+this.real_i)}}}},_set_pos_size:function(e,t,n,r,i,s,o,u){var a,f;var l=this.options.border_color;var c=5;var h=0;if(this.options.activate_border_div==0&&this.options.border_on_off==1)h=12;if(this.options.border_on_off==0)s=0;this.current_border=s;if(!o){if(this.options.border_radius==-1)a=r;else{if(this.options.radius_proportion){var p=this.options.big_pic_width/this.options.border_radius;var d=r/p;a=d}else{a=this.options.border_radius}}if(this.parent_this.options.hv_switch){if(this.options.activate_border_div){this.$element.css({left:n,top:e,width:r,height:i,"border-radius":a,border:l+" solid 0px"});this.$border_div.css({width:r+2,height:i+2,"border-radius":a,border:l+" solid "+s+"px"})}else{this.$element.css({left:n,top:e,width:r,height:i,"border-radius":a,border:l+" solid "+s+"px"})}if(typeof this.parent_this.default_circle_top=="undefined")this.parent_this.default_circle_top=n-c;if(this.parent_this.have_text_label_up){this.$upper_text.css({top:e,left:n-c-this.parent_this.default_circle_top,width:this.parent_this.default_circle_top})}if(this.parent_this.have_text_label_down){if(r==this.options.big_pic_width){h+=10;if(this.options.activate_border_div==1)h+=15}this.$lower_text.css({top:e,left:n+i+c+h,width:this.parent_this.default_circle_top})}if(this.parent_this.have_text_label){var v=0;var m=0;var g=0;if(this.parent_this.have_text_label_up){this.$upper_text_span.css("width",this.parent_this.default_circle_top);v=this.$upper_text.height();m=this.$upper_text_span.height()}if(m>0)g=v/2-m/2;var y=0;var b=0;var w=0;if(this.parent_this.have_text_label_down){this.$lower_text_span.css("width",this.parent_this.default_circle_top);y=this.$lower_text.height();b=this.$lower_text_span.height()}if(b>0)w=y/2-b/2;if(this.parent_this.have_text_label_up)this.$upper_text_span.css("top",g+"px");if(this.parent_this.have_text_label_down)this.$lower_text_span.css("top",w+"px")}}else{if(this.options.activate_border_div){this.$element.css({left:e,top:n,width:r,height:i,"border-radius":a,border:l+" solid 0px"});this.$border_div.css({width:r+2,height:i+2,"border-radius":a,border:l+" solid "+s+"px"})}else{this.$element.css({left:e,top:n,width:r,height:i,"border-radius":a,border:l+" solid "+s+"px"})}if(typeof this.parent_this.default_circle_top=="undefined")this.parent_this.default_circle_top=n-c;if(this.parent_this.have_text_label)f=r-(r-this.options.small_pic_width)/2-this.options.small_pic_width;if(this.parent_this.have_text_label_up){this.$upper_text.css({left:e+f,top:n-c-this.parent_this.default_circle_top,height:this.parent_this.default_circle_top})}if(this.parent_this.have_text_label_down){if(r==this.options.big_pic_width){h+=10;if(this.options.activate_border_div==1)h+=15}this.$lower_text.css({left:e+f,top:n+i+c+h,height:this.parent_this.default_circle_top})}}this.$image.css({width:r,height:i,"border-radius":a})}else{if(this.options.border_radius==-1)a=this.parent_this.options.big_pic_width;else{if(this.options.radius_proportion){var p=this.options.big_pic_width/this.options.border_radius;var d=r/p;a=d}else{a=this.options.border_radius}}if(this.options.activate_border_div){this.$element.css({"border-radius":a+"px"});this.$border_div.css({"border-radius":a+"px"})}else{this.$element.css({"border-radius":a+"px"})}this.$image.css({"border-radius":a+"px"});if(this.parent_this.options.hv_switch){if(this.options.activate_border_div){this.$element.animate({left:n,top:e,width:r,height:i,"border-width":"0px"},t,this.options.moving_easing,u);this.$border_div.animate({width:r+2,height:i+2,"border-width":s+"px"},t,this.options.moving_easing)}else{this.$element.animate({left:n,top:e,width:r,height:i,"border-width":s+"px"},t,this.options.moving_easing,u)}this.$image.animate({width:i,height:r},t,this.options.arrow_easing,u);if(typeof this.parent_this.default_circle_top=="undefined")this.parent_this.default_circle_top=n-c;if(this.parent_this.have_text_label_up){this.$upper_text.animate({top:e,left:n-c-this.parent_this.default_circle_top,width:this.parent_this.default_circle_top},t,this.options.moving_easing)}if(this.parent_this.have_text_label_down){if(r==this.options.big_pic_width){h+=10;if(this.options.activate_border_div==1)h+=15}this.$lower_text.animate({top:e,left:n+i+c+h,width:this.parent_this.default_circle_top},t,this.options.moving_easing)}if(this.parent_this.have_text_label){var v=0;var m=0;var g=0;if(this.parent_this.have_text_label_up){this.$upper_text_span.css("width",this.parent_this.default_circle_top);v=this.$upper_text.height();m=this.$upper_text_span.height()}if(m>0)g=v/2-m/2;var y=0;var b=0;var w=0;if(this.parent_this.have_text_label_down){this.$lower_text_span.css("width",this.parent_this.default_circle_top);y=this.$lower_text.height();b=this.$lower_text_span.height()}if(b>0)w=y/2-b/2;if(this.parent_this.have_text_label_up)this.$upper_text_span.animate({top:g+"px"},t,this.options.moving_easing);if(this.parent_this.have_text_label_down)this.$lower_text_span.css({top:w+"px"})}}else{if(this.options.activate_border_div){this.$element.animate({left:e,top:n,width:r,height:i,"border-width":"0px"},t,this.options.moving_easing,u);this.$border_div.animate({width:r+2,height:i+2,"border-width":s+"px"},t,this.options.moving_easing)}else{this.$element.animate({left:e,top:n,width:r,height:i,"border-width":s+"px"},t,this.options.moving_easing,u)}this.$image.animate({width:r,height:i},t,this.options.arrow_easing,u);if(this.parent_this.have_text_label)f=r-(r-this.options.small_pic_width)/2-this.options.small_pic_width;if(this.parent_this.have_text_label_up){this.$upper_text.animate({left:e+f,top:n-c-this.parent_this.default_circle_top,height:this.parent_this.default_circle_top},t,this.options.moving_easing)}if(this.parent_this.have_text_label_down){if(r==this.options.big_pic_width){h+=10;if(this.options.activate_border_div==1)h+=15}this.$lower_text.animate({left:e+f,top:n+i+c+h,height:this.parent_this.default_circle_top},t,this.options.moving_easing)}}}},_mouse_down:function(e){e.preventDefault();if(this.options.hv_switch)var t=e.pageY-this.parent_this.y_offset-this.options.circle_left_offset;else var t=e.pageX-this.parent_this.x_offset+this.parent_this.minus-this.options.circle_left_offset;var n=this.parent_this.math._convert_x_position_to_n(t);if(n.master_click==1)return;this._mouse_leave(e)},_mouse_leave:function(e){e.preventDefault();if(this.options.hover_movement==0||this.parent_this.show_mouse_move==1||this.parent_this.slider_state==1)return;if(this.mouse_out_animation==1||this.hover_status==0)return;if(this.mouse_in_animation==1){this.$element.stop();this.$image.stop();if(this.options.activate_border_div)this.$border_div.stop();this.mouse_in_animation=0}if(this.element_top<1){this.hover_status=0;this.mouse_in_animation=0;this.mouse_out_animation=0;return}this.hover_status=1;this.mouse_out_animation=1;this._end_hover2()},_end_hover2:function(){this.$element.animate({left:this.element_left+"px",top:this.element_top+"px",width:this.element_width+"px",height:this.element_height+"px"},this.options.hover_speed,this.options.hover_easing,e.proxy(this._hover_ended2,this));if(this.options.activate_border_div){this.$border_div.animate({width:this.element_width+2+"px",height:this.element_height+2+"px"},this.options.hover_speed,this.options.hover_easing)}this.$image.animate({width:this.image_width+"px",height:this.image_height+"px"},this.options.hover_speed,this.options.hover_easing)},_hover_ended2:function(){this.hover_status=0;this.mouse_out_animation=0},_mouse_move:function(e){e.preventDefault();if(this.options.hover_movement==0||this.parent_this.show_mouse_move==1||this.parent_this.slider_state==1)return;if(this.mouse_in_animation==1||this.hover_status==2)return;if(this.mouse_out_animation==1){this.$element.stop();this.$image.stop();if(this.options.activate_border_div)this.$border_div.stop();this.mouse_out_animation=0}if(this.options.hv_switch)var t=e.pageY-this.parent_this.y_offset-this.options.circle_left_offset;else var t=e.pageX-this.parent_this.x_offset+this.parent_this.minus-this.options.circle_left_offset;var n=this.parent_this.math._convert_x_position_to_n(t);if(n.master_click==1)return;this.hover_status=1;this.mouse_in_animation=1;this._start_hover()},_calculate_hovers:function(){this.positions=1;hover_movement_middle=Math.floor(this.options.hover_movement/2);hover_movement=this.options.hover_movement;hover_movement2=hover_movement*2;var e=this.$element.position();pos2=this.$image.position();this.element_top=e.top;this.element_left=e.left;this.element_width=this.$element.width();this.element_height=this.$element.height();this.image_top=pos2.top;this.image_left=pos2.left;this.image_height=this.$image.height();this.image_width=this.$image.width();this.element_top_middle=this.element_top-hover_movement_middle;this.element_left_middle=this.element_left-hover_movement_middle;this.element_width_middle=this.element_width+hover_movement;this.element_height_middle=this.element_height+hover_movement;this.image_width_middle=this.image_width+hover_movement;this.image_height_middle=this.image_height+hover_movement;this.element_top_end=this.element_top-hover_movement;this.element_left_end=this.element_left-hover_movement;this.element_width_end=this.element_width+hover_movement2;this.element_height_end=this.element_height+hover_movement2;this.image_width_end=this.image_width+hover_movement2;this.image_height_end=this.image_height+hover_movement2},_start_hover:function(){if(this.positions==0){this._calculate_hovers()}if(this.element_top<3){this.hover_status=0;this.mouse_in_animation=0;this.mouse_out_animation=0;return}this.$element.animate({left:this.element_left_end+"px",top:this.element_top_end+"px",width:this.element_width_end+"px",height:this.element_height_end+"px"},this.options.hover_speed,this.options.hover_easing,e.proxy(this._end_hover,this));if(this.options.activate_border_div){this.$border_div.animate({width:this.element_width_end+2+"px",height:this.element_height_end+2+"px"},this.options.hover_speed,this.options.hover_easing)}this.$image.animate({width:this.image_width_end+"px",height:this.image_height_end+"px"},this.options.hover_speed,this.options.hover_easing)},_end_hover:function(){this.$element.animate({left:this.element_left_middle+"px",top:this.element_top_middle+"px",width:this.element_width_middle+"px",height:this.element_height_middle+"px"},this.options.hover_speed,this.options.hover_easing,e.proxy(this._hover_ended,this));if(this.options.activate_border_div){this.$border_div.animate({width:this.element_width_middle+2+"px",height:this.element_height_middle+2+"px"},this.options.hover_speed,this.options.hover_easing)}this.$image.animate({width:this.image_width_middle+"px",height:this.image_height_middle+"px"},this.options.hover_speed,this.options.hover_easing)},_hover_ended:function(){this.hover_status=2;this.mouse_in_animation=0},reset_positions:function(){if(this.positions==0)return;if(this.mouse_in_animation==1||this.mouse_out_animation==1){this.$element.stop();this.$image.stop();if(this.options.activate_border_div)this.$border_div.stop()}if(this.parent_this.mouse_moved==0){this.$element.css({left:this.element_left+"px",top:this.element_top+"px",width:this.element_width+"px",height:this.element_height+"px"});if(this.options.activate_border_div){this.$border_div.css({width:this.element_width+2+"px",height:this.element_height+2+"px"})}this.$image.css({width:this.image_width+"px",height:this.image_height+"px"})}this.positions=0;this.mouse_in_animation=0;this.hover_status=0;this.mouse_out_animation=0},value_reset:function(){this.positions=0;this.mouse_in_animation=0;this.hover_status=0;this.mouse_out_animation=0}};n.prototype={$:function(e){return this.$element.find(e)},hashchange:function(){var t=window.location.hash;var n=t.length;var r=this.id.length;var i=-1;var s=0;var o="";if(t.substr(0,1)=="#")t=t.substr(1);if(t.substr(0,r)==this.id){var u=t.substr(r);if(u.substr(0,1)=="_")u=u.substr(1);var a=u;i=parseInt(a,10);var f;var l=0;if(isNaN(i)){i=-1;if(a.length>0){l=1;f=-1}else{l=0;f=-1}}else{f=a.indexOf("_")}if(f!=-1||l==1){o=a.substr(f+1);if(o=="scroll")s=1}if(s){e("html, body").animate({scrollTop:this.$element.offset().top-40},1e3)}if(i>-1){this.public_go_to_slide(i)}}},keypress:function(e){if(this.options.bind_arrow_keys){if(e.keyCode==39)this.public_go_left();if(e.keyCode==37)this.public_go_right()}},public_go_left:function(e,t){if(typeof e=="undefined")e=0;if(typeof t=="undefined")t=1;if(e==1&&this.is_auto_play==1&&this.dismiss_auto_play==1)return;if(this.slider_state==0){this._stop_children();this.slider_state=1;this._arrow_mouse_down();this._arrow_mouse_up();this.left_clicked_n(t)}},public_go_right:function(e,t){if(typeof e=="undefined")e=0;if(typeof t=="undefined")t=1;if(e==1&&this.is_auto_play==1&&this.dismiss_auto_play==1)return;if(this.slider_state==0){this._stop_children();this.slider_state=1;this._arrow_mouse_down();this._arrow_mouse_up();this.right_clicked_n(t)}},public_go_one_slide_left:function(e){this.public_go_right(0,1)},public_go_one_slide_right:function(e){this.public_go_left(0,1)},public_go_n_slides_left:function(e){this.public_go_right(0,e)},public_go_n_slides_right:function(e){this.public_go_left(0,e)},public_go_to_slide:function(e){var t=this.last_middle;var n=this.items_counts;var r=0;while(1){if(t==n)t=0;if(t==e)break;if(r>n*2){r=0;break}r++;t++}t=this.last_middle;n=this.items_counts;var i=0;while(1){if(t==-1)t=n-1;if(t==e)break;if(i>n*2){i=0;break}i++;t--}var s=0;var o="";if(r==0&&i==0)return;if(r<i){s=r;o="f"}if(r>i){s=i;o="b"}if(r==i){s=r;o="f"}if(s==0)return;if(o=="f")this.public_go_left(0,s);if(o=="b")this.public_go_right(0,s)},check_under_600:function(t){if(this.under_600==0&&t<600){this.under_600=1;this.height_backup=this.$element.height();this.$element.css({height:""});e(this.options.text_object,this.$element).css({"float":"",top:"0px",left:"0px",clear:"both"});if(this.options.small_resolution_max_height)this.$parent_wrapper.css({height:this.options.small_resolution_max_height})}if(this.under_600==1&&t>=600){this.under_600=0;this.$element.css({height:this.height_backup});e(this.options.text_object,this.$element).css({"float":"left",clear:""});if(this.options.small_resolution_max_height)this.$parent_wrapper.css({height:""})}},get_window_width:function(){if(this.options.responsive_by_available_space==1){var t=this.$parent_wrapper.parent().width();return t}else{return e(window).width()}},_resize:function(){var t=this.get_window_width();if(this.last_resolution==t)return;var n=e(this.$element).offset();this.x_offset=n.left;this.y_offset=n.top;n=this.$parent_wrapper.offset();this.parent_x_offset=n.left;var r=this.$container.offset();if(this.options.hv_switch){this.offset=r.top}else{this.offset=r.left+this.minus}if(t<this.options.big_pic_width+59){var i=t;x_ww=this.options.big_pic_width+59;var s=x_ww-i;var o=i/(x_ww/100);o-=4;o=o/100;this.$container.css("transform","scale("+o+", "+o+")");if(this.options.hv_switch==1)this.$container.css("left","-"+s/3+"px");e(".circle_slider_text_wrapper",this.$element).css("top","-"+s/2+"px")}else{this.$container.css("transform","scale(1,1)");if(this.options.hv_switch==1)this.$container.css("left","0px");e(".circle_slider_text_wrapper",this.$element).css("top","0px")}this.last_resolution=t;if(this.options.hv_switch){this.check_under_600(t);if(this.options.wrapper_text_max_height+13>=t){this.max_size=Math.floor((t-this.ret_values.height-45)/2)-5;if(this.under_600==1){if(this.options.vert_text_mode==1)this.max_size=Math.floor(this.options.big_pic_width/2);else this.max_size=this.options.child_div_width}this._set_parent_window_size(1,t);this._set_text_div_width_ver();this.show_text(this.last_middle,1);this.last_resolution_mode=2}else{if(this.last_resolution_mode==2){this.max_size=this.orig_max_size;this._set_parent_window_size(1,this.options.wrapper_text_max_height);this._set_text_div_width_ver();this.show_text(this.last_middle,1,1)}this.last_resolution_mode=1}return}else{var u=this.real_width;var a=e(this.options.text_field_id_prefix+this.last_middle,this.$element);if(u+13>=t){if(this.options.small_resolution_max_height)this.$parent_wrapper.css({height:this.options.small_resolution_max_height});if(this.options.main_circle_position==0){var f=u+13-t;var l=f;f=Math.floor(f/2)-8;this.minus=f;this.$element.css({left:"-"+f+"px"})}if(this.options.main_circle_position==2){var f=u+13-t;var l=f;f-=8;this.minus=f;this.$element.css({left:"-"+f+"px"})}$block=e("div.content_slider_text_block_wrap",a);if($block.length){if(typeof this.last_text_width=="undefined")this.last_text_width=a.width();a.css("width",t-10+"px")}this._set_text_div_width_hor();this._set_parent_window_size(1,t-10);this.last_resolution_mode=2}else{if(this.last_resolution_mode==2){if(this.options.small_resolution_max_height)this.$parent_wrapper.css({height:""});this.minus=0;this.$element.css({left:"0px"});this._set_text_div_width_hor();this._set_parent_window_size(1,this.real_width);if(typeof this.last_text_width=="undefined")this.last_text_width=this.real_width-5;a.css("width",this.last_text_width+"px")}this.last_resolution_mode=1}}},_set_text_div_width_hor:function(){$text_element=e(this.options.text_object,this.$element);var t=0;var n=this.mid;var r=this.get_window_width();if(this.minus>0)n=Math.floor(r/2)-5;if(this.options.activate_border_div==1)t=Math.floor(this.options.big_border/2);var i=0;if(this.options.max_shown_items>1&&this.options.hv_switch==0){if(this.options.border_on_off==1)i=8;else i=11}this.slider_text.css({width:n-this.options.left_text_class_padding-t-i+"px"});if(this.minus>0){$text_element.css({left:this.minus+"px"})}else{$text_element.css({left:"0px"})}},_set_text_div_width_ver:function(){if(!this.options.vert_text_mode){this.slider_text.css({width:this.max_size+"px"})}else{if(this.under_600==0)this.slider_text.css({left:this.ret_values.height+"px"})}},create_html:function(){this.items_counts=this.options.map.length;var t,n,r;var i='<div class="'+this.options.container_class+'"><div class="image_more_info"><a href="#"><img alt="" src="'+this.options.plugin_url+'images/more.png"></a></div>';this._start=-1;this._end=this.max_show-1;var s,r;var o,u,a,f,l,c;for(t=0;t<this.items_counts;t++){if(this.options.map[t].upper_text_label_show==1)this.have_text_label_up=1;if(this.options.map[t].lower_text_label_show==1)this.have_text_label_down=1}if(this.have_text_label_up||this.have_text_label_down)this.have_text_label=1;for(t=this._start;t<this._end;t++){r=this.math._convert_position_to_image_array(0,t);n=this.options.map[r].image;o=0;u="";a="";if(typeof this.options.map[r].upper_text_label_show!="undefined")o=this.options.map[r].upper_text_label_show;if(typeof this.options.map[r].upper_text_label!="undefined")u=this.options.map[r].upper_text_label;if(typeof this.options.map[r].upper_text_label_style!="undefined")a=this.options.map[r].upper_text_label_style;f=0;l="";c="";if(typeof this.options.map[r].lower_text_label_show!="undefined")f=this.options.map[r].lower_text_label_show;if(typeof this.options.map[r].lower_text_label!="undefined")l=this.options.map[r].lower_text_label;if(typeof this.options.map[r].lower_text_label_style!="undefined")c=this.options.map[r].lower_text_label_style;s=this.math._calculate_child_coordinates_by_n(t);i+=this._create_a_html_for_a_child(n,s.new_pos,r,o,u,a,f,l,c)}var h=this.options.max_shown_items*this.options.child_div_width;if(this.options.preload_all_images){for(t=0;t<this.items_counts;t++){e("<img/>")[0].src=this.options.map[t].image}}i+=this._create_arrows();if(this.options.hv_switch)i+='<div class="clear"></div></div>';else i+="</div>";this.$element.prepend(i);this.$container=e("div."+this.options.container_class,this.$element);this.$container.mousedown(e.proxy(this._mouse_down,this));this.$container.mouseup(e.proxy(this._mouse_up,this));this.$element.mouseenter(e.proxy(this._mouse_enter_widget,this));this.$element.mouseleave(e.proxy(this._mouse_leave_widget,this));this.$container.mouseleave(e.proxy(this._mouse_leave,this));this.$container.mousemove(e.proxy(this._mouse_move,this));this.$container.on("touchstart",e.proxy(function(t){t.preventDefault();var n=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];var r=0;if(typeof n=="undefined"||typeof n.clientY=="undefined")r=1;if(r==0){this.first_touch_x=n.clientX;this.first_touch_y=n.clientY;this.first_scroll_y=e("body").scrollTop();this.ignore_click_up2=0}this._mouse_down(n,1)},this));this.$container.on("touchend",e.proxy(function(e){e.preventDefault();var t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];this._mouse_up(t)},this));this.$container.on("touchmove",e.proxy(function(t){t.preventDefault();var n=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];n.touched=1;var r=e(this.$container).offset();var i=n.pageX-r.left+this.minus-this.options.circle_left_offset;var s=n.pageY-r.top;while(1){if(this.options.hv_switch==0&&this.options.enable_scroll_with_touchmove_on_horizontal_version==0)break;if(this.options.hv_switch==1&&this.options.enable_scroll_with_touchmove_on_vertical_version==0)break;if(typeof n=="undefined"||typeof n.clientY=="undefined")break;var o=0;if(n.clientX>0&&n.clientY>0)o=1;else break;var u=Math.abs(n.clientX-this.first_touch_x);var a=Math.abs(n.clientY-this.first_touch_y);if(u>a)break;if(a>10)this.ignore_click_up2=1;a=n.clientY-this.first_touch_y;var f=this.first_scroll_y-a;e("body").scrollTop(f);return}if(i<e(this.$container).width()&&i>0&&s<e(this.$container).height()&&s>0)this._mouse_move(n);else this._mouse_leave(n)},this))},_set_prettyPhoto_div_position:function(){this.prettyPhoto_left=this._return_middle_position_of_content()-Math.floor(this.options.big_pic_width/2)+Math.floor(this.options.big_pic_width*this.options.prettyPhoto_start);var e=0;if(this.options.top_offset>0)e=this.options.top_offset-Math.floor(this.options.big_pic_height/2);this.prettyPhoto_top=e+Math.floor(this.options.big_pic_height*this.options.prettyPhoto_start);if(this.options.hv_switch){this.$prettyPhoto_div.css({top:this.prettyPhoto_left+"px",left:this.prettyPhoto_top+"px"})}else{this.$prettyPhoto_div.css({left:this.prettyPhoto_left+"px",top:this.prettyPhoto_top+"px"})}},_set_parent_window_size:function(t,n){if(typeof t=="undefined")t=0;if(typeof n=="undefined")n=0;this.ret_values.height=2*this.options.top_offset+this.options.shadow_offset;var r=this.math._calculate_child_coordinates_by_n(this.max_show-1,0);if(this.options.minus_width>0)r.new_pos-=this.options.minus_width;r.new_pos2=r.new_pos+this.options.left_offset;wrapper_text_max_height=this.options.wrapper_text_max_height;var i=e(this.options.text_field_id_prefix+this.last_middle,this.$element);if(this.minus>0&&this.last_middle>-1){$block=e("div.content_slider_text_block_wrap",i);if($block.length){if(typeof this.last_text_width=="undefined")this.last_text_width=i.width();var s=this.get_window_width();i.css("width",s-10+"px")}}var o;if(this.options.hide_content==0)o=i.height();else o=0;var u=this.$parent_wrapper.height();var a=this.ret_values.height+o+10;if(a>wrapper_text_max_height)wrapper_text_max_height=a;if(t){if(!this.options.hv_switch){if(n!=0){this.$parent_wrapper.css({width:n+"px"});this.parent_wrapper_width=n;if(this.options.main_circle_position!=0)e(this.options.text_object,this.$element).css("width",n+"px");if(this.options.max_shown_items==1&&this.options.hv_switch==0){this.$container.css("left","3px")}}this.$element.css({height:wrapper_text_max_height+"px"});return}else{this.$element.css({width:n+"px"});return}}if(r.new_pos<=0)return;this.container_height=this.ret_values.height;if(this.options.hv_switch){this.$container.css({height:r.new_pos+"px",width:this.ret_values.height+"px"});this.$element.css({height:r.new_pos2+"px",width:this.options.wrapper_text_max_height+"px"})}else{this.$container.css({width:r.new_pos+"px",height:this.ret_values.height+"px"});this.$element.css({width:r.new_pos2+"px",height:wrapper_text_max_height+"px"});if(this.real_width==0)this.real_width=r.new_pos2}this.ret_values.width=r.new_pos},_return_container_width_height:function(){return this.ret_values},_return_middle_position_of_content:function(){var e=this.math._calculate_child_coordinates_by_n(this.mid_elem+1,0);e.new_pos+=Math.floor(this.options.big_pic_width/2)+this.options.big_border;return e.new_pos},_create_arrows:function(){var e;if(this.options.hv_switch){if(this.options.border_on_off==0||this.options.use_thin_arrows==1){e='<div class="circle_slider_nav_left"><img src="'+this.options.plugin_url+'images/left_vertical2.png" alt="left" /></div>';e+='<div class="circle_slider_nav_right"><img src="'+this.options.plugin_url+'images/right_vertical2.png" alt="right" /></div>'}else{e='<div class="circle_slider_nav_left"><img src="'+this.options.plugin_url+'images/left_vertical.png" alt="left" /></div>';e+='<div class="circle_slider_nav_right"><img src="'+this.options.plugin_url+'images/right_vertical.png" alt="right" /></div>'}}else{if(this.options.border_on_off==0||this.options.use_thin_arrows==1){e='<div class="circle_slider_nav_left"><img src="'+this.options.plugin_url+'images/left2.png" alt="left" /></div>';e+='<div class="circle_slider_nav_right"><img src="'+this.options.plugin_url+'images/right2.png" alt="right" /></div>'}else{e='<div class="circle_slider_nav_left"><img src="'+this.options.plugin_url+'images/left.png" alt="left" /></div>';e+='<div class="circle_slider_nav_right"><img src="'+this.options.plugin_url+'images/right.png" alt="right" /></div>'}}return e},_hide_arrows:function(t){if(this.options.border_on_off==0||this.options.use_thin_arrows==1)move_more=4;else move_more=0;if(t){this.hide_text(this.math._convert_position_to_image_array(0,this.mid_elem),1);this.arrow_hidden_counter=0;if(this.options.hv_switch){this.$left_arrow.animate({top:this.options.arrow_width+move_more},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_hidden,this));this.$right_arrow.animate({top:-this.options.arrow_width},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_hidden,this))}else{this.$left_arrow.animate({left:this.options.arrow_width+move_more},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_hidden,this));this.$right_arrow.animate({left:-this.options.arrow_width},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_hidden,this))}}else{this.hide_text(this.math._convert_position_to_n(this.mid_elem-2),0);if(this.options.hv_switch){this.$left_arrow.css({top:this.options.arrow_width+move_more});this.$right_arrow.css({top:-this.options.arrow_width})}else{this.$left_arrow.css({left:this.options.arrow_width+move_more});this.$right_arrow.css({left:-this.options.arrow_width})}}},_arrows_hidden:function(){if(this.arrow_hidden_counter>=1){this.func();this.arrow_hidden_counter=0}else this.arrow_hidden_counter++},_arrows_shown:function(){this.clicked=0},_show_arrows:function(){this.slider_state=0;var t=0;if(this.options.hv_switch){if(this.options.border_on_off==0||this.options.use_thin_arrows==1)t=34;this.$left_arrow.animate({top:0},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_shown,this));this.$right_arrow.animate({top:t+"px"},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_shown,this))}else{if(this.options.border_on_off==0||this.options.use_thin_arrows==1)t=4;this.$left_arrow.animate({left:0},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_shown,this));this.$right_arrow.animate({left:t+"px"},this.options.arrow_speed,this.options.arrow_easing,e.proxy(this._arrows_shown,this))}this.show_text(this.math._convert_position_to_image_array(0,this.mid_elem));if(this.last_c.master_click==1||this.is_touch_device)this._start_main_hover();this.$element.trigger("open",[this.last_middle])},_align_arrows:function(){var e=this.math._calculate_arrows_positions();if(this.options.hv_switch){this.$left_arrow_class.css({top:e.first_arrow_x,left:e.arrow_y});this.$right_arrow_class.css({top:e.second_arrow_x,left:e.arrow_y})}else{this.$left_arrow_class.css({left:e.first_arrow_x,top:e.arrow_y});this.$right_arrow_class.css({left:e.second_arrow_x,top:e.arrow_y})}},_set_arrows_events:function(){var t=this;this.$prettyPhoto_img.on("touchstart",function(t){t.preventDefault();t.stopPropagation();e(this).click()});this.$prettyPhoto_img.on("touchend",function(e){e.preventDefault();e.stopPropagation()});this.$prettyPhoto_img.mouseup(function(e){e.preventDefault();e.stopPropagation()});this.$prettyPhoto_img.mousedown(function(e){e.preventDefault();e.stopPropagation()});this.$prettyPhoto_img.click(function(n){var r=t.$prettyPhoto_a.attr("rel");if(r=="prettyPhoto"){var i=t.$prettyPhoto_a.attr("href");n.preventDefault();n.stopPropagation();if(t.is_auto_play==1){t.dismiss_auto_play=1;t.prettyPhoto_open_status=1}e.fn.prettyPhoto({callback:function(){t.prettyPhoto_open_status=0}});e.prettyPhoto.open(i)}});this.$left_arrow_class.click(e.proxy(function(e){e.preventDefault();e.stopPropagation();this.public_go_right()},this));this.$right_arrow_class.click(e.proxy(function(e){e.preventDefault();e.stopPropagation();this.public_go_left()},this));this.$left_arrow_class.on("touchstart",e.proxy(function(e){e.preventDefault();e.stopPropagation();this.public_go_right()},this));this.$left_arrow_class.on("touchend",e.proxy(function(e){e.preventDefault();e.stopPropagation()},this));this.$right_arrow_class.on("touchstart",e.proxy(function(e){e.preventDefault();e.stopPropagation();this.public_go_left()},this));this.$right_arrow_class.on("touchend",e.proxy(function(e){e.preventDefault();e.stopPropagation()},this));this.$left_arrow_class.mouseup(e.proxy(function(e){e.preventDefault();e.stopPropagation()},this));this.$right_arrow_class.mousedown(e.proxy(function(e){e.preventDefault();e.stopPropagation()},this));this.$left_arrow_class.mousedown(e.proxy(function(e){e.preventDefault();e.stopPropagation()},this));this.$right_arrow_class.mousedown(e.proxy(function(e){e.preventDefault();e.stopPropagation()},this))},hide_text:function(t,n){$text_element=e(this.options.text_object,this.$element);this.last_parent_height=this.$parent_wrapper.height();if(this.options.small_resolution_max_height==0&&this.options.hv_switch&&this.under_600)this.$parent_wrapper.css("height",this.last_parent_height+"px");if(n)$text_element.fadeOut();else $text_element.hide()},show_text:function(t,n,r){if(typeof n=="undefined")n=0;if(typeof r=="undefined")r=0;this.last_middle=t;if(this.options.keep_on_top_middle_circle){var i=this.math._convert_position_to_n(this.mid_elem);this.items[i].$element.css("z-index",this.max_show)}if(typeof this.options.map[t].link_url!="undefined"){this.$prettyPhoto_a.attr("href",this.options.map[t].link_url)}else{this.$prettyPhoto_a.attr("href","")}if(typeof this.options.map[t].link_rel!="undefined"){this.$prettyPhoto_a.attr("rel",this.options.map[t].link_rel)}else{this.$prettyPhoto_a.attr("rel","")}if(typeof this.options.map[t].link_target!="undefined"){if(this.options.map[t].link_target=="")this.options.map[t].link_target="_self";this.$prettyPhoto_a.attr("target",this.options.map[t].link_target)}else{this.$prettyPhoto_a.attr("target","_self")}if(this.options.hide_content==1){if(typeof this.started=="undefined"){this.started=1;this.hashchange()}return}var s=e(this.options.text_field_id_prefix+t,this.$element);var o=e("div.circle_slider_text_wrapper_v2",s);if(o.length)this.options.vert_text_mode=1;else this.options.vert_text_mode=0;var u=e("."+this.options.left_text_class,s);if(this.options.small_resolution_max_height==0)this.$parent_wrapper.css("height","");if(n==0)s.fadeIn();if(this.options.hv_switch==0){if(this.minus>0)this._set_parent_window_size(1);else{if(this.options.automatic_height_resize){this.ret_values={height:0,width:0};this.ret_values.height=2*this.options.top_offset+this.options.shadow_offset;var a;if(this.options.hide_content==0)a=s.height();else a=0;var f=this.$parent_wrapper.height();var l=this.ret_values.height+a+10;if(l!=this.last_height){if(l<this.options.wrapper_text_max_height)l=this.options.wrapper_text_max_height;this.last_height=l;this.$element.animate({height:l+"px"},300,"linear")}}}}if(this.options.hv_switch){if(this.options.vert_text_mode){var c=s.width();if(c>=this.max_size||r){u.css({width:this.max_size*2+"px"})}var h=u.height();if(this.under_600==0)s.css({top:this.mid-h-this.options.left_text_class_padding+"px"})}else{$block=e("div.content_slider_text_block_wrap",s);if($block.length){var p;if(this.under_600==0){var d=this.get_window_width();if(d>this.options.wrapper_text_max_height)p=this.options.wrapper_text_max_height-this.container_height-2;else p=d-this.container_height-20}else p=this.options.big_pic_width;s.css({width:p+"px"})}else s.css({width:""});var h=s.height();var v=this.mid-Math.floor(h/2);if(v<0)v=0;if(this.under_600==0)s.css({top:v+"px"})}}else{if(this.minus>0){var d=this.last_resolution;$block=e("div.content_slider_text_block_wrap",s);if($block.length){if(typeof this.last_text_width=="undefined")this.last_text_width=s.width();s.css("width",d-10+"px")}}}if(typeof this.started=="undefined"){this.started=1;this.hashchange()}},_preset_all_children_parameters:function(t,n){var r;var i;this.do_animate=t;var s;var o=new Array;for(s=0;s<this.max_show;s++){r=this.math._calculate_child_coordinates_by_n(s,this.operation);if(t)i=this.math._calculate_method_for_child_by_n(s,n);else i=0;if(this.options.keep_on_top_middle_circle||this.options.dinamically_set_position_class)o[s]={i:s,pos:r.new_pos};this.items[s]._set_pos_size(r.new_pos,this.speed,r.new_y_pos,r.new_siz.width,r.new_siz.height,r.new_border,i,e.proxy(this._animation_done,this))}if(this.options.keep_on_top_middle_circle||this.options.dinamically_set_position_class){o.sort(function(e,t){return e.pos-t.pos});var u=o.length;var a,f=this.mid_elem+1,l;for(s=0;s<u;s++){a=o[s].i;if(this.options.dinamically_set_position_class){this.items[a].$element.removeClass("all_around_position_"+this.items[a].position_in_slider);this.items[a].$element.addClass("all_around_position_"+s)}this.items[a].position_in_slider=s;if(this.options.keep_on_top_middle_circle){if(s<f)l=s;if(s==f)l=u;if(s>f)l=u-s-1;this.items[a].$element.css("z-index",l)}}}},_stop_children:function(){for(i=0;i<this.number_of_items;i++){this.items[i].reset_positions()}if(this.prettyPhoto_status){if(this.prettyPhoto_status==1){this.$prettyPhoto_div.stop();this.$prettyPhoto_img.stop()}this._end_main_hover2();this.prettyPhoto_status=0;this.hover_status=0;this.mouse_in_animation=0;this.mouse_out_animation=0}},_mouse_down:function(e,t){if(this.ignore_click_down){this.ignore_click_down=0;return}if(typeof t=="undefined")t=0;if(t==0)if(typeof e!="undefined")e.preventDefault();this.mouse_moved=0;if(this.hover_status!=0)this._end_main_hover2();if(typeof e!="undefined")if(typeof e.pageX!="undefined"){if(this.options.hv_switch)var n=e.pageY-this.offset-this.options.circle_left_offset;else var n=e.pageX-this.offset+this.minus-this.options.circle_left_offset}var r=n-this.last_mouse_x;this.last_mouse_x=n;this.slider_state=1;this.mouse_state=1;if(!this.clicked){this.show_mouse_move=1;this.clicked=1}var i=this.$container.offset();if(this.options.hv_switch){this.offset=i.top}else{this.offset=i.left+this.minus}this.was_gone=0},_mouse_up:function(e){if(this.ignore_click_up){this.ignore_click_up=0;return}this.mouse_state=0;this._stop_children();if(this.show_mouse_move){var t=1;this.show_mouse_move=0;var n=0;if(this.ignore_click_up2){this.ignore_click_up2=0;this.slider_state=0;this.clicked=0;n=1}if(Math.abs(this.math.sum_movement)==0&&!this.was_gone&&n==0){this.func=0;t=0;if(this.options.hv_switch)var r=this.math._change_master_position_by_x(e.pageY-this.offset-this.options.circle_left_offset);else var r=this.math._change_master_position_by_x(e.pageX-this.offset+this.minus-this.options.circle_left_offset);this.last_c=r;if(r.master_click&&n==0){var i=38;var s=20;if(this.options.border_on_off==1&&this.options.use_thin_arrows==0){i=48;s=30}if(r.dist_right>i&&r.dist_left>s){if(this.options.middle_click==1){t=1;this.going_counter=-1;r.pos=1}if(this.options.middle_click==2){t=1;this.going_counter=1;r.pos=-1}if(this.options.middle_click==0||this.options.middle_click==3){this.slider_state=0;this.clicked=0;if(this.options.middle_click==3){var o="";var u=0;if(typeof this.options.map[this.last_middle].main_link!="undefined")o=this.options.map[this.last_middle].main_link;if(typeof this.options.map[this.last_middle].main_link_target!="undefined")u=this.options.map[this.last_middle].main_link_target;if(o!=""){if(u==0)window.location=o;if(u==1)window.open(o)}}}}else{this.slider_state=0;this.clicked=0}}this.speed=(this.mid_elem-Math.abs(r.pos)+1)*this.options.moving_speed+this.options.moving_speed_offset;if(!t)this.going_counter=-r.pos;this.keep_going=1;if(r.pos<0){this.click=2;if(r.pos<-1)this.operation=1;else this.operation=0;this.func=this.go_right;this._hide_arrows(1)}if(r.pos>0){this.click=1;if(r.pos>1)this.operation=1;else this.operation=0;this.func=this.go_left;this._hide_arrows(1)}if(r.pos==0){this.keep_going=0}this._before_moving(this.going_counter);return}else{this._reorder();this.click=0}}},_before_moving:function(e){if(this.options.keep_on_top_middle_circle){e=e*-1;var t=this.math._convert_position_to_n(this.mid_elem+e);this.items[t].$element.css("z-index",100)}},_arrow_mouse_up:function(){this.keep_going=1;this.click=0;this.armd=0},_arrow_mouse_down:function(){this.armd=1;this.clicked=1},_arrow_mouse_leave:function(){if(this.armd){this.clicked=0;this.armd=0}},_mouse_move:function(t){this.mouse_moved=1;if(typeof t.touched=="undefined")t.preventDefault();var n=this.$container.offset();if(this.options.hv_switch){this.offset=n.top}else{this.offset=n.left+this.minus}var r=e(this.$element).offset();this.y_offset=r.top;var i,s;if(typeof t!="undefined")if(typeof t.pageX!="undefined"){if(this.options.hv_switch)i=t.pageY-this.offset-this.options.circle_left_offset;else i=t.pageX-this.offset+this.minus-this.options.circle_left_offset;s=i-this.last_mouse_x}if(this.show_mouse_move&&this.clicked){this._move_all(s*this.options.movement_coefficient);if(Math.abs(this.sum_movement)>=1&&!this.was_gone){this.was_gone=1;this._hide_arrows(0)}}this.last_mouse_x=i;if(this.show_mouse_move==1||this.slider_state==1)return;var o={pos:0,master_click:0};if(typeof t!="undefined")if(typeof t.pageX!="undefined"){if(this.options.hv_switch){i=t.pageY-this.y_offset-this.options.circle_left_offset}else{if(this.minus==0){i=t.pageX-this.x_offset-this.options.circle_left_offset}else{i=t.pageX-this.parent_x_offset+this.minus-this.options.circle_left_offset}}o=this.math._convert_x_position_to_n(i)}if(o.master_click==1){if(this.hover_status==2||this.mouse_in_animation==1)return;if(this.mouse_out_animation==1){this.$prettyPhoto_div.stop();this.$prettyPhoto_img.stop();this.mouse_out_animation=0}this.hover_status=1;this.mouse_in_animation=1;this._start_main_hover()}else{if(this.hover_status==2||this.hover_status==1&&this.mouse_out_animation==0)this._fake_mouse_leave()}},_start_main_hover:function(){if(this.$prettyPhoto_a.attr("href")=="")return;var t=this.prettyPhoto_left-this.options.prettyPhoto_movement-10;var n=this.prettyPhoto_top-this.options.prettyPhoto_movement-10;var r=this.options.prettyPhoto_width+3;this.prettyPhoto_status=1;if(this.options.hv_switch==0){this.$prettyPhoto_div.animate({left:t+"px",top:n+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._ending_main_hover,this))}else{this.$prettyPhoto_div.animate({left:n+"px",top:t+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._ending_main_hover,this))}this.$prettyPhoto_img.animate({width:r+"px",padding:"11px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing)},_ending_main_hover:function(){var t=this.prettyPhoto_left-this.options.prettyPhoto_movement;var n=this.prettyPhoto_top-this.options.prettyPhoto_movement;var r=this.options.prettyPhoto_width;if(this.options.hv_switch==0){this.$prettyPhoto_div.animate({left:t+"px",top:n+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._end_main_hover,this))}else{this.$prettyPhoto_div.animate({left:n+"px",top:t+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._end_main_hover,this))}this.$prettyPhoto_img.animate({width:r+"px",padding:"10px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing)},_end_main_hover:function(){this.prettyPhoto_status=2;this.hover_status=2;this.mouse_in_animation=0},_fake_mouse_leave:function(){if(this.$prettyPhoto_a.attr("href")=="")return;if(this.mouse_in_animation==1){this.$prettyPhoto_div.stop();this.$prettyPhoto_img.stop();this.mouse_in_animation=0}this.hover_status=1;this.mouse_out_animation=1;this._end_main_hover2()},_end_main_hover2:function(){var t=this.prettyPhoto_left;var n=this.prettyPhoto_top;this.prettyPhoto_status=1;if(this.options.hv_switch==0){this.$prettyPhoto_div.animate({left:t+"px",top:n+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._main_hover_ended,this))}else{this.$prettyPhoto_div.animate({left:n+"px",top:t+"px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing,e.proxy(this._main_hover_ended,this))}this.$prettyPhoto_img.animate({width:"0px",padding:"0px"},this.options.prettyPhoto_speed,this.options.prettyPhoto_easing)},_main_hover_ended:function(){this.prettyPhoto_status=0;this.hover_status=0;this.mouse_out_animation=0},_mouse_enter_widget:function(e){if(this.is_auto_play==1){this.dismiss_auto_play=1}},_mouse_leave_widget:function(e){if(this.prettyPhoto_open_status==0)this.dismiss_auto_play=0},_mouse_leave:function(e){if(this.show_mouse_move&&!this.click){this.show_mouse_move=0;this._reorder();this.click=0;this.show_mouse_move=0;this.mouse_state=0;for(i=0;i<this.number_of_items;i++){this.items[i].value_reset()}}if(this.hover_status==2||this.hover_status==1&&this.mouse_out_animation==0)this._fake_mouse_leave()},_reorder:function(){var e=this.math.sum_movement;this.speed=(this.mid_elem+1)*this.options.moving_speed+this.options.moving_speed_offset;if(Math.abs(this.math.sum_movement)<this.options.child_div_width/2){this.math._clear_movement();this._preset_all_children_parameters(1,0,1)}else{this.math._clear_movement();if(e<0){this.math._rotate_right(1);this._preset_all_children_parameters(1,0,1)}if(e>0){this.math._rotate_left(1);this._preset_all_children_parameters(1,1,1)}}this.sum_movement=0},_create_a_html_for_a_child:function(e,t,n,r,i,s,o,u,a){var f="";var l="",c="";if(a!="")a+=" ";if(s!="")s+=" ";var h=0;var p=0;if(this.options.activate_border_div==0&&this.options.border_on_off==1){h=10;p=10}if(this.options.activate_border_div)f='<div class="'+this.options.border_class+'"></div>';if(this.options.hv_switch==0){if(this.have_text_label_up){l='<div style="left: '+t+"px; width: "+(this.options.small_pic_width+p)+'px;" class="all_around_text_up"><span style=\''+s+"width: "+(this.options.small_pic_width+p)+'px;\' class="all_around_text_span_up">'+i+"</span></div>"}if(this.have_text_label_down){c='<div style="left: '+t+"px; width: "+(this.options.small_pic_width+p)+'px;" class="all_around_text_down"><span style=\''+a+"width: "+(this.options.small_pic_width+p)+'px;\' class="all_around_text_span_down">'+u+"</span></div>"}}else{if(this.have_text_label_up){l='<div style="left: 0px; top: '+t+"px; height: "+(this.options.small_pic_height+h)+'px;" class="all_around_text_up"><span style=\''+s+'\' class="all_around_text_span_up">'+i+"</span></div>"}if(this.have_text_label_down){c='<div style="left: 0px; top: '+t+"px; height: "+(this.options.small_pic_height+h)+'px;" class="all_around_text_down"><span style=\''+a+'\' class="all_around_text_span_down">'+u+"</span></div>"}}var d;if(this.options.hv_switch==0){d='<div class="'+this.options.picture_class+" all_around_circle_"+n+'" style="left: '+t+'px;">'+f+'<img src="'+e+'" class="all_around_img_'+n+'" /></div>'+l+c}else{d='<div class="'+this.options.picture_class+" all_around_circle_"+n+'" style="top: '+t+'px;">'+f+'<img src="'+e+'" class="all_around_img_'+n+'" /></div>'+l+c}return d},left_clicked:function(e){this.speed=(this.mid_elem+1)*this.options.moving_speed+this.options.moving_speed_offset;if(typeof e!="undefined")e.preventDefault();this.func=this.go_left;this.click=1;this.going_counter=-1;this.$element.trigger("next");this._animation_begin()},right_clicked:function(e){this.speed=(this.mid_elem+1)*this.options.moving_speed+this.options.moving_speed_offset;if(typeof e!="undefined")e.preventDefault();this.func=this.go_right;this.click=2;this.going_counter=1;this.$element.trigger("prev");this._animation_begin()},left_clicked_n:function(e,t){this.speed=(this.mid_elem+1)*this.options.moving_speed+this.options.moving_speed_offset;if(typeof t!="undefined")t.preventDefault();this.func=this.go_left;this.click=1;this.going_counter=0-e;this.$element.trigger("next");this._animation_begin()},right_clicked_n:function(e,t){this.speed=(this.mid_elem+1)*this.options.moving_speed+this.options.moving_speed_offset;if(typeof t!="undefined")t.preventDefault();this.func=this.go_right;this.click=2;this.going_counter=e;this.$element.trigger("prev");this._animation_begin()},go_right:function(){if(this.lock==1)return;this.lock=1;this.math.sum_movement=this.sum_movement=0;if(this.keep_going==1&&this.going_counter>0)this.going_counter--;this.anim_counter=0;this._set_first_left();this.math._rotate_left(1);this._preset_all_children_parameters(1,1)},go_left:function(){if(this.lock==1)return;this.lock=1;this.math.sum_movement=this.sum_movement=0;if(this.keep_going==1&&this.going_counter<0)this.going_counter++;this.anim_counter=0;this._set_first_right();this.math._rotate_right(1);this._preset_all_children_parameters(1,0)},_animation_begin:function(){this.show_mouse_move=0;this.anim_counter=0;this.keep_going=1;this.do_animate=1;this._before_moving(this.going_counter);this._hide_arrows(1)},_animation_done:function(){var e;if(this.do_animate)e=this.max_show+(this.max_show-3);else e=this.max_show+(this.max_show-2);if(this.anim_counter>=e){this.anim_counter=0;this.lock=0;if(this.click==1){if(this.keep_going!=0){if(this.going_counter!=0){this.operation=0;if(this.going_counter<-1)this.operation=1;this.go_left()}else{this.keep_going=0;this.click=0}}else{this.go_left()}}if(this.click==2){if(this.keep_going!=0){if(this.going_counter!=0){this.operation=0;if(this.going_counter>1)this.operation=1;this.go_right()}else{this.keep_going=0;this.click=0}}else{this.go_right()}}if(this.click==0){this._show_arrows();this.operation=0}return}this.anim_counter++},_move_all:function(e){var t=0;this._set_first_left();this._set_first_right();while(Math.abs(e)>=this.options.child_div_width){if(e>0){this.math._add_movement(this.options.child_div_width);this._set_first_left();e-=this.options.child_div_width}else{this.math._add_movement(-this.options.child_div_width);this._set_first_right();e+=this.options.child_div_width}}this.math._add_movement(e);if(e>0){this._set_first_left();t=1}else{this._set_first_right();t=0}this._preset_all_children_parameters(0,t);this.sum_movement=this.math.sum_movement},_set_first_right:function(){var e=this.math._next_right_image();this.items[this.math._next_right_n()]._set_img(this.options.map[e].image,e)},_set_first_left:function(){var e=this.math._next_left_image();this.items[this.math._next_left_n()]._set_img(this.options.map[e].image,e)},start_auto_play:function(){var e=this;this.dismiss_auto_play=0;this.is_auto_play=1;if(this.options.auto_play_direction==1)this.timeout_autoplay_handler=setInterval(function(){e.public_go_left(1)},e.options.auto_play_pause_time);else this.timeout_autoplay_handler=setInterval(function(){e.public_go_right(1)},e.options.auto_play_pause_time)},stop_auto_play:function(){this.dismiss_auto_play=1;if(this.is_auto_play==1){clearInterval(this.timeout_autoplay_handler)}this.is_auto_play=0},get_auto_play_status:function(){return this.is_auto_play},get_number_of_current_slide:function(){return this.last_middle}};r.prototype={_convert_n_to_position:function(e){return this._windowing(this.div_window_lenght,e-this.position_n_offset)+this.beginning_position_number},_convert_position_to_n:function(e){return this._windowing(this.div_window_lenght,e-this.beginning_position_number+this.position_n_offset)},_convert_position_to_image_array:function(e,t){return this._windowing(this.image_array_lenght,t-this.beginning_position_number+this.n_img_offset+this.position_n_offset+e*this.div_window_lenght)},_next_left_image:function(){return this._convert_position_to_image_array(0,this.beginning_position_number)},_next_right_image:function(){return this._convert_position_to_image_array(0,this.visible_window_lenght)},_next_left_n:function(){return this._convert_position_to_n(this.beginning_position_number)},_next_right_n:function(){return this._convert_position_to_n(this.visible_window_lenght)},_rotate_left:function(e){var t=this.position_n_offset;this.position_n_offset=this._windowing(this.div_window_lenght,this.position_n_offset-e);if(t<this.position_n_offset){this.n_img_offset=this._windowing(this.image_array_lenght,this.n_img_offset-Math.floor((Math.abs(e)+this.div_window_lenght)/this.div_window_lenght)*this.div_window_lenght)}},_rotate_right:function(e){var t=this.position_n_offset;this.position_n_offset=this._windowing(this.div_window_lenght,this.position_n_offset+e);if(t>this.position_n_offset){this.n_img_offset=this._windowing(this.image_array_lenght,this.n_img_offset+Math.floor((Math.abs(e)+this.div_window_lenght)/this.div_window_lenght)*this.div_window_lenght)}},_change_master_position_by_x:function(e){this.sum_movement=0;var t=this.mid_elem*this.element_width;var n=t+this.master_element_width+2*this.big_border+2*this.arrow_width;var r;if(e<=t){r=Math.floor(e/this.element_width);r=this.mid_elem-r;return{pos:-r,master_click:0}}if(e<n){return{pos:0,master_click:1,dist_left:e-t,dist_right:n-e}}e=e-n+this.element_width;r=Math.floor(e/this.element_width);return{pos:r,master_click:0}},_convert_x_position_to_n:function(e){var t=this.mid_elem*this.element_width;var n=t+this.master_element_width+2*this.big_border+2*this.arrow_width;var r;if(e<=t){r=Math.floor(e/this.element_width);r=this.mid_elem-r;return{pos:-r,master_click:0}}if(e<n){return{pos:0,master_click:1}}e=e-n+this.element_width;r=Math.floor(e/this.element_width);return{pos:r,master_click:0}},_calculate_child_size_by_ratio:function(e){var t=this.big_pic_width-this.small_pic_width;var n=this.big_pic_height-this.small_pic_height;var r;var i;t=t*e;t+=this.small_pic_width;n=n*e;n+=this.small_pic_height;r=Math.floor((this.big_pic_width-this.small_pic_width)/2)-Math.floor(t/2);i=Math.floor((this.big_pic_height-this.small_pic_height)/2)-Math.floor(n/2);return{width:t,height:n,margin_left:r,margin_top:i}},_calculate_arrows_positions:function(){var e=this.big_border;if(this.parent_this.options.activate_border_div)e=0;var t=this.mid_elem*this.element_width+Math.ceil(e)+this.left_offset+this.parent_this.options.circle_left_offset-1;var n=0;if(this.parent_this.options.border_on_off==0||this.parent_this.options.use_thin_arrows==1)n=15;var r=this.top_offset-Math.ceil(this.arrow_height/2)-n;if(this.parent_this.options.activate_border_div){t+=this.big_border;r-=this.big_border}if(this.parent_this.options.border_on_off==0||this.parent_this.options.use_thin_arrows==1){t-=e+7;r-=Math.ceil(e/2)+1}var i=this.mid_elem*this.element_width+this.master_element_width+this.arrow_width+e+this.left_offset+this.parent_this.options.circle_left_offset+1;if(this.parent_this.options.border_on_off==0&&this.parent_this.options.use_thin_arrows==0){i-=Math.ceil(e)+2}if(this.parent_this.options.use_thin_arrows==1){i-=Math.ceil(e)-1}if(this.parent_this.options.border_on_off==0||this.parent_this.options.use_thin_arrows==1){i+=1}if(this.parent_this.options.activate_border_div)i-=this.big_border;return{first_arrow_x:t,second_arrow_x:i,arrow_y:r}},_calculate_child_coordinates_by_n:function(e,t){var n=this._convert_n_to_position(e);if(typeof t=="undefined")t=0;var r=Math.abs(this.sum_movement);var i=r/this.element_width;var s=1-i;var o=0;var u=this.top_offset;var a;var f;var l=this.small_border;var c=this.element_width;var h=this.master_element_width;var p=this.master_element_width-this.element_width;var d=n*c+this.sum_movement;var v=i*p;var m=s*p;var g=this.element_width-this.small_pic_width;var y=this.master_element_width+2*this.arrow_width;var b=y-this.element_width;var w=this.element_width+i*b;var E=this.element_width+s*b;var S=i*this.arrow_width;var x=m+s*(this.arrow_width+g+2*this.big_border);var T=p+2*this.arrow_width;var N=s*this.arrow_width;var C=i*g;if(this.sum_movement<=0){if(n<this.mid_elem){o=d;a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}if(n==this.mid_elem){l=this.small_border+(this.big_border-this.small_border)*s;o=d+N;if(!t||this.mode==2){a=s;u=this.top_offset-Math.floor(this.small_pic_height/2)-(this.master_element_height-this.small_pic_height)/2*s-this.small_border-(this.big_border-this.small_border)*s}else{a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}if(n==this.mid_elem+1){l=this.small_border+(this.big_border-this.small_border)*i;o=d+E-this.element_width+(g+this.small_border)*s+this.arrow_width*i;if(!t||this.mode==2){a=i;u=this.top_offset-Math.floor(this.small_pic_height/2)-(this.master_element_height-this.small_pic_height)/2*i-this.small_border}else{a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}if(n>this.mid_elem+1){o=d+T+g+this.small_border;a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}else{if(n<this.mid_elem){o=d;a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}if(n==this.mid_elem){l=this.small_border+(this.big_border-this.small_border)*s;o=d+(2*this.arrow_width+this.master_element_width+g+this.small_border-this.element_width)-s*(1*this.arrow_width+this.master_element_width+g+this.big_border-this.small_border-this.element_width);if(!t||this.mode==2){a=s;u=this.top_offset-Math.floor(this.small_pic_height/2)-(this.master_element_height-this.small_pic_height)/2*s-this.small_border-(this.big_border-this.small_border)*s}else{a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}if(n==this.mid_elem-1){l=this.small_border+(this.big_border-this.small_border)*i;o=d+S;if(!t||this.mode==2){a=i;u=this.top_offset-Math.floor(this.small_pic_height/2)-(this.master_element_height-this.small_pic_height)/2*i-this.small_border}else{a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}if(n>this.mid_elem){o=d+T+g+this.small_border;a=0;u=this.top_offset-Math.floor(this.small_pic_height/2)-this.small_border}}f=this._calculate_child_size_by_ratio(a);return{new_pos:o+this.left_offset+this.parent_this.options.circle_left_offset,new_y_pos:u,new_border:l,new_siz:f}},_calculate_method_for_child_by_n:function(e,t){var n=this._convert_n_to_position(e);if(n==-1&&t==1)return 0;if(n==this.visible_window_lenght&&t==0)return 0;return 1},_add_movement:function(e){this.sum_movement+=e;if(Math.abs(this.sum_movement)>=this.element_width){if(this.sum_movement>=0){this._rotate_left(Math.floor(Math.abs(this.sum_movement)/this.element_width));this.sum_movement=this.sum_movement%this.element_width}else{this._rotate_right(Math.floor(Math.abs(this.sum_movement)/this.element_width));this.sum_movement=this.sum_movement%this.element_width}}},_clear_movement:function(){this.sum_movement=0},_windowing:function(e,t){return(e+t%e)%e}};e.fn.content_slider=function(t,r){var i=e(this),s=i.data("tooltip"),o=typeof t=="object"&&t;s||i.data("tooltip",s=new n(this,o));if(typeof r!=="undefined")return s[t](r);else{if(typeof t=="string"){return s[t]()}}};e.fn.content_slider.Constructor=n;e.fn.content_slider.defaults={map:false,max_shown_items:3,active_item:0,top_offset:0,left_offset:0,child_div_width:104,child_div_height:104,small_pic_width:84,small_pic_height:84,big_pic_width:231,big_pic_height:231,small_border:5,big_border:8,arrow_width:28,arrow_height:57,small_arrow_width:20,small_arrow_height:20,moving_speed:70,moving_speed_offset:100,moving_easing:"linear",arrow_speed:300,arrow_easing:"linear",mode:2,left_arrow_class:".circle_slider_nav_left",right_arrow_class:".circle_slider_nav_right",container_class:"circle_slider",container_class_padding:24,picture_class:"circle_slider_thumb",border_class:"circle_item_border",child_final_z_index:100,text_field_id_prefix:"#sw",text_object:".circle_slider_text_wrapper",hv_switch:0,shadow_offset:10,wrapper_text_max_height:810,left_text_class:"circle_slider_text",right_text_class_sufix:"right",left_text_class_padding:20,vert_text_mode:0,middle_click:2,border_on_off:1,activate_border_div:1,hover_movement:6,hover_speed:100,hover_easing:"linear",prettyPhoto_speed:200,prettyPhoto_easing:"linear",prettyPhoto_width:21,prettyPhoto_start:.93,prettyPhoto_movement:45,auto_play:0,auto_play_direction:1,auto_play_pause_time:3e3,allow_shadow:1,small_resolution_max_height:0,preload_all_images:0,border_radius:-1,border_color:"#282828",arrow_color:"#282828",automatic_height_resize:1,bind_arrow_keys:1,use_thin_arrows:0,enable_mousewheel:1,radius_proportion:1,plugin_url:"",responsive_by_available_space:0,prettyPhoto_color:"#1AB99B",prettyPhoto_img:"",keep_on_top_middle_circle:0,dinamically_set_class_id:0,dinamically_set_position_class:0,hide_arrows:0,hide_prettyPhoto:0,hide_content:0,content_margin_left:0,circle_left_offset:0,minus_width:0,main_circle_position:0,enable_scroll_with_touchmove_on_horizontal_version:1,enable_scroll_with_touchmove_on_vertical_version:0,movement_coefficient:1}})(jQuery);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):false;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){if(location.href.indexOf("#prettyPhoto")!==-1)location.hash="prettyPhoto"}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos["scrollTop"]+(d/2-a["containerHeight"]/2);if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a["contentHeight"],width:a["contentWidth"]},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a["containerWidth"]/2<0?0:v/2-a["containerWidth"]/2,width:a["containerWidth"]},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(settings.allow_expand){if(a["resized"]){e("a.pp_expand,a.pp_contract").show()}else{e("a.pp_expand").hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=true});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=false;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=true,fitting=false;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=true}h=imageHeight,p=imageWidth}if(p>v||h>d){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){if(e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)){return"youtube"}else if(e.match(/vimeo\.com/i)){return"vimeo"}else if(e.match(/\b.mov\b/i)){return"quicktime"}else if(e.match(/\b.swf\b/i)){return"flash"}else if(e.match(/\biframe=true\b/i)){return"iframe"}else if(e.match(/\bajax=true\b/i)){return"ajax"}else if(e.match(/\bcustom=true\b/i)){return"custom"}else if(e.substr(0,1)=="#"){return"inline"}else{return"image"}}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos["scrollTop"]-contentHeight/2;if(projectedTop<0)projectedTop=0;if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos["scrollLeft"]-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a["containerWidth"]-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else{$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return false});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){if(!settings.modal)e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return false});if(settings.allow_expand){e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=false}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=true}y(function(){e.prettyPhoto.open()});return false})}$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return false});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:false,opacity:.8,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:false,wmode:"opaque",autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=false,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=true,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});if(s.keyboard_shortcuts){e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:if(!settings.modal)e.prettyPhoto.close();t.preventDefault();break}}}})}e.prettyPhoto.initialize=function(){settings=s;if(settings.theme=="pp_default")settings.horizontal_padding=16;theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?true:false;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);if(settings.allow_resize)e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return false};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?true:false;set_position=arguments[3]?arguments[3]:0;k(t.target)}if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();if(settings.deeplinking)n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}if($ppt.is(":hidden"))$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());if(typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""){$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))}else{$pp_pic_holder.find(".pp_description").hide()}movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=false;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=true}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=true}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");imgPreloader="";skipInjection=false;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;if(isSet&&set_position<e(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image;if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/");movie_id=movie_id[1];if(movie_id.indexOf("?")>0)movie_id=movie_id.substr(0,movie_id.indexOf("?"));if(movie_id.indexOf("&")>0)movie_id=movie_id.substr(0,movie_id.indexOf("&"))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;var n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0";if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=a["width"]+"/embed/?moog_width="+a["width"];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a["height"]).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a["height"]+=15;a["contentHeight"]+=15;a["containerHeight"]+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{path}/g,frame_url);break;case"ajax":doresize=false;a=w(movie_width,movie_height);doresize=true;skipInjection=true;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=false;a=w(e(myClone).width(),e(myClone).height());doresize=true;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html());break}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return false};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;if(set_position<0)set_position=e(pp_images).size()-1}else if(t=="next"){set_position++;if(set_position>e(pp_images).size()-1)set_position=0}else{set_position=t}rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")}y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0}else if(e=="previous"){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage}else{currentGalleryPage=e}slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return false});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else{e.prettyPhoto.changePage("next")}};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return false});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=true;f=false;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=true;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)};})(jQuery);var pp_alreadyInitialized=false;
/*!
* jQuery Color Animations v@VERSION
* https://github.com/jquery/jquery-color
*
* Copyright 2013 jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* Date: @DATE
*/
(function( jQuery, undefined ) {

var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

// plusequals test for += 100 -= 100
rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
// a set of RE's that can match strings and generate color tuples.
stringParsers = [{
re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function( execResult ) {
return [
execResult[ 1 ],
execResult[ 2 ],
execResult[ 3 ],
execResult[ 4 ]
];
}
}, {
re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function( execResult ) {
return [
execResult[ 1 ] * 2.55,
execResult[ 2 ] * 2.55,
execResult[ 3 ] * 2.55,
execResult[ 4 ]
];
}
}, {
// this regex ignores A-F because it's compared against an already lowercased string
re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse: function( execResult ) {
return [
parseInt( execResult[ 1 ], 16 ),
parseInt( execResult[ 2 ], 16 ),
parseInt( execResult[ 3 ], 16 )
];
}
}, {
// this regex ignores A-F because it's compared against an already lowercased string
re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse: function( execResult ) {
return [
parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
];
}
}, {
re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space: "hsla",
parse: function( execResult ) {
return [
execResult[ 1 ],
execResult[ 2 ] / 100,
execResult[ 3 ] / 100,
execResult[ 4 ]
];
}
}],

// jQuery.Color( )
color = jQuery.Color = function( color, green, blue, alpha ) {
return new jQuery.Color.fn.parse( color, green, blue, alpha );
},
spaces = {
rgba: {
props: {
red: {
idx: 0,
type: "byte"
},
green: {
idx: 1,
type: "byte"
},
blue: {
idx: 2,
type: "byte"
}
}
},

hsla: {
props: {
hue: {
idx: 0,
type: "degrees"
},
saturation: {
idx: 1,
type: "percent"
},
lightness: {
idx: 2,
type: "percent"
}
}
}
},
propTypes = {
"byte": {
floor: true,
max: 255
},
"percent": {
max: 1
},
"degrees": {
mod: 360,
floor: true
}
},
support = color.support = {},

// element for support tests
supportElem = jQuery( "<p>" )[ 0 ],

// colors = jQuery.Color.names
colors,

// local aliases of functions called often
each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
space.cache = "_" + spaceName;
space.props.alpha = {
idx: 3,
type: "percent",
def: 1
};
});

function clamp( value, prop, allowEmpty ) {
var type = propTypes[ prop.type ] || {};

if ( value == null ) {
return (allowEmpty || !prop.def) ? null : prop.def;
}

// ~~ is an short way of doing floor for positive numbers
value = type.floor ? ~~value : parseFloat( value );

// IE will pass in empty strings as value for alpha,
// which will hit this case
if ( isNaN( value ) ) {
return prop.def;
}

if ( type.mod ) {
// we add mod before modding to make sure that negatives values
// get converted properly: -10 -> 350
return (value + type.mod) % type.mod;
}

// for now all property types without mod have min and max
return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
var inst = color(),
rgba = inst._rgba = [];

string = string.toLowerCase();

each( stringParsers, function( i, parser ) {
var parsed,
match = parser.re.exec( string ),
values = match && parser.parse( match ),
spaceName = parser.space || "rgba";

if ( values ) {
parsed = inst[ spaceName ]( values );

// if this was an rgba parse the assignment might happen twice
// oh well....
inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
rgba = inst._rgba = parsed._rgba;

// exit each( stringParsers ) here because we matched
return false;
}
});

// Found a stringParser that handled it
if ( rgba.length ) {

// if this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
if ( rgba.join() === "0,0,0,0" ) {
jQuery.extend( rgba, colors.transparent );
}
return inst;
}

// named colors
return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
parse: function( red, green, blue, alpha ) {
if ( red === undefined ) {
this._rgba = [ null, null, null, null ];
return this;
}
if ( red.jquery || red.nodeType ) {
red = jQuery( red ).css( green );
green = undefined;
}

var inst = this,
type = jQuery.type( red ),
rgba = this._rgba = [];

// more than 1 argument specified - assume ( red, green, blue, alpha )
if ( green !== undefined ) {
red = [ red, green, blue, alpha ];
type = "array";
}

if ( type === "string" ) {
return this.parse( stringParse( red ) || colors._default );
}

if ( type === "array" ) {
each( spaces.rgba.props, function( key, prop ) {
rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
});
return this;
}

if ( type === "object" ) {
if ( red instanceof color ) {
each( spaces, function( spaceName, space ) {
if ( red[ space.cache ] ) {
inst[ space.cache ] = red[ space.cache ].slice();
}
});
} else {
each( spaces, function( spaceName, space ) {
var cache = space.cache;
each( space.props, function( key, prop ) {

// if the cache doesn't exist, and we know how to convert
if ( !inst[ cache ] && space.to ) {

// if the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if ( key === "alpha" || red[ key ] == null ) {
return;
}
inst[ cache ] = space.to( inst._rgba );
}

// this is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
});

// everything defined but alpha?
if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
// use the default of 1
inst[ cache ][ 3 ] = 1;
if ( space.from ) {
inst._rgba = space.from( inst[ cache ] );
}
}
});
}
return this;
}
},
is: function( compare ) {
var is = color( compare ),
same = true,
inst = this;

each( spaces, function( _, space ) {
var localCache,
isCache = is[ space.cache ];
if (isCache) {
localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
each( space.props, function( _, prop ) {
if ( isCache[ prop.idx ] != null ) {
same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
return same;
}
});
}
return same;
});
return same;
},
_space: function() {
var used = [],
inst = this;
each( spaces, function( spaceName, space ) {
if ( inst[ space.cache ] ) {
used.push( spaceName );
}
});
return used.pop();
},
transition: function( other, distance ) {
var end = color( other ),
spaceName = end._space(),
space = spaces[ spaceName ],
startColor = this.alpha() === 0 ? color( "transparent" ) : this,
start = startColor[ space.cache ] || space.to( startColor._rgba ),
result = start.slice();

end = end[ space.cache ];
each( space.props, function( key, prop ) {
var index = prop.idx,
startValue = start[ index ],
endValue = end[ index ],
type = propTypes[ prop.type ] || {};

// if null, don't override start value
if ( endValue === null ) {
return;
}
// if null - use end
if ( startValue === null ) {
result[ index ] = endValue;
} else {
if ( type.mod ) {
if ( endValue - startValue > type.mod / 2 ) {
startValue += type.mod;
} else if ( startValue - endValue > type.mod / 2 ) {
startValue -= type.mod;
}
}
result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
}
});
return this[ spaceName ]( result );
},
blend: function( opaque ) {
// if we are already opaque - return ourself
if ( this._rgba[ 3 ] === 1 ) {
return this;
}

var rgb = this._rgba.slice(),
a = rgb.pop(),
blend = color( opaque )._rgba;

return color( jQuery.map( rgb, function( v, i ) {
return ( 1 - a ) * blend[ i ] + a * v;
}));
},
toRgbaString: function() {
var prefix = "rgba(",
rgba = jQuery.map( this._rgba, function( v, i ) {
return v == null ? ( i > 2 ? 1 : 0 ) : v;
});

if ( rgba[ 3 ] === 1 ) {
rgba.pop();
prefix = "rgb(";
}

return prefix + rgba.join() + ")";
},
toHslaString: function() {
var prefix = "hsla(",
hsla = jQuery.map( this.hsla(), function( v, i ) {
if ( v == null ) {
v = i > 2 ? 1 : 0;
}

// catch 1 and 2
if ( i && i < 3 ) {
v = Math.round( v * 100 ) + "%";
}
return v;
});

if ( hsla[ 3 ] === 1 ) {
hsla.pop();
prefix = "hsl(";
}
return prefix + hsla.join() + ")";
},
toHexString: function( includeAlpha ) {
var rgba = this._rgba.slice(),
alpha = rgba.pop();

if ( includeAlpha ) {
rgba.push( ~~( alpha * 255 ) );
}

return "#" + jQuery.map( rgba, function( v ) {

// default to 0 when nulls exist
v = ( v || 0 ).toString( 16 );
return v.length === 1 ? "0" + v : v;
}).join("");
},
toString: function() {
return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
}
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
h = ( h + 1 ) % 1;
if ( h * 6 < 1 ) {
return p + (q - p) * h * 6;
}
if ( h * 2 < 1) {
return q;
}
if ( h * 3 < 2 ) {
return p + (q - p) * ((2/3) - h) * 6;
}
return p;
}

spaces.hsla.to = function ( rgba ) {
if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
return [ null, null, null, rgba[ 3 ] ];
}
var r = rgba[ 0 ] / 255,
g = rgba[ 1 ] / 255,
b = rgba[ 2 ] / 255,
a = rgba[ 3 ],
max = Math.max( r, g, b ),
min = Math.min( r, g, b ),
diff = max - min,
add = max + min,
l = add * 0.5,
h, s;

if ( min === max ) {
h = 0;
} else if ( r === max ) {
h = ( 60 * ( g - b ) / diff ) + 360;
} else if ( g === max ) {
h = ( 60 * ( b - r ) / diff ) + 120;
} else {
h = ( 60 * ( r - g ) / diff ) + 240;
}

// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
if ( diff === 0 ) {
s = 0;
} else if ( l <= 0.5 ) {
s = diff / add;
} else {
s = diff / ( 2 - add );
}
return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function ( hsla ) {
if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
return [ null, null, null, hsla[ 3 ] ];
}
var h = hsla[ 0 ] / 360,
s = hsla[ 1 ],
l = hsla[ 2 ],
a = hsla[ 3 ],
q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
p = 2 * l - q;

return [
Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
Math.round( hue2rgb( p, q, h ) * 255 ),
Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
a
];
};


each( spaces, function( spaceName, space ) {
var props = space.props,
cache = space.cache,
to = space.to,
from = space.from;

// makes rgba() and hsla()
color.fn[ spaceName ] = function( value ) {

// generate a cache for this space if it doesn't exist
if ( to && !this[ cache ] ) {
this[ cache ] = to( this._rgba );
}
if ( value === undefined ) {
return this[ cache ].slice();
}

var ret,
type = jQuery.type( value ),
arr = ( type === "array" || type === "object" ) ? value : arguments,
local = this[ cache ].slice();

each( props, function( key, prop ) {
var val = arr[ type === "object" ? key : prop.idx ];
if ( val == null ) {
val = local[ prop.idx ];
}
local[ prop.idx ] = clamp( val, prop );
});

if ( from ) {
ret = color( from( local ) );
ret[ cache ] = local;
return ret;
} else {
return color( local );
}
};

// makes red() green() blue() alpha() hue() saturation() lightness()
each( props, function( key, prop ) {
// alpha is included in more than one space
if ( color.fn[ key ] ) {
return;
}
color.fn[ key ] = function( value ) {
var vtype = jQuery.type( value ),
fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
local = this[ fn ](),
cur = local[ prop.idx ],
match;

if ( vtype === "undefined" ) {
return cur;
}

if ( vtype === "function" ) {
value = value.call( this, cur );
vtype = jQuery.type( value );
}
if ( value == null && prop.empty ) {
return this;
}
if ( vtype === "string" ) {
match = rplusequals.exec( value );
if ( match ) {
value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
}
}
local[ prop.idx ] = value;
return this[ fn ]( local );
};
});
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
var hooks = hook.split( " " );
each( hooks, function( i, hook ) {
jQuery.cssHooks[ hook ] = {
set: function( elem, value ) {
var parsed, curElem,
backgroundColor = "";

if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
value = color( parsed || value );
if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
curElem = hook === "backgroundColor" ? elem.parentNode : elem;
while (
(backgroundColor === "" || backgroundColor === "transparent") &&
curElem && curElem.style
) {
try {
backgroundColor = jQuery.css( curElem, "backgroundColor" );
curElem = curElem.parentNode;
} catch ( e ) {
}
}

value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
backgroundColor :
"_default" );
}

value = value.toRgbaString();
}
try {
elem.style[ hook ] = value;
} catch( e ) {
// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
}
}
};
jQuery.fx.step[ hook ] = function( fx ) {
if ( !fx.colorInit ) {
fx.start = color( fx.elem, hook );
fx.end = color( fx.end );
fx.colorInit = true;
}
jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
};
});

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
expand: function( value ) {
var expanded = {};

each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
expanded[ "border" + part + "Color" ] = value;
});
return expanded;
}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
// 4.1. Basic color keywords
aqua: "#00ffff",
black: "#000000",
blue: "#0000ff",
fuchsia: "#ff00ff",
gray: "#808080",
green: "#008000",
lime: "#00ff00",
maroon: "#800000",
navy: "#000080",
olive: "#808000",
purple: "#800080",
red: "#ff0000",
silver: "#c0c0c0",
teal: "#008080",
white: "#ffffff",
yellow: "#ffff00",

// 4.2.3. "transparent" color keyword
transparent: [ null, null, null, 0 ],

_default: "#ffffff"
};

}( jQuery ));;
//					socials_hover_effect

(function($) {
	$(document).ready(function(){
		$('.content_slider_text_block_wrap').find('.button_hover_effect').hover(function(){
				var hoverClr = $(this).attr('data-hovercolor');
				$(this).stop(true).animate({'background-color': hoverClr}, 300);
		
			}, function(){
				var bgClr = $(this).attr('data-hoveroutcolor');
				$(this).stop(true).animate({'background-color': bgClr}, 300);
			});
		



	//					portfolio_images_hover

		$('.content_slider_text_block_wrap').find('.content_img_wrap').hover(function(){
			$(this).find('.hover_link').show().stop(true).animate({'width' : 21, 'height' : 21, 'margin-top' : -10.5, 'margin-left' : -10.5, opacity : 1}, 150);
		}, function(){
			$(this).find('.hover_link').show().stop(true).animate({'width' : 0, 'height' : 0, 'margin-top' : 0, 'margin-left' : 0, opacity : 0}, 150, function(){$(this).hide();});
		});



	});
})(jQuery);;
