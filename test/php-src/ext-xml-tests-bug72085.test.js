// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug72085.phpt
  it("Bug #72085 (SEGV on unknown address zif_xml_parse)", function () {
    expect(parser.parseCode("<?php\n$var1 = xml_parser_create_ns();\nxml_set_element_handler($var1, new Exception(\"\"), 4096);\nxml_parse($var1,  str_repeat(\"<a>\", 10));\n?>")).toMatchSnapshot();
  });
});
