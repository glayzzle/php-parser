// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug65236.phpt
  it("Bug #65236 (heap corruption in xml parser)", function () {
    expect(parser.parseCode("<?php\nxml_parse_into_struct(xml_parser_create_ns(), str_repeat(\"<blah>\", 1000), $a);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
