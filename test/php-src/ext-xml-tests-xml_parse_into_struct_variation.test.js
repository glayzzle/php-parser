// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parse_into_struct_variation.phpt
  it("Test xml_parse_into_struct() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing xml_parse_into_struct() : variation ***\\n\";\n$simple = \"<main><para><note>simple note</note></para><para><note>simple note</note></para></main>\";\n$p = xml_parser_create();\nxml_parse_into_struct($p, $simple, $vals, $index);\nxml_parser_free($p);\necho \"Index array\\n\";\nprint_r($index);\necho \"\\nVals array\\n\";\nprint_r($vals);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
