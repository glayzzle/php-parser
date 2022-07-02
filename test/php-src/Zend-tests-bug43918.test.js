// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43918.phpt
  it("Bug #43918 (Segmentation fault in garbage collector)", function () {
    expect(parser.parseCode("<?php\n$xmlstr = <<<XML\n<?xml version='1.0' standalone='yes'?>\n<movies>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n <movie>\n  <title>TEST</title>\n </movie>\n</movies>\nXML;\n$Array = array( );\nfor( $XX = 0; $XX < 2000; ++$XX )\n{\n $Array[] = $xml = new SimpleXMLElement($xmlstr);\n}\ngc_collect_cycles( );\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
