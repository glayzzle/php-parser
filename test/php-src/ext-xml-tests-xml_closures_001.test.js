// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_closures_001.phpt
  it("XML parser test using closures as callbacks", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$start_element = function ($xp, $elem, $attribs)\n{\n    print \"<$elem\";\n    if (sizeof($attribs)) {\n        foreach ($attribs as $k => $v) {\n            print \" $k=\\\"$v\\\"\";\n        }\n    }\n    print \">\\n\";\n};\n$end_element = function ($xp, $elem)\n{\n    print \"</$elem>\\n\";\n};\n$xp = xml_parser_create();\nxml_parser_set_option($xp, XML_OPTION_CASE_FOLDING, false);\nxml_set_element_handler($xp, $start_element, $end_element);\n$fp = fopen(\"xmltest.xml\", \"r\");\nwhile ($data = fread($fp, 4096)) {\n    xml_parse($xp, $data, feof($fp));\n}\nxml_parser_free($xp);\n?>")).toMatchSnapshot();
  });
});
