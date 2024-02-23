

from odoo import _, api, fields, models


class Rainbow(models.Model):
    _name = "rainbow"
    _description = "rainbow image"
    image_rb = fields.Binary(
        string="Image",
        required=True,
        attachment=False
    )
    file_upload = fields.Char('File Name')
    anim_type = fields.Char(
        string="animation type",
        required=False,
    )
    @api.model
    def create(self, vals):
        reslt=self.env['rainbow'].search([])
        print("exist:",len(reslt))
        if len(reslt)>0:
            reslt=reslt[0]
            reslt.write(vals)
            return reslt
        else:
            return super(Rainbow,self).create(vals)
    def action_submit_picture(self):
        print(self.image_rb)
        # self.env["rainbow"].create(vals)
