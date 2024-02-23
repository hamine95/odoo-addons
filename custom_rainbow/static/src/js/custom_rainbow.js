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
     this._super.apply(this, arguments);
    var rainbowDelay = {slow: 4500, medium: 3500, fast: 2000, no: false};
    this.options = {
        fadeout: 'medium',
         img_url: '/web/static/src/img/smile.svg',
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
                            console.log("options:",result[0].image_rb)
                            if(result.length)
                            {

                                var ext=result[0].file_upload.split('.')[1]
                                if(ext=="svg")
                                {
                                    ext=ext+"+xml"
                                }
                                console.log("extension:",ext)
                                self.options.img_url = 'data:image/'+ext+';base64,'+ result[0].image_rb
                            }

                         });
    return Promise.all([this._super.apply(this, arguments), reslt]);
    },

});
return cust_rainbow;
});