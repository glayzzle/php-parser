// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml_set_processing_instruction_handler_basic.phpt
  it("Test xml_set_processing_instruction_handler function : basic", function () {
    expect(parser.parseCode("<?php\nclass XML_Parser\n{\n    function PIHandler($parser, $target, $data)\n    {\n        echo \"Target: \" . $target. \"\\n\";\n        echo \"Data: \" . $data . \"\\n\";\n    }\n    function parse($data)\n    {\n        $parser = xml_parser_create();\n        xml_set_object($parser, $this);\n        xml_set_processing_instruction_handler($parser, \"PIHandler\");\n        xml_parse($parser, $data, true);\n        xml_parser_free($parser);\n    }\n}\n$xml = <<<HERE\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<?xml-stylesheet href=\"default.xsl\" type=\"text/xml\"?>\nHERE;\necho \"Simple test of xml_set_processing_instruction_handler() function\\n\";\n$p1 = new Xml_Parser();\n$p1->parse($xml);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
