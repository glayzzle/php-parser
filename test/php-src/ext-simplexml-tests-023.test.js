// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/023.phpt
  it("SimpleXML: Attributes with entities", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE talks SYSTEM \"nbsp.dtd\" [\n<!ELEMENT root  EMPTY>\n<!ATTLIST root  attr1 CDATA #IMPLIED>\n<!ENTITY  nbsp   \"&#38;#x00A0;\">\n]>\n<root attr='foo&nbsp;bar&nbsp;baz'></root>\nEOF;\n$sxe = simplexml_load_string($xml);\nvar_dump($sxe);\nvar_dump($sxe['attr']);\n?>")).toMatchSnapshot();
  });
});
