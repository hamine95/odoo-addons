
from odoo import models,fields,api


class SelectImage(models.TransientModel):
    _name = "select.image"

    image_rb=fields.Binary(
        string="Rainbow Image",
        required=True,
    )

