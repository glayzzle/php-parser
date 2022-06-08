// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug42139.phpt
  it("Bug #42139 (XMLReader option constants are broken using XML())", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!DOCTYPE root [\n<!ELEMENT root ANY>\n<!ENTITY x \"y\">\n]>\n<root>&x;</root>\nXML;\n$reader = new XMLReader;\n$reader->XML( $xml, NULL, LIBXML_NOENT);\nwhile ( $reader->read() ) {\n  echo \"{$reader->nodeType}, {$reader->name}, {$reader->value}\\n\";\n}\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
