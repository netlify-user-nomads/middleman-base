Drupal.behaviors.googleAnalyticsET = {
  attach : function (context) {
    // make sure that the google analytics event tracking object or the universal analytics tracking function exists
    // if not then exit and don't track
    if(typeof _gaq == "undefined" && typeof ga == "undefined"){
      return;
    }

    var settings = Drupal.settings.googleAnalyticsETSettings;
    delete settings.selectors.debug;
    var defaultOptions = {
      label: '',
      value: 0,
      noninteraction: false
    };
    var s = new Array();
    for(var i = 0; i < settings.selectors.length; i++) {
      s[i] = settings.selectors[i].selector;
/*
      console.log(i);
      console.log(settings.selectors[i].selector)
*/
    }

    jQuery.each(s,
      function(i, val) {
        jQuery(settings.selectors[i].selector).once('GoogleAnalyticsET').bind(settings.selectors[i].event,
          function(event) {
            settings.selectors[i] = jQuery.extend(defaultOptions, settings.selectors[i]);
            trackEvent(jQuery(this), settings.selectors[i].category, settings.selectors[i].action, settings.selectors[i].label, settings.selectors[i].value, settings.selectors[i].noninteraction)
          }
        );
      }

    );
  }

}

/**
 * trackEvent does the actual call to _gaq.push with the _trackEvent type.
 *
 * trackEvent calls the push method from the _gaq object. It also preforms
 * any token replacements on the category, action, and opt_label parameters.
 *
 * @param $obj
 *   The jQuery object that the click event was called on.
 * @param category
 *   The name you supply for the group of objects you want to track.
 * @param action
 *   A string that is uniquely paired with each category, and commonly used
 *   to define the type of user interaction for the web object.
 * @param opt_label
 *   An optional string to provide additional dimensions to the event data.
 * @param opt_value
 *   An integer that you can use to provide numerical data about the user
 *   event.
 * @param opt_oninteraction
 *   A boolean that when set to true, indicates that the event hit will not
 *   be used in bounce-rate calculation.
 */
function trackEvent($obj, category, action, opt_label, opt_value, opt_noninteraction) {
  var href = $obj.attr('href') == undefined ? false : String($obj.attr('href'));

  category = category == '!text' ? String($obj.text()) : (category == '!href' ? href : (category == '!currentPage' ? String(window.location.href) : String(category)));
  action = action == '!text' ? String($obj.text()) : (action == '!href' ? href : (action == '!currentPage' ? String(window.location.href) : String(action)));
  opt_label = opt_label == '!text' ? String($obj.text()) : (opt_label == '!href' ? href : (opt_label == '!currentPage' ? String(window.location.href) : String(opt_label)));

  if (!category || !action) {
    return;
  }

  if (opt_label == '!test' || Drupal.settings.googleAnalyticsETSettings.settings.debug) {
    debugEvent($obj, category, action, opt_label, opt_value, opt_noninteraction);
  }
  else if( typeof _gaq != 'undefined' ){
    _gaq.push(['_trackEvent', String(category), String(action), String(opt_label), Number(opt_value), Boolean(opt_noninteraction)]);
  }
  else {
    ga('send', {
      'hitType': 'event',
      'eventCategory': String(category),
      'eventAction': String(action),
      'eventLabel': String(opt_label),
      'eventValue': Number(opt_value),
      'nonInteraction': Boolean(opt_noninteraction)
    });
  }
}

/**
 * A simple debug function that matches the trackEvent function.
 */
