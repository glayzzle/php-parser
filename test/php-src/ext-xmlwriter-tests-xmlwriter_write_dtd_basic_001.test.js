// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_write_dtd_basic_001.phpt
  it("xmlwriter_write_dtd basic function tests", function () {
    expect(parser.parseCode("<?php\n$xmlwriter = xmlwriter_open_memory();\nvar_dump(xmlwriter_write_dtd($xmlwriter, 'bla1', 'bla2', 'bla3', 'bla4'));\n$output = xmlwriter_flush($xmlwriter, true);\nprint $output . PHP_EOL;\nvar_dump(xmlwriter_write_dtd($xmlwriter, '', '', ''));\n$output = xmlwriter_flush($xmlwriter, true);\nprint $output;\n?>")).toMatchSnapshot();
  });
});
