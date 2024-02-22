from dateutil.relativedelta import relativedelta

from odoo import _, api, fields, models


class Employee(models.Model):
    _inherit = "hr.employee"

    promotion = fields.Char(
        string="Number",
        index=True,
        default=lambda self: _("New"),
    )