function debugEvent($obj, category, action, opt_label, opt_value, opt_noninteraction) {
  // Saftey First, safe use of console in IE.
  // http://blog.patspam.com/2009/the-curse-of-consolelog
  if (!("console" in window)) {
    alert(category + ' ' + action  + ' ' + opt_label + ' ' + opt_value);
  }
  else {
    var trackerObject = {
        category : category,
        action : action,
        opt_label : opt_label,
        opt_value : opt_value,
        opt_noninteraction : opt_noninteraction,
        $object : $obj
    }
    console.log(trackerObject);
  }
}
;
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);b.settings.onsubmit&&(this.validateDelegate(":submit","click",function(a){b.settings.submitHandler&&(b.submitButton=a.target);c(a.target).hasClass("cancel")&&(b.cancelSubmit=!0)}),this.submit(function(a){function e(){var e;return b.settings.submitHandler?(b.submitButton&&(e=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm)),b.settings.submitHandler.call(b,b.currentForm,a),b.submitButton&&e.remove(),!1):!0}b.settings.debug&&a.preventDefault();if(b.cancelSubmit)return b.cancelSubmit=!1,e();if(b.form())return b.pendingRequest?(b.formSubmitted=!0,!1):e();b.focusInvalid();return!1}));return b}a&&(a.debug&&window.console)&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
var a=!0,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(a,c){b[c]=d.attr(c);d.removeAttr(c)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;b.messages&&(e.messages[d.name]=c.extend(e.messages[d.name],b.messages));break;case "remove":if(!b)return delete f[d.name],
g;var h={};c.each(b.split(/\s/),function(a,b){h[b]=g[b];delete g[b]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.classRules(d),c.validator.attributeRules(d),c.validator.dataRules(d),c.validator.staticRules(d)),d);d.required&&(e=d.required,delete d.required,d=c.extend({required:e},d));return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,b){this.settings=
c.extend(!0,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(1===arguments.length)return function(){var b=c.makeArray(arguments);b.unshift(a);return c.validator.format.apply(this,b)};2<arguments.length&&b.constructor!==Array&&(b=c.makeArray(arguments).slice(1));b.constructor!==Array&&(b=[b]);c.each(b,function(b,c){a=a.replace(RegExp("\\{"+b+"\\}","g"),c)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",
errorElement:"label",focusInvalid:!0,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a;this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))&&this.element(a)},onkeyup:function(a,
b){9===b.which&&""===this.elementValue(a)||(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:c.validator.format("Please enter no more than {0} characters."),minlength:c.validator.format("Please enter at least {0} characters."),
rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function a(a){var b=c.data(this[0].form,"validator"),d="on"+a.type.replace(/^validate/,"");b.settings[d]&&b.settings[d].call(b,this[0],a)}this.labelContainer=
c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(a,d){"string"===typeof d&&(d=d.split(/\s/));c.each(d,function(c,d){b[d]=a})});var d=this.settings.rules;c.each(d,function(a,b){d[a]=
c.validator.normalizeRule(b)});c(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",
this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=
c(a);var b=!1!==this.check(a);b?delete this.invalid[a.name]:this.invalid[a.name]=!0;this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers));this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(b){return!(b.name in a)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):
this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,c;for(c in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},
focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&1===c.grep(this.errorList,function(b){return b.element.name===a.name}).length&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
(a.settings.debug&&window.console)&&console.error("%o has no name assigned",this);return this.name in b||!a.objectLength(c(this).rules())?!1:b[this.name]=!0})},clean:function(a){return c(a)[0]},errors:function(){var a=this.settings.errorClass.replace(" ",".");return c(this.settings.errorElement+"."+a,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=
this.errors().add(this.containers)},prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},elementValue:function(a){var b=c(a).attr("type"),d=c(a).val();return"radio"===b||"checkbox"===b?c('input[name="'+c(a).attr("name")+'"]:checked').val():"string"===typeof d?d.replace(/\r/g,""):d},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=!1,e=this.elementValue(a),f,g;for(g in b){var h={method:g,parameters:b[g]};try{if(f=c.validator.methods[g].call(this,e,
a,h.parameters),"dependency-mismatch"===f)d=!0;else{d=!1;if("pending"===f){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!f)return this.formatAndAdd(a,h),!1}}catch(k){throw this.settings.debug&&window.console&&console.log("exception occured when checking element "+a.id+", check the '"+h.method+"' method",k),k;}}if(!d)return this.objectLength(b)&&this.successList.push(a),!0},customDataMessage:function(a,b){return c(a).data("msg-"+b.toLowerCase())||a.attributes&&c(a).attr("data-msg-"+b.toLowerCase())},
customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(a,b){return this.findDefined(this.customMessage(a.name,b),this.customDataMessage(a,b),!this.settings.ignoreTitle&&a.title||void 0,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,
b.method),e=/\$?\{(\d+)\}/g;"function"===typeof d?d=d.call(this,b.parameters,a):e.test(d)&&(d=c.validator.format(d.replace(e,"{$1}"),b.parameters));this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=d},addWrapper:function(a){this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper)));return a},defaultShowErrors:function(){var a,b;for(a=0;this.errorList[a];a++)b=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,
this.settings.validClass),this.showLabel(b.element,b.message);this.errorList.length&&(this.toShow=this.toShow.add(this.containers));if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},
invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.attr("generated")&&d.html(b)):(d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:!0}).addClass(this.settings.errorClass).html(b||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||
(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a)));!b&&this.settings.success&&(d.text(""),"string"===typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,a));this.toShow=this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")===b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){this.checkable(a)&&
(a=this.findByName(a.name).not(this.settings.ignore)[0]);return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){return c(this.currentForm).find('[name="'+a+'"]')},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,
b):!0},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){var b=this.elementValue(a);return!c.validator.methods.required.call(this,b,a)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(a,b){this.pendingRequest--;0>this.pendingRequest&&(this.pendingRequest=0);delete this.pending[a.name];b&&0===this.pendingRequest&&
this.formSubmitted&&this.form()?(c(this.currentForm).submit(),this.formSubmitted=!1):!b&&(0===this.pendingRequest&&this.formSubmitted)&&(c(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:!0,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},
creditcard:{creditcard:!0}},addClassRules:function(a,b){a.constructor===String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;"required"===d?(e=a.get(0).getAttribute(d),""===e&&(e=!0),e=!!e):e=a.attr(d);e?b[d]=e:a[0].getAttribute("type")===
d&&(b[d]=!0)}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},dataRules:function(a){var b,d={},e=c(a);for(b in c.validator.methods)a=e.data("rule-"+b.toLowerCase()),void 0!==a&&(d[b]=a);return d},staticRules:function(a){var b={},d=c.data(a.form,"validator");d.settings.rules&&(b=c.validator.normalizeRule(d.settings.rules[a.name])||{});return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(!1===e)delete a[d];else if(e.param||e.depends){var f=!0;switch(typeof e.depends){case "string":f=
!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}f?a[d]=void 0!==e.param?e.param:!0:delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){a[this]&&(a[this]=Number(a[this]))});c.each(["rangelength","range"],function(){var b;a[this]&&(c.isArray(a[this])?a[this]=[Number(a[this][0]),Number(a[this][1])]:"string"===typeof a[this]&&(b=a[this].split(/[\s,]+/),a[this]=[Number(b[0]),Number(b[1])]))});c.validator.autoCreateRanges&&
(a.min&&a.max&&(a.range=[a.min,a.max],delete a.min,delete a.max),a.minlength&&a.maxlength&&(a.rangelength=[a.minlength,a.maxlength],delete a.minlength,delete a.maxlength));return a},normalizeRule:function(a){if("string"===typeof a){var b={};c.each(a.split(/\s/),function(){b[this]=!0});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=void 0!==d?d:c.validator.messages[a];3>b.length&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,
b,d){return!this.depend(d,b)?"dependency-mismatch":"select"===b.nodeName.toLowerCase()?(a=c(b).val())&&0<a.length:this.checkable(b)?0<this.getLength(a,b):0<c.trim(a).length},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d="string"===typeof d&&{url:d}||d;if(e.old===a)return e.valid;
e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(!0,{url:d,mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(d){f.settings.messages[b.name].remote=e.originalMessage;var g=!0===d||"true"===d;if(g){var j=f.formSubmitted;f.prepareElement(b);f.formSubmitted=j;f.successList.push(b);delete f.invalid[b.name];f.showErrors()}else j={},d=d||f.defaultMessage(b,"remote"),j[b.name]=e.message=c.isFunction(d)?d(a):d,f.invalid[b.name]=!0,f.showErrors(j);e.valid=
g;f.stopRequest(b,g)}},d));return"pending"},minlength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(c.trim(a),b);return this.optional(b)||a>=d},maxlength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(c.trim(a),b);return this.optional(b)||a<=d},rangelength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,
b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test((new Date(a)).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c=0,e=0,f=!1;a=a.replace(/\D/g,"");for(var g=a.length-
1;0<=g;g--){e=a.charAt(g);e=parseInt(e,10);if(f&&9<(e*=2))e-=9;c+=e;f=!f}return 0===c%10},equalTo:function(a,b,d){d=c(d);this.settings.onfocusout&&d.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a===d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(b,c,f){c=b.port;"abort"===b.mode&&(a[c]&&a[c].abort(),a[c]=f)});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;return"abort"===("mode"in d?d:c.ajaxSettings).mode?(a[e]&&a[e].abort(),a[e]=b.apply(this,arguments)):b.apply(this,arguments)}}})(jQuery);(function(c){c.extend(c.fn,{validateDelegate:function(a,b,d){return this.bind(b,function(b){var f=c(b.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);;
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (exception) {}
	}

}(this, document, jQuery));
;
/**
 * @file
 *
 * Javascript to add placeholder events.
 */

(function ($) {
  Drupal.behaviors.placeholder = {
    attach: function () {
      if(typeof($("input[placeholder], textarea[placeholder]").placeholder())=='function') {
        $("input[placeholder], textarea[placeholder], password[placeholder]").placeholder();
      }
    }
  };

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;

/**
 * JavaScript behaviors for the front-end display of webforms.
 */

(function ($) {

Drupal.behaviors.webform = Drupal.behaviors.webform || {};

Drupal.behaviors.webform.attach = function(context) {
  // Calendar datepicker behavior.
  Drupal.webform.datepicker(context);

  // Conditional logic.
  if (Drupal.settings.webform && Drupal.settings.webform.conditionals) {
    Drupal.webform.conditional(context);
  }
};

Drupal.webform = Drupal.webform || {};

Drupal.webform.datepicker = function(context) {
  $('div.webform-datepicker').each(function() {
    var $webformDatepicker = $(this);
    var $calendar = $webformDatepicker.find('input.webform-calendar');

    // Ensure the page we're on actually contains a datepicker.
    if ($calendar.length == 0) {
      return;
    }

    var startDate = $calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var endDate = $calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var firstDay = $calendar[0].className.replace(/.*webform-calendar-day-(\d).*/, '$1');
    // Convert date strings into actual Date objects.
    startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
    endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);

    // Ensure that start comes before end for datepicker.
    if (startDate > endDate) {
      var laterDate = startDate;
      startDate = endDate;
      endDate = laterDate;
    }

    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();

    // Set up the jQuery datepicker element.
    $calendar.datepicker({
      dateFormat: 'yy-mm-dd',
      yearRange: startYear + ':' + endYear,
      firstDay: parseInt(firstDay),
      minDate: startDate,
      maxDate: endDate,
      onSelect: function(dateText, inst) {
        var date = dateText.split('-');
        $webformDatepicker.find('select.year, input.year').val(+date[0]).trigger('change');
        $webformDatepicker.find('select.month').val(+date[1]).trigger('change');
        $webformDatepicker.find('select.day').val(+date[2]).trigger('change');
      },
      beforeShow: function(input, inst) {
        // Get the select list values.
        var year = $webformDatepicker.find('select.year, input.year').val();
        var month = $webformDatepicker.find('select.month').val();
        var day = $webformDatepicker.find('select.day').val();

        // If empty, default to the current year/month/day in the popup.
        var today = new Date();
        year = year ? year : today.getFullYear();
        month = month ? month : today.getMonth() + 1;
        day = day ? day : today.getDate();

        // Make sure that the default year fits in the available options.
        year = (year < startYear || year > endYear) ? startYear : year;

        // jQuery UI Datepicker will read the input field and base its date off
        // of that, even though in our case the input field is a button.
        $(input).val(year + '-' + month + '-' + day);
      }
    });

    // Prevent the calendar button from submitting the form.
    $calendar.click(function(event) {
      $(this).focus();
      event.preventDefault();
    });
  });
};

Drupal.webform.conditional = function(context) {
  // Add the bindings to each webform on the page.
  $.each(Drupal.settings.webform.conditionals, function(formKey, settings) {
    var $form = $('.' + formKey + ':not(.webform-conditional-processed)');
    $form.each(function(index, currentForm) {
      var $currentForm = $(currentForm);
      $currentForm.addClass('webform-conditional-processed');
      $currentForm.bind('change', { 'settings': settings }, Drupal.webform.conditionalCheck);

      // Trigger all the elements that cause conditionals on this form.
      $.each(Drupal.settings.webform.conditionals[formKey]['sourceMap'], function(elementKey) {
        $currentForm.find('.' + elementKey).find('input,select,textarea').filter(':first').trigger('change');
      });
    })
  });
};

/**
 * Event handler to respond to field changes in a form.
 *
 * This event is bound to the entire form, not individual fields.
 */
Drupal.webform.conditionalCheck = function(e) {
  var $triggerElement = $(e.target).closest('.webform-component');
  var $form = $triggerElement.closest('form');
  var triggerElementKey = $triggerElement.attr('class').match(/webform-component--[^ ]+/)[0];
  var settings = e.data.settings;


  if (settings.sourceMap[triggerElementKey]) {
    $.each(settings.sourceMap[triggerElementKey], function(n, rgid) {
      var ruleGroup = settings.ruleGroups[rgid];

      // Perform the comparison callback and build the results for this group.
      var conditionalResult = true;
      var conditionalResults = [];
      $.each(ruleGroup['rules'], function(m, rule) {
        var elementKey = rule['source'];
        var element = $form.find('.' + elementKey)[0];
        var existingValue = settings.values[elementKey] ? settings.values[elementKey] : null;
        conditionalResults.push(window['Drupal']['webform'][rule.callback](element, existingValue, rule['value'] ));
      });

      // Filter out false values.
      var filteredResults = [];
      for (var i = 0; i < conditionalResults.length; i++) {
        if (conditionalResults[i]) {
          filteredResults.push(conditionalResults[i]);
        }
      }

      // Calculate the and/or result.
      if (ruleGroup['andor'] === 'or') {
        conditionalResult = filteredResults.length > 0;
      }
      else {
        conditionalResult = filteredResults.length === conditionalResults.length;
      }

      // Flip the result of the action is to hide.
      var showComponent;
      if (ruleGroup['action'] == 'hide') {
        showComponent = !conditionalResult;
      }
      else {
        showComponent = conditionalResult;
      }

      var $target = $form.find('.' + ruleGroup['target']);
      var $targetElements;
      if (showComponent) {
        $targetElements = $target.find('.webform-conditional-disabled').removeClass('webform-conditional-disabled');
        $.fn.prop ? $targetElements.prop('disabled', false) : $targetElements.removeAttr('disabled');
        $target.show();
      }
      else {
        $targetElements = $target.find(':input').addClass('webform-conditional-disabled');
        $.fn.prop ? $targetElements.prop('disabled', true) : $targetElements.attr('disabled', true);
        $target.hide();
      }
    });
  }

};

Drupal.webform.conditionalOperatorStringEqual = function(element, existingValue, ruleValue) {
  var returnValue = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase() === ruleValue.toLowerCase()) {
      returnValue = true;
      return false; // break.
    }
  });
  return returnValue;
};

Drupal.webform.conditionalOperatorStringNotEqual = function(element, existingValue, ruleValue) {
  var found = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase() === ruleValue.toLowerCase()) {
      found = true;
    }
  });
  return !found;
};

Drupal.webform.conditionalOperatorStringContains = function(element, existingValue, ruleValue) {
  var returnValue = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) > -1) {
      returnValue = true;
      return false; // break.
    }
  });
  return returnValue;
};

