odoo.define('custom.rainbow', function (require) {
"use strict";
var core = require("web.core");
var _t = core._t;

var rainbowman=require('web.RainbowMan');
var rpc = require('web.rpc');
var cust_rainbow=rainbowman.include({
    template: 'rainbow_man.notification',
    xmlDependencies: ['/custom_rainbow/static/src/xml/remove_rainbow.xml'],

    init: function (options) {
        console.log("mic check one two");
        var image_format;
        var reslt= rpc.query({
                            model: 'rainbow',
                            method: 'search_read',
                            args: [],
                        }).then(function(result){
                            console.log("result:")
                            image_format = 'data:image/png;base64,'+ result[3].image_rb
                            return image_format
                         });
        console.log("result:",reslt)
     this._super.apply(this, arguments);
    var rainbowDelay = {slow: 4500, medium: 3500, fast: 2000, no: false};
    this.options = {
        fadeout: 'medium',
         img_url: reslt,
         message: _t('Well Done!'),
     };
    this.delay = rainbowDelay[this.options.fadeout];
    },

    willStart: function () {
         var self=this;
         var reslt= rpc.query({
                            model: 'rainbow',
                            method: 'search_read',
                            args: [],
                        }).then(function(result){
                            console.log("result:")
                            console.log("options:",self.options.img_url)
                            self.options.img_url = 'data:image/png;base64,'+ result[3].image_rb
                         });
    return Promise.all([this._super.apply(this, arguments), reslt]);
    },

});
return cust_rainbow;
});