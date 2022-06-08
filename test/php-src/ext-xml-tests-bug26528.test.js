// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug26528.phpt
  it("Bug #26528 (HTML entities are not being decoded)", function () {
    expect(parser.parseCode("<?php\n    $sample = \"<?xml version=\\\"1.0\\\"?><test attr=\\\"angle&lt;bracket\\\"/>\";\n    $parser = xml_parser_create();\n    $res = xml_parse_into_struct($parser,$sample,$vals,$index);\n    xml_parser_free($parser);\n    var_dump($vals);\n?>")).toMatchSnapshot();
  });
});
