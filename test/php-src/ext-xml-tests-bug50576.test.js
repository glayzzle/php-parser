// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug50576.phpt
  it("Bug #50576 (XML_OPTION_SKIP_TAGSTART option has no effect)", function () {
    expect(parser.parseCode("<?php\n$XML = <<<XML\n<?xml version=\"1.0\"?>\n<ns1:listOfAwards xmlns:ns1=\"http://www.fpdsng.com/FPDS\">\n<ns1:count>\n<ns1:total>867</ns1:total>\n</ns1:count>\n</ns1:listOfAwards>\nXML;\n$xml_parser = xml_parser_create();\nxml_parser_set_option($xml_parser, XML_OPTION_SKIP_TAGSTART, 4);\nxml_parse_into_struct($xml_parser, $XML, $vals, $index);\necho 'Index array' . PHP_EOL;\nprint_r($index);\necho 'Vals array' . PHP_EOL;\nprint_r($vals);\nxml_parser_free($xml_parser);\nfunction startElement($parser, $name, $attribs) { echo $name . PHP_EOL; }\nfunction endElement($parser, $name) { echo $name . PHP_EOL; }\n$xml_parser = xml_parser_create();\nxml_set_element_handler($xml_parser, 'startElement', 'endElement');\nxml_parser_set_option($xml_parser, XML_OPTION_SKIP_TAGSTART, 4);\nxml_parse($xml_parser, $XML);\nxml_parser_free($xml_parser);\n?>")).toMatchSnapshot();
  });
});
