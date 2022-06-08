// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml004.phpt
  it("XML parser case folding test", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$xp = xml_parser_create();\nxml_parser_set_option($xp, XML_OPTION_CASE_FOLDING, false);\nxml_set_element_handler($xp, \"start_element\", \"end_element\");\n$fp = fopen(\"xmltest.xml\", \"r\");\nwhile ($data = fread($fp, 4096)) {\n    xml_parse($xp, $data, feof($fp));\n}\nxml_parser_free($xp);\n$xp = xml_parser_create();\nxml_parser_set_option($xp, XML_OPTION_CASE_FOLDING, true);\nxml_set_element_handler($xp, \"start_element\", \"end_element\");\n$fp = fopen(\"xmltest.xml\", \"r\");\nwhile ($data = fread($fp, 4096)) {\n    xml_parse($xp, $data, feof($fp));\n}\nxml_parser_free($xp);\nfunction start_element($xp, $elem, $attribs)\n{\n    print \"<$elem\";\n    if (sizeof($attribs)) {\n        foreach ($attribs as $k => $v) {\n            print \" $k=\\\"$v\\\"\";\n        }\n    }\n    print \">\\n\";\n}\nfunction end_element($xp, $elem)\n{\n    print \"</$elem>\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
