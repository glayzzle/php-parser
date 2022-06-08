// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/001.phpt
  it("XMLWriter: libxml2 XML Writer, file buffer, flush", function () {
    expect(parser.parseCode("<?php\n$doc_dest = '001.xml';\n$xw = xmlwriter_open_uri($doc_dest);\nxmlwriter_start_document($xw, '1.0', 'UTF-8');\nxmlwriter_start_element($xw, \"tag1\");\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\n$output_bytes = xmlwriter_flush($xw, true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
