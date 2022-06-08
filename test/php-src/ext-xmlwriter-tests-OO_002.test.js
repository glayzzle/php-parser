// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_002.phpt
  it("XMLWriter: libxml2 XML Writer, membuffer, flush", function () {
    expect(parser.parseCode("<?php\n$xw = new XMLWriter();\n$xw->openMemory();\n$xw->startDocument('1.0', 'UTF-8', 'standalone');\n$xw->startElement(\"tag1\");\n$xw->endDocument();\n// Force to write and empty the buffer\necho $xw->flush(true);\n?>")).toMatchSnapshot();
  });
});
