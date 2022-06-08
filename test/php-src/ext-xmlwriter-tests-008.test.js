// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/008.phpt
  it("XMLWriter: libxml2 XML Writer DTD Element & Attlist", function () {
    expect(parser.parseCode("<?php\n$xw = xmlwriter_open_memory();\nxmlwriter_set_indent($xw, TRUE);\nxmlwriter_start_document($xw, NULL, \"UTF-8\");\nxmlwriter_start_dtd_entity($xw, \"ent\", false);\nxmlwriter_text($xw, \"val\");\nxmlwriter_end_dtd_entity($xw);\nxmlwriter_write_dtd_entity($xw, \"ent2\", \"val2\");\nxmlwriter_write_dtd_element($xw, 'sxe', '(elem1+, elem11, elem22*)');\nxmlwriter_write_dtd_attlist($xw, 'sxe', 'id     CDATA  #implied');\nxmlwriter_start_dtd_element($xw, 'elem1');\nxmlwriter_text($xw, 'elem2*');\nxmlwriter_end_dtd_element($xw);\nxmlwriter_start_dtd_attlist($xw, 'elem1');\nxmlwriter_text($xw, \"attr1  CDATA  #required\\n\");\nxmlwriter_text($xw, 'attr2  CDATA  #implied');\nxmlwriter_end_dtd_attlist($xw);\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\n$output = xmlwriter_flush($xw, true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