Drupal.webform.conditionalOperatorStringDoesNotContain = function(element, existingValue, ruleValue) {
  var found = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) > -1) {
      found = true;
    }
  });
  return !found;
};

Drupal.webform.conditionalOperatorStringBeginsWith = function(element, existingValue, ruleValue) {
  var returnValue = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase().indexOf(ruleValue.toLowerCase()) === 0) {
      returnValue = true;
      return false; // break.
    }
  });
  return returnValue;
};

Drupal.webform.conditionalOperatorStringEndsWith = function(element, existingValue, ruleValue) {
  var returnValue = false;
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  $.each(currentValue, function(n, value) {
    if (value.toLowerCase().lastIndexOf(ruleValue.toLowerCase()) === value.length - ruleValue.length) {
      returnValue = true;
      return false; // break.
    }
  });
  return returnValue;
};

Drupal.webform.conditionalOperatorStringEmpty = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  var returnValue = true;
  $.each(currentValue, function(n, value) {
    if (value !== '') {
      returnValue = false;
      return false; // break.
    }
  });
  return returnValue;
};

Drupal.webform.conditionalOperatorStringNotEmpty = function(element, existingValue, ruleValue) {
  return !Drupal.webform.conditionalOperatorStringEmpty(element, existingValue, ruleValue);
};

