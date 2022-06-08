// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/003.phpt
  it("XMLWriter: libxml2 XML Writer, membuffer, flush, attribute", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_start_document($xw, '1.0', 'UTF-8');\nxmlwriter_start_element($xw, \"tag1\");\n$res = xmlwriter_start_attribute($xw, 'attr1');\nxmlwriter_text($xw, \"attr1_value\");\nxmlwriter_end_attribute($xw);\nxmlwriter_write_attribute($xw, \"att2\", \"att2_value\");\nxmlwriter_text($xw, \"Test text for tag1\");\n$res = xmlwriter_start_element($xw, 'tag2');\nif ($res < 1) {\n    echo \"StartElement context validation failed\\n\";\n    exit();\n}\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\necho xmlwriter_flush($xw, true);\n?>")).toMatchSnapshot();
  });
});
