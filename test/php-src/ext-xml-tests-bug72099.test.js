// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug72099.phpt
  it("Bug #72099: xml_parse_into_struct segmentation fault", function () {
    expect(parser.parseCode("<?php\n$var1=xml_parser_create_ns();\n$var2=str_repeat(\"a\", 10);\n$var3=[];\n$var4=[];\nxml_parse_into_struct($var1, $var2, $var3, $var4);\nvar_dump($var3);\n?>")).toMatchSnapshot();
  });
});
