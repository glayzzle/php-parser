// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xml/tests/xml007.phpt
  it("xml_parse_into_struct/umlauts in tags", function () {
    expect(parser.parseCode("<?php\nfunction startHandler($parser,$tag,$attr)\n{\n    var_dump($tag,$attr);\n}\nfunction endHandler($parser,$tag)\n{\n    var_dump($tag);\n}\n$xmldata = '<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><��� ���=\"���\">���</���>';\n$parser = xml_parser_create('ISO-8859-1');\nxml_set_element_handler($parser, \"startHandler\", \"endHandler\");\nxml_parse_into_struct($parser, $xmldata, $struct, $index);\nvar_dump($struct);\n?>")).toMatchSnapshot();
  });
});
