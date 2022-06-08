// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/bug41326.phpt
  it("Bug #41287 (Writing empty tags with Xmlwriter::WriteElement[ns])", function () {
    expect(parser.parseCode("<?php\n$xml = new XmlWriter();\n$xml->openMemory();\n$xml->setIndent(true);\n$xml->startDocument();\n$xml->startElement('test');\n$xml->writeElement('foo', null);\n$xml->writeElement('foo2', \"\");\n$xml->writeElement('foo3');\n$xml->startElement('bar');\n$xml->endElement();\n$xml->endElement();\nprint $xml->flush(true);\nprint \"\\n\";\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->setIndent(true);\n$xw->startDocument();\n$xw->startElementNS('test', 'test', 'urn:x-test:');\n$xw->writeElementNS('test', 'foo', null, '');\n$xw->writeElementNS(null, 'bar', 'urn:x-test:', '');\n$xw->writeElementNS(null, 'bar', 'urn:x-test:', NULL);\n$xw->writeElementNS(null, 'bar', 'urn:x-test:');\n$xw->writeElementNS(null, 'bar', '', '');\n$xw->endElement();\n$xw->endDocument();\nprint $xw->flush(true);\n?>")).toMatchSnapshot();
  });
});
