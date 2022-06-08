// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/009.phpt
  it("XMLWriter: PI, Comment, CDATA", function () {
    expect(parser.parseCode("<?php\n/*\nLibxml 2.6.24 and up adds a new line after a processing instruction (PI)\n*/\n$xw = xmlwriter_open_memory();\nxmlwriter_set_indent($xw, TRUE);\nxmlwriter_start_document($xw, NULL, \"UTF-8\");\nxmlwriter_start_element($xw, 'root');\nxmlwriter_write_attribute($xw, 'id', 'elem1');\nxmlwriter_start_element($xw, 'elem1');\nxmlwriter_write_attribute($xw, 'attr1', 'first');\nxmlwriter_write_comment($xw, 'start PI');\nxmlwriter_start_element($xw, 'pi');\nxmlwriter_write_pi($xw, 'php', 'echo \"hello world\"; ');\nxmlwriter_end_element($xw);\nxmlwriter_start_element($xw, 'cdata');\nxmlwriter_start_cdata($xw);\nxmlwriter_text($xw, '<>&\"');\nxmlwriter_end_cdata($xw);\nxmlwriter_end_element($xw);\nxmlwriter_end_element($xw);\nxmlwriter_end_element($xw);\nxmlwriter_end_document($xw);\n// Force to write and empty the buffer\n$output = xmlwriter_flush($xw, true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
