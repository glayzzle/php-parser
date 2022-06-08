// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/004.phpt
  it("SimpleXML: CDATA", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_string(<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n Plain text.\n <elem1 attr1='first'>\n  <!-- comment -->\n  <elem2>\n   <![CDATA[CDATA block]]>\n   <elem3>\n    <elem4>\n     <?test processing instruction ?>\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n</sxe>\nEOF\n);\nvar_dump($sxe);\n$elem1 = $sxe->elem1;\n$elem2 = $elem1->elem2;\nvar_dump(trim((string)$elem2));\n?>")).toMatchSnapshot();
  });
});
