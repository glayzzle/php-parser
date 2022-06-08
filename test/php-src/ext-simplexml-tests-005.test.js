// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/005.phpt
  it("SimpleXML: Text data", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_string(<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n Plain text.\n <elem1 attr1='first'>\n  <!-- comment -->\n  <elem2>\n   Here we have some text data.\n   <elem3>\n    And here some more.\n    <elem4>\n     Wow once again.\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n</sxe>\nEOF\n);\nvar_dump(trim($sxe->elem1->elem2));\nvar_dump(trim($sxe->elem1->elem2->elem3));\nvar_dump(trim($sxe->elem1->elem2->elem3->elem4));\necho \"---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
