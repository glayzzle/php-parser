// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug76874.phpt
  it("Bug #76874: xml_parser_free() should never leak memory", function () {
    expect(parser.parseCode("<?php\nclass c\n{\n    private $xml;\n    private $test;\n    public function test()\n    {\n        $this->xml = xml_parser_create();\n        xml_set_character_data_handler($this->xml, array(&$this, 'handle_cdata'));\n        xml_parser_free($this->xml);\n    }\n    public function handle_cdata(&$parser, $data)\n    {\n    }\n}\n$object = new c();\n$object->test();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
