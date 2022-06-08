// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_validate_external_dtd.phpt
  it("DOMDocument::validate() should validate an external DTD declaration", function () {
    expect(parser.parseCode("<?php\n// reusing existing xml: http://cvs.php.net/viewvc.cgi/php-src/ext/dom/tests/dom.xml?view=co&content-type=text%2Fplain\n// reusing existing dtd: http://cvs.php.net/viewvc.cgi/php-src/ext/dom/tests/dom.ent?view=co&content-type=text%2Fplain\n$dom = new DOMDocument('1.0');\n$dom->substituteEntities = true;\n$dom->load(__DIR__.'/dom.xml');\nvar_dump($dom->validate());\n?>")).toMatchSnapshot();
  });
});
