// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug73135.phpt
  it("Bug #73135 (xml_parse() segmentation fault)", function () {
    expect(parser.parseCode("<?php\n    function start_elem($parser, $xml) {\n        xml_parse($parser, $xml);\n    }\n    $xml = <<<HERE\n    <a xmlns=\"ahihi\">\n        <bar foo=\"ahihi\"/>\n    </a>\nHERE;\n    $parser = xml_parser_create_ns();\n    xml_set_element_handler($parser, 'start_elem', 'ahihi');\n    xml_parse($parser, $xml);\n?>")).toMatchSnapshot();
  });
});
