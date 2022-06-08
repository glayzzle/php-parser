// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_001.phpt
  it("XMLWriter: libxml2 XML Writer, file buffer, flush", function () {
    expect(parser.parseCode("<?php\n$doc_dest = 'OO_001.xml';\n$xw = new XMLWriter();\n$xw->openUri($doc_dest);\n$xw->startDocument('1.0', 'UTF-8', 'standalonearg');\n$xw->startElement(\"tag1\");\n$xw->endDocument();\n// Force to write and empty the buffer\n$output_bytes = $xw->flush(true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
