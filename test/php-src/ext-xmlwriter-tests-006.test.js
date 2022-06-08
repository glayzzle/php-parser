// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/006.phpt
  it("XMLWriter: libxml2 XML Writer, startDTD/writeElementNS", function () {
    expect(parser.parseCode("<?php\n$doc_dest = '006.xml';\n$xw = xmlwriter_open_uri($doc_dest);\nxmlwriter_start_dtd($xw, 'foo', NULL, 'urn:bar');\nxmlwriter_end_dtd($xw);\nxmlwriter_start_element($xw, 'foo');\nxmlwriter_write_element_ns($xw, 'foo', 'bar', 'urn:foo', 'dummy content');\nxmlwriter_end_element($xw);\n// Force to write and empty the buffer\n$output_bytes = xmlwriter_flush($xw, true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
