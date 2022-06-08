// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_error_string_basic.phpt
  it("xml_error_string() - Basic test on 5 error codes", function () {
    expect(parser.parseCode("<?php\n$xmls = array(\n    '<?xml version=\"1.0\"?><element>',\n    '<?xml>',\n    '<?xml version=\"dummy\">',\n    '<?xml?>',\n    '<?xml version=\"1.0\"?><elem></element>',\n);\nforeach ($xmls as $xml) {\n    $xml_parser = xml_parser_create();\n    if (!xml_parse($xml_parser, $xml, true)) {\n        var_dump(xml_get_error_code($xml_parser));\n        var_dump(xml_error_string(xml_get_error_code($xml_parser)));\n    }\n    xml_parser_free($xml_parser);\n}\n?>")).toMatchSnapshot();
  });
});