Drupal.webform.conditionalOperatorNumericEqual = function(element, existingValue, ruleValue) {
  // See float comparison: http://php.net/manual/en/language.types.float.php
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  var epsilon = 0.000001;
  // An empty string does not match any number.
  return currentValue[0] === '' ? false : (Math.abs(parseFloat(currentValue[0]) - parseFloat(ruleValue)) < epsilon);
};

Drupal.webform.conditionalOperatorNumericNotEqual = function(element, existingValue, ruleValue) {
  // See float comparison: http://php.net/manual/en/language.types.float.php
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  var epsilon = 0.000001;
  // An empty string does not match any number.
  return currentValue[0] === '' ? true : (Math.abs(parseFloat(currentValue[0]) - parseFloat(ruleValue)) >= epsilon);
};

Drupal.webform.conditionalOperatorNumericGreaterThan = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  return parseFloat(currentValue[0]) > parseFloat(ruleValue);
};

Drupal.webform.conditionalOperatorNumericLessThan = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.stringValue(element, existingValue);
  return parseFloat(currentValue[0]) < parseFloat(ruleValue);
};

Drupal.webform.conditionalOperatorDateEqual = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.dateValue(element, existingValue);
  return currentValue === ruleValue;
};

Drupal.webform.conditionalOperatorDateBefore = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.dateValue(element, existingValue);
  return (currentValue !== false) && currentValue < ruleValue;
};

