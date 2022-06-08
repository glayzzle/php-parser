// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/bug30266.phpt
  it("Bug #30266 (Invalid opcode 137/1/8)", function () {
    expect(parser.parseCode("<?php\n/*\nCurrently (Feb 10, 2005) CVS HEAD fails with the following message:\nFatal error: Invalid opcode 137/1/8. in /home/hartmut/projects/php/dev/head/ext/xml/tests/bug30266.php on line 22\n*/\nclass XML_Parser\n{\n    public $dummy = \"a\";\n    function parse($data)\n    {\n        $parser = xml_parser_create();\n        xml_set_object($parser, $this);\n        xml_set_element_handler($parser, 'startHandler', 'endHandler');\n        xml_parse($parser, $data, true);\n        xml_parser_free($parser);\n    }\n    function startHandler($XmlParser, $tag, $attr)\n    {\n            $this->dummy = \"b\";\n            throw new Exception(\"ex\");\n    }\n    function endHandler($XmlParser, $tag)\n    {\n    }\n}\n$p1 = new Xml_Parser();\ntry {\n    $p1->parse('<tag1><tag2></tag2></tag1>');\n} catch (Exception $e) {\n    echo \"OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
