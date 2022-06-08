// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parser_set_option_basic.phpt
  it("Test xml_set_notation_decl_handler function : basic", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for xml_parser_get_option() function\\n\";\n$parser = xml_parser_create_ns();\nvar_dump(xml_parser_get_option($parser, XML_OPTION_CASE_FOLDING));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_TARGET_ENCODING));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 1));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, \"ISO-8859-1\"));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_CASE_FOLDING));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_TARGET_ENCODING));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, \"UTF-8\"));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_CASE_FOLDING));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_TARGET_ENCODING));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, \"US-ASCII\"));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_TARGET_ENCODING));\nxml_parser_free( $parser );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