Drupal.webform.conditionalOperatorDateAfter = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.dateValue(element, existingValue);
  return (currentValue !== false) && currentValue > ruleValue;
};

Drupal.webform.conditionalOperatorTimeEqual = function(element, existingValue, ruleValue) {
  var currentValue = Drupal.webform.timeValue(element, existingValue);
  return currentValue === ruleValue;
};

Drupal.webform.conditionalOperatorTimeBefore = function(element, existingValue, ruleValue) {
  // Date and time operators intentionally exclusive for "before".
  var currentValue = Drupal.webform.timeValue(element, existingValue);
  return (currentValue !== false) && (currentValue < ruleValue);
};

Drupal.webform.conditionalOperatorTimeAfter = function(element, existingValue, ruleValue) {
  // Date and time operators intentionally inclusive for "after".
  var currentValue = Drupal.webform.timeValue(element, existingValue);
  return (currentValue !== false) && (currentValue >= ruleValue);
};

/**
 * Utility function to get a string value from a select/radios/text/etc. field.
 */
Drupal.webform.stringValue = function(element, existingValue) {
  var value = [];

  if (element) {
    // Checkboxes and radios.
    $(element).find('input[type=checkbox]:checked,input[type=radio]:checked').each(function() {
      value.push(this.value);
    });
    // Select lists.
    if (!value.length) {
      var selectValue = $(element).find('select').val();
      if (selectValue) {
        value.push(selectValue);
      }
    }
    // Simple text fields. This check is done last so that the select list in
    // select-or-other fields comes before the "other" text field.
    if (!value.length) {
      $(element).find('input:not([type=checkbox],[type=radio]),textarea').each(function() {
        value.push(this.value);
      });
    }
  }
  else if (existingValue) {
    value = existingValue;
  }

  return value;
};

