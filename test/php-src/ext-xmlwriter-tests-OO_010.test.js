// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_010.phpt
  it("XMLWriter: libxml2 XML Writer, writeAttributeNS method", function () {
    expect(parser.parseCode("<?php\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->setIndent(TRUE);\n$xw->setIndentString('   ');\n$xw->startDocument('1.0', \"UTF-8\");\n$xw->startElement('root');\n$xw->startElementNS('ns1', 'child1', 'urn:ns1');\n$xw->writeAttributeNS('ns1', 'att1', 'urn:ns1', '<>\"\\'&');\n$xw->writeElement('chars', \"special characters: <>\\\"'&\");\n$xw->endElement();\n$xw->endDocument();\n// Force to write and empty the buffer\n$output = $xw->flush(true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
