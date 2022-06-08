// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/009.phpt
  it("SimpleXML: foreach", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_string(<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n Plain text.\n <elem1 attr1='first'>\n  Bla bla 1.\n  <!-- comment -->\n  <elem2>\n   Here we have some text data.\n   <elem3>\n    And here some more.\n    <elem4>\n     Wow once again.\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n <elem11 attr2='second'>\n  Bla bla 2.\n </elem11>\n</sxe>\nEOF\n);\nforeach($sxe->children() as $name=>$val) {\n    var_dump($name);\n    var_dump(get_class($val));\n    var_dump(trim($val));\n}\n?>")).toMatchSnapshot();
  });
});