/**
 * Utility function to calculate a millisecond timestamp from a time field.
 */
Drupal.webform.dateValue = function(element, existingValue) {
  if (element) {
    var day = $(element).find('[name*=day]').val();
    var month = $(element).find('[name*=month]').val();
    var year = $(element).find('[name*=year]').val();
    // Months are 0 indexed in JavaScript.
    if (month) {
      month--;
    }
    return (year !== '' && month !== '' && day !== '') ? Date.UTC(year, month, day) / 1000 : false;
  }
  else {
    var existingValue = existingValue.length ? existingValue[0].split('-') : existingValue;
    return existingValue.length ? Date.UTC(existingValue[0], existingValue[1], existingValue[2]) / 1000 : false;
  }
};

/**
 * Utility function to calculate a millisecond timestamp from a time field.
 */
Drupal.webform.timeValue = function(element, existingValue) {
  if (element) {
    var hour = $(element).find('[name*=hour]').val();
    var minute = $(element).find('[name*=minute]').val();
    var ampm = $(element).find('[name*=ampm]:checked').val();

    // Convert to integers if set.
    hour = (hour === '') ? hour : parseInt(hour);
    minute = (minute === '') ? minute : parseInt(minute);

    if (hour !== '') {
      hour = (hour < 12 && ampm == 'pm') ? hour + 12 : hour;
      hour = (hour === 12 && ampm == 'am') ? 0 : hour;
    }
    return (hour !== '' && minute !== '') ? Date.UTC(1970, 0, 1, hour, minute) / 1000 : false;
  }
  else {
    var existingValue = existingValue.length ? existingValue[0].split(':') : existingValue;
    return existingValue.length ? Date.UTC(1970, 0, 1, existingValue[0], existingValue[1]) / 1000 : false;
  }
};

})(jQuery);
;
if (!window.console) {
    window.console = {
        log: function() {},
        dir: function() {}
    }
}

if (!jQuery.support.transition) {
    jQuery.fn.transition = jQuery.fn.animate;
}

var msIE = function() {
    var ieVersion = 0;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        ieVersion = new Number(RegExp.$1) // capture x.x portion and store as a number
    }
    return {
        isIE: function() {
            return ieVersion ? true : false;
        },
        isOldIE: function() {
            return (ieVersion > 0 && ieVersion < 9);
        },
        getIEVersion: function() {
            return ieVersion;
        }
    }
}();

