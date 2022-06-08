// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug76777.phpt
  it("Bug #76777 (first parameter of libxml_set_external_entity_loader callback undefined)", function () {
    expect(parser.parseCode("<?php\n$xml=<<<EOF\n<?xml version=\"1.0\"?>\n<test/>\nEOF;\n$xsd=<<<EOF\n<?xml version=\"1.0\"?>\n<xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">\n  <xs:include schemaLocation=\"nonexistent.xsd\"/>\n  <xs:element name=\"test\"/>\n</xs:schema>\nEOF;\nlibxml_set_external_entity_loader(function($p,$s,$c) {\n    var_dump($p,$s,$c);\n    die();\n});\n$dom=new DOMDocument($xml);\n$dom->schemaValidateSource($xsd);\n?>")).toMatchSnapshot();
  });
});
