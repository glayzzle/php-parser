// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/012.phpt
  it("XMLWriter: libxml2 XML Writer, full_end_element function", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_set_indent($xw, TRUE);\nxmlwriter_set_indent_string($xw, '   ');\nxmlwriter_start_document($xw, '1.0', \"UTF-8\");\nxmlwriter_start_element($xw, 'root');\nxmlwriter_start_element_ns($xw, 'ns1', 'child1', 'urn:ns1');\nxmlwriter_write_attribute_ns($xw, 'ns1','att1', 'urn:ns1', '<>\"\\'&');\nxmlwriter_write_element($xw, 'chars', \"special characters: <>\\\"'&\");\nxmlwriter_end_element($xw);\nxmlwriter_start_element($xw, 'empty');\nxmlwriter_full_end_element($xw);\nxmlwriter_full_end_element($xw);\n// Force to write and empty the buffer\n$output = xmlwriter_flush($xw, true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
