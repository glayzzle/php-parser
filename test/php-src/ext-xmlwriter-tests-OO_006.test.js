// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/OO_006.phpt
  it("XMLWriter: libxml2 XML Writer, startDTD/writeElementNS", function () {
    expect(parser.parseCode("<?php\n$doc_dest = 'OO_006.xml';\n$xw = new XMLWriter();\n$xw->openUri($doc_dest);\n$xw->startDtd('foo', NULL, 'urn:bar');\n$xw->endDtd();\n$xw->startElement('foo');\n$xw->writeElementNS('foo', 'bar', 'urn:foo', 'dummy content');\n$xw->endElement();\n// Force to write and empty the buffer\n$output_bytes = $xw->flush(true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
