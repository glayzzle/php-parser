// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/005-mb.phpt
  it("XMLWriter: libxml2 XML Writer, comments", function () {
    expect(parser.parseCode("<?php\n$doc_dest = '私はガラスを食べられます005.xml';\n$xw = xmlwriter_open_uri($doc_dest);\nxmlwriter_start_document($xw, '1.0', 'UTF-8');\nxmlwriter_start_element($xw, \"tag1\");\nxmlwriter_start_comment($xw);\nxmlwriter_text($xw, 'comment');\nxmlwriter_end_comment($xw);\nxmlwriter_write_comment($xw, \"comment #2\");\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\n$output_bytes = xmlwriter_flush($xw, true);\necho file_get_contents($doc_dest);\nunset($xw);\nunlink($doc_dest);\n?>")).toMatchSnapshot();
  });
});
