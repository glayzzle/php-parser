// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_write_attribute_ns_basic_001.phpt
  it("xmlwriter_write_attribute_ns basic function tests", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_set_indent($xw, TRUE);\nxmlwriter_start_document($xw, NULL, \"UTF-8\");\nxmlwriter_start_element($xw, 'root');\nxmlwriter_write_attribute_ns($xw, 'prefix', 'id', 'http://www.php.net/uri', 'elem1');\nxmlwriter_start_element($xw, 'elem1');\nxmlwriter_write_attribute($xw, 'attr1', 'first');\nxmlwriter_end_element($xw);\nxmlwriter_full_end_element($xw);\nxmlwriter_end_document($xw);\n$output = xmlwriter_flush($xw, true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
