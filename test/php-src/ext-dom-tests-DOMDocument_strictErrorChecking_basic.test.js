// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_strictErrorChecking_basic.phpt
  it("DomDocument::$strictErrorChecking - basic test", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\nvar_dump($doc->strictErrorChecking);\n$doc->strictErrorChecking = false;\nvar_dump($doc->strictErrorChecking);\n?>")).toMatchSnapshot();
  });
});
