// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/002.phpt
  it("XMLWriter: libxml2 XML Writer, membuffer, flush", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_start_document($xw, '1.0', 'UTF-8');\nxmlwriter_start_element($xw, \"tag1\");\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\necho xmlwriter_flush($xw, true);\n?>")).toMatchSnapshot();
  });
});
