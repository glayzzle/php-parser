// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug72793.phpt
  it("Bug #72793: xml_parser_free leaks mem when execute xml_set_object", function () {
    expect(parser.parseCode("<?php\nclass xml  {\n    var $parser;\n    function __construct()\n    {\n        $this->parser = xml_parser_create();\n        xml_set_object($this->parser, $this);\n    }\n    function parse($data)\n    {\n        xml_parse($this->parser, $data);\n    }\n    function free(){\n        xml_parser_free($this->parser);\n    }\n}\n$xml_test = '<?xml version=\"1.0\" encoding=\"utf-8\"?><test></test>';\n$xml_parser = new xml();\n$xml_parser->parse($xml_test);\n$xml_parser->free();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