var scrollController = {
    currsection: 0,
    totalsections: 0, // set when document ready
    sectionOffset: 65,
    desktopScreenWidth: 1024,
    easeInMethod: 'easeInQuad',
    easeOutMethod: 'easeOutQuad',


    next: function(e) {
        if (scrollController.currsection != (scrollController.totalsections - 2)) {
            console.log("scroll next section");
            scrollController.scrollToSection(scrollController.currsection + 1);
        } else {
            jQuery('html, body').animate({
                scrollTop: jQuery('#gcsc_2col').offset().top - scrollController.sectionOffset
            }, 800, scrollController.easeOutMethod);
        }
    },

    scrollToSection: function(position) {
        var target = jQuery('.slide').eq(position);
        var newTop = target.offset().top - scrollController.sectionOffset + 1;
        if (position == scrollController.totalsections - 2) {
            newTop = target.offset().top + Math.floor(target.height() * 2 / 3);
        }
        jQuery('html, body').stop().animate({
            scrollTop: newTop
        }, 500, scrollController.easeOutMethod);
    },

    showNextSection: function() {
        if (scrollController.currsection < (scrollController.totalsections - 2)) {
            jQuery('.textcontainer').fadeIn('fast');
            scrollController.currsection++;
            scrollController.fadeInNext(scrollController.currsection);
        } else if (scrollController.currsection == (scrollController.totalsections - 2)) {
            jQuery('.textcontainer').fadeOut('fast');
            scrollController.currsection++;
            scrollController.fadeInNext(scrollController.currsection);
        }
        if (scrollController.currsection > scrollController.totalsections - 3) {
            jQuery('.downarrow').fadeOut('fast');
        }
    },

    showPrevSection: function(e) {
        if (scrollController.currsection != 0) {
            scrollController.currsection--;
            scrollController.fadeInPrev(scrollController.currsection);
            jQuery('.textcontainer').fadeIn('fast');
        }
        if (scrollController.currsection < scrollController.totalsections - 2) {
            jQuery('.downarrow').fadeIn('fast');
        }
    },

    fadeInNext: function(index) {
        jQuery('.texts').not(':eq(' + index + ')').stop().transition({
            'marginTop': '-50px',
            opacity: 0
        }, 400, scrollController.easeInMethod, function () {
            jQuery('.texts').css({
                'marginTop': '50px'
            });
        });

        jQuery('.texts').eq(index).delay(450).transition({
            'marginTop': '0px',
            opacity: 1
        }, 600, scrollController.easeOutMethod, function () {
        });

        if (index == 1) {
            for (i = 0; i < 6; i++) {
                scrollController.fadeInIcons('#sixa6 .hexa', i);
            }
        }

        if (index == 4) {
            for (i = 0; i < 5; i++) {
                scrollController.fadeInIcons('#hexa5 .hexa', i);
            }
        }
    },

    fadeInIcons: function(selector, i) {
        jQuery(selector).eq(i).delay(i * 100 + 1200).transition({
            scale: 1,
            opacity: 1,
            easing: scrollController.easeOutMethod,
            duration: 800
        });
    },

    fadeInPrev: function(index) {

        jQuery('.texts').not(':eq(' + index + ')').stop().transition({
            'marginTop': '50px',
            opacity: 0
        }, 400, scrollController.easeOutMethod, function () {
            jQuery('.texts').css({
                'marginTop': '-50px'
            });
        });

        jQuery('.texts').eq(index).delay(450).transition({
            'marginTop': '0px',
            opacity: 1
        }, 600, scrollController.easeOutMethod, function () {
        });

    },

    onWindowScroll: function(ev) {
        var scrollTop = jQuery(window).scrollTop();
        var cummulativeHeight = 0;
        var sectionIndex = 0;
        jQuery('.slide').each(function() {
            cummulativeHeight += jQuery(this).height();
            if (cummulativeHeight < scrollTop + scrollController.sectionOffset) {
                sectionIndex++;
            }
        });

        // var sectionIndex = Math.floor((scrollTop + scrollController.sectionOffset) / sectionHeight);
        debugMode = 0;

        if (sectionIndex < scrollController.totalsections && scrollController.currsection < sectionIndex) {
            scrollController.showNextSection();
			if (!debugMode) {
			  _gaq.push(['_trackEvent', 'ArticleLoaded', 'Reading', 'Track Scrolls Down Page'+ sectionIndex,0,'TRUE'  ]);
			} else {
			  console.log("next %d %d", scrollTop, sectionIndex);
			}
			
        }
        if (scrollController.currsection > sectionIndex) {
            scrollController.showPrevSection();
			if (!debugMode) {
			  _gaq.push(['_trackEvent', 'ArticleLoaded', 'Reading', 'Track Scrolls Down Page'+ sectionIndex,0,'TRUE'  ]);
			} else {
			  console.log("prev %d %d", scrollTop, sectionIndex);
			}
        }
    },

    reposition: function() {
        jQuery(window).unbind("scroll");
        if (jQuery(window).width() > scrollController.desktopScreenWidth) {
            jQuery(window).scroll(scrollController.onWindowScroll);
        }
        var windowHeight = jQuery(window).height();
        jQuery('#bannerarea_home1,#bannerarea_home2,#bannerarea_home3,#bannerarea_home4,#bannerarea_home5,#bannerarea_home6').css("height", windowHeight + "px");
        jQuery('#bannerarea_home7').css("height", Math.floor(windowHeight * 2 / 3) + "px");

        var selector = '#slidemenu, .page-content, body, .navbar, .navbar-header';
        if (jQuery(window).width() > (scrollController.desktopScreenWidth - 1) && jQuery('.navbar-toggle').is(':hidden')) {
            jQuery(selector).removeClass('slide-active');
        }

        var callusbt = jQuery('#callusbt');
        if (jQuery(window).width() <= scrollController.desktopScreenWidth) {
            callusbt.parent().prepend(callusbt);
        } else {
            callusbt.parent().append(callusbt);
        }

        if (jQuery(window).width() < 767) {
            jQuery('.footer_title').off("click");

            jQuery('.footer_title').on("click", function() {
                jQuery(this).parent().find('.footer-navigation').slideToggle('fast');
            });
        } else {
            jQuery('.footer_title').off("click");
            jQuery('.footer-navigation').show();

        }
    },

    init: function() {
        scrollController.totalsections = jQuery('.slide').length;

        jQuery('.downarrow a').on('click', function() {
            scrollController.next();
        });
        jQuery('.hexa').transition({
            opacity: 0,
            scale: 0,
            duration: 10
        });

        scrollController.fadeInNext(0);

        jQuery("html, body").delay(100).animate({
            scrollTop: 0
        }, "slow", function() {
            scrollController.scrollToSection(0);
        });

        scrollController.reposition();
        jQuery(window).on("resize", function() {
            scrollController.reposition();
        });
    }
};

