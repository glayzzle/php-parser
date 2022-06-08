// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug72714.phpt
  it("Bug #72714 (_xml_startElementHandler() segmentation fault)", function () {
    expect(parser.parseCode("<?php\nfunction startElement($parser, $name, $attribs) {\n    var_dump($name);\n}\nfunction endElement($parser, $name) {}\nfunction parse($tagstart) {\n    $xml = '<ns1:total>867</ns1:total>';\n    $xml_parser = xml_parser_create();\n    xml_set_element_handler($xml_parser, 'startElement', 'endElement');\n    xml_parser_set_option($xml_parser, XML_OPTION_SKIP_TAGSTART, $tagstart);\n    xml_parse($xml_parser, $xml);\n    xml_parser_free($xml_parser);\n}\nparse(3015809298423721);\nparse(20);\n?>")).toMatchSnapshot();
  });
});
