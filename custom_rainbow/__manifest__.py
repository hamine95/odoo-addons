# Copyright 2018 ACSONE SA/NV
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "custom rainbow man",
    "summary": """
        set up a custom image in place of rainbow effect""",
    "version": "14.0.1.0.2",
    "license": "AGPL-3",
    "author": "Amine HAbbaina",
    "website": "https://www.aminedev.pp.ua",
    "depends": ['base'],
    "data": [
        "views/image_menu.xml",
        "views/custom_rainbow.xml",
        "security/ir.model.access.csv",
    ],
      "qweb":["static/src/xml/remove_rainbow.xml"
    ],

}
