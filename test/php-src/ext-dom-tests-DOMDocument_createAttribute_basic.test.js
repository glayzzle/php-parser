// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createAttribute_basic.phpt
  it("DomDocument::createAttribute() - basic test for DomDocument::createAttribute()", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$node = $doc->createElement(\"para\");\n$newnode = $doc->appendChild($node);\n// A pass case.\n$test_attribute = $doc->createAttribute(\"hahaha\");\n$node->appendChild($test_attribute);\necho $doc->saveXML();\n?>")).toMatchSnapshot();
  });
});
