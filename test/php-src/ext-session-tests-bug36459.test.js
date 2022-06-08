// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug36459.phpt
  it("Bug #31454 (Incorrect adding PHPSESSID to links, which contains \\r\\n)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_start();\n# Do not remove \\r from this tests, they are essential!\n?>\n<html>\n  <head>\n    <title>Bug #36459 Incorrect adding PHPSESSID to links, which contains \\r\\n</title>\n  </head>\n  <body>\n    <p>See source html code</p>\n    <a href=\"/b2w/www/ru/adm/pages/?action=prev&rec_id=8&pid=2\"\n       style=\"font: normal 11pt Times New Roman\">incorrect link</a><br />\n    <br />\n    <a href=\"/b2w/www/ru/adm/pages/?action=prev&rec_id=8&pid=2\" style=\"font: normal 11pt Times New Roman\">correct link</a>\n  </body>\n</html>")).toMatchSnapshot();
  });
});