jQuery(document).ready(function() {
    scrollController.init();

    jQuery('#slide-nav.navbar .container').append(jQuery('<div id="navbar-height-col"></div>'));
    var toggler = '.navbar-toggle';
    var pagewrapper = '.page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%';
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    jQuery("#slide-nav").on("click", toggler, function(e) {
        var selected = jQuery(this).hasClass('slide-active');
        jQuery('#slidemenu').stop().animate({
            right: selected ? menuneg : '0px'
        });
        jQuery('#navbar-height-col').stop().animate({
            right: selected ? slideneg : '0px'
        });
        jQuery(pagewrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        });
        jQuery(navigationwrapper).stop().animate({
            right: selected ? '0px' : slidewidth
        });
        jQuery(this).toggleClass('slide-active', !selected);
        jQuery('#slidemenu').toggleClass('slide-active');
        jQuery('.page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    }); 

    jQuery(".nav a").on("click", function() {
        jQuery(".nav").find(".active").removeClass("active");
        jQuery(this).addClass("active");
    });
});

;
(function(jQuery) {
    Drupal.behaviors.smartshift = {
        attach: function(context, settings) {

		
			jQuery.preloadImages = function() {
			  for (var i = 0; i < arguments.length; i++) {
				jQuery("<img />").attr("src", arguments[i]);
			  }
			}

			jQuery.preloadImages("/sites/all/themes/smartshift_new/images/btnarrowdown.png","/sites/all/themes/smartshift_new/images/btnarrowdown_white.png","/sites/all/themes/smartshift_new/images/btnarrowright.png","/sites/all/themes/smartshift_new/images/btnarrowright_white.png", "/sites/all/themes/smartshift_new/images/btnarrowright-hover.png");

            var windoWidth = jQuery(window).width();
            if (windoWidth < 667) {
                jQuery('body').removeClass('overfHidden');
            }

            jQuery("#go-submit").click(function() {
                jQuery("#webform-client-form-91 .form-submit").click();
            });

            jQuery('#pdfModal').on('show.bs.modal', function(event) {
                var button = jQuery(event.relatedTarget) // Button that triggered the modal
                var file = button.data('file') // Extract info from data-* attributes
                var modal = jQuery(this)
                modal.find('.modal-body input[name=\'submitted[file]\']').val(file)
            })

            jQuery('#videoModal17').on('shown.bs.modal', function() {
                var youtube_path = jQuery("#path_smartshift_video").val();
                jQuery(".player").html("<iframe class = 'video-frame' width='100%' height='56.25%' src=" + youtube_path + "   frameborder='0' allowfullscreen ></iframe>");
                jQuery(".player").fitVids();
            });

            jQuery('#pdfModal').on('hidden.bs.modal', function(event) {
                window.location.href = window.location.href;
                if (!jQuery(event.target).find('.modal-body input[name=\'submitted[file]\']').val()) {
                    window.location.href = window.location.href;
                } else {
                    // alert(jQuery(event.target).find('.modal-body input[name=\'submitted[file]\']').val());
                }
            })

            jQuery(".video-container ").on('hide.bs.modal', function(evt) {
                var player = jQuery(evt.target).find('iframe'),
                        vidSrc = player.prop('src');
                jQuery(".player").html('');
            });

            jQuery('.arrow_left a').on('click', function() {
                //jQuery('#slider1').content_slider('public_go_one_slide_left');
            });

            jQuery('.arrow_right a').on('click', function() {
                //jQuery('#slider1').content_slider('public_go_one_slide_right');
            });

            jQuery('.panel-flexible').removeClass('panels-flexible-10');
            jQuery('.panel-flexible').removeClass('panels-flexible-11');
            jQuery(".panel-flexible").removeClass("panels-flexible-8");

			debugMode = 0;
			if (!debugMode) {
				jQuery('#basicModal :input').focusout(function () {
						if(jQuery(this).val().length > 0) {
							_gaq.push(['_trackEvent', 'Request Call', 'completed', jQuery(this).attr('name')]);
						} 
						else {
							_gaq.push(['_trackEvent', 'Request Call', 'skipped', jQuery(this).attr('name')]);
					}
				});			
				jQuery('#basicModal select').focusout(function () {
						if(jQuery(this).val()!= '') {
							_gaq.push(['_trackEvent', 'Request Call', 'completed', jQuery(this).attr('name')]);
						} 
						else {
							_gaq.push(['_trackEvent', 'Request Call', 'skipped', jQuery(this).attr('name')]);
					}
				});			
			}

        }
    };


})(jQuery);

jQuery(window).load(function() {
    var heights = jQuery(".keepup_slide .thumbnail").map(function() {
        return jQuery(this).height();
    }).get(),

        maxHeight = Math.max.apply(null, heights);
    jQuery(".keepup_slide .thumbnail").height(maxHeight + 40);
jQuery('.pane-download-pdfs.download-pdf-area').prev().css('clear','both')

});
;
