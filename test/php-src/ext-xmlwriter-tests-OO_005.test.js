// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_005.phpt
  it("XMLWriter: libxml2 XML Writer, comments", function () {
    expect(parser.parseCode("<?php\n$doc_dest = 'OO_005.xml';\n$xw = new XMLWriter();\n$xw->openUri($doc_dest);\n$xw->startDocument('1.0', 'UTF-8');\n$xw->startElement(\"tag1\");\n$xw->startComment();\n$xw->text('comment');\n$xw->endComment();\n$xw->writeComment(\"comment #2\");\n$xw->endDocument();\n// Force to write and empty the buffer\n$output_bytes = $xw->flush(true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
