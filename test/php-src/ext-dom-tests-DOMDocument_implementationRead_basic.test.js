// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_implementationRead_basic.phpt
  it("DOMDocument::DOMImplementation - basic test for DomDocument::DOMImplementation", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$doc->load(__DIR__.\"/book.xml\");\nvar_dump($doc->implementation);\n?>")).toMatchSnapshot();
  });
});
