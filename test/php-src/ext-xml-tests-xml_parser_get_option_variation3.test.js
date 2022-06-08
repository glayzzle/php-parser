// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_parser_get_option_variation3.phpt
  it("xml_parser_get_option() with XML_OPTION_SKIP_TAGSTART and XML_OPTION_SKIP_WHITE", function () {
    expect(parser.parseCode("<?php\n$parser = xml_parser_create();\necho \"defaults:\\n\";\nvar_dump(xml_parser_get_option($parser, XML_OPTION_SKIP_TAGSTART));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_SKIP_WHITE));\necho \"setting:\\n\";\nvar_dump(xml_parser_set_option($parser, XML_OPTION_SKIP_TAGSTART, 7));\nvar_dump(xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1));\necho \"getting:\\n\";\nvar_dump(xml_parser_get_option($parser, XML_OPTION_SKIP_TAGSTART));\nvar_dump(xml_parser_get_option($parser, XML_OPTION_SKIP_WHITE));\n?>")).toMatchSnapshot();
  });
});
