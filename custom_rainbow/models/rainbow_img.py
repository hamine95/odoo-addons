

from odoo import _, api, fields, models


class Rainbow(models.Model):
    _name = "rainbow"
    _description = "rainbow image"
    image_rb = fields.Binary(
        string="Image",
        required=True,
        attachment=False
    )
    anim_type = fields.Char(
        string="animation type",
        required=False,
    )
    def action_submit_picture(self):
        print(self.image_rb)
        # self.env["rainbow"].create(vals)
