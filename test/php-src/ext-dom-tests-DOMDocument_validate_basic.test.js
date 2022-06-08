// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_validate_basic.phpt
  it("DOMDocument::validate() should validate an internal DTD declaration", function () {
    expect(parser.parseCode("<?php\n$xml = \"<?xml version=\\\"1.0\\\"?>\n<!DOCTYPE note [\n<!ELEMENT note (to,from,heading,body)>\n<!ELEMENT to (#PCDATA)>\n<!ELEMENT from (#PCDATA)>\n<!ELEMENT heading (#PCDATA)>\n<!ELEMENT body (#PCDATA)>\n]>\n<note>\n<to>Tove</to>\n<from>Jani</from>\n<heading>Reminder</heading>\n<body>Don't forget me this weekend</body>\n</note>\";\n$dom = new DOMDocument('1.0');\n$dom->loadXML($xml);\nvar_dump($dom->validate());\n?>")).toMatchSnapshot();
  });
});
