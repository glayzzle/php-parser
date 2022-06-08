// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlwriter/tests/xmlwriter_set_indent_string_basic_001.phpt
  it("xmlwriter_set_indent_string passing xmlwriter resource", function () {
    expect(parser.parseCode("<?php\n$temp_filename = __DIR__.\"/xmlwriter_set_indent_string.tmp\";\n    $fp = fopen($temp_filename, \"w\");\n    fwrite ($fp, \"Hi\");\n    fclose($fp);\n$resource = xmlwriter_open_uri($temp_filename);\nvar_dump(xmlwriter_set_indent_string($resource, '  '));\n?>")).toMatchSnapshot();
  });
});
