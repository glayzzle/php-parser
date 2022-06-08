// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug35447.phpt
  it("Bug #35447 (xml_parse_into_struct() chokes on the UTF-8 BOM)", function () {
    expect(parser.parseCode("<?php\n$data = <<<END_OF_XML\n\\xEF\\xBB\\xBF<?xml version=\"1.0\" encoding=\"utf-8\"?\\x3e\n<!DOCTYPE bundle [\n    <!ELEMENT bundle (resource)+>\n    <!ELEMENT resource (#PCDATA)>\n    <!ATTLIST resource\n              key CDATA #REQUIRED\n              type (literal|pattern|sub) \"literal\"\n              >\n]>\n<resource key=\"rSeeYou\">A bient&amp;244;t</resource>\nEND_OF_XML;\n$parser = xml_parser_create_ns('UTF-8');\nxml_parser_set_option($parser,XML_OPTION_CASE_FOLDING,0);\n$result = xml_parse_into_struct($parser, $data, $vals, $index);\nxml_parser_free($parser);\nvar_dump($vals);\n?>")).toMatchSnapshot();
  });
});
