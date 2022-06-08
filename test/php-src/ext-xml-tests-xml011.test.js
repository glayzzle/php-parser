// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml011.phpt
  it("XML Parser test: concat character data and set empty handlers", function () {
    expect(parser.parseCode("<?php\nfunction start_elem($parser,$name,$attribs) {\n   echo \"<$name>\";\n}\nfunction end_elem()\n{\n   echo \"</$name>\";\n}\n$xml = '<text>start<b /> This &amp; that</text>';\n$parser = xml_parser_create();\nxml_parse_into_struct($parser, $xml, $vals, $index);\nprint_r($vals);\nxml_parser_free($parser);\necho \"\\nChange to empty end handler\\n\";\n$parser = xml_parser_create();\nxml_parser_set_option($parser,XML_OPTION_CASE_FOLDING,0);\nxml_set_element_handler($parser,'start_elem','end_elem');\nxml_set_element_handler($parser,'start_elem',NULL);\nxml_parse($parser, $xml, TRUE);\nxml_parser_free($parser);\necho \"\\nDone\\n\";\n?>")).toMatchSnapshot();
  });
});
