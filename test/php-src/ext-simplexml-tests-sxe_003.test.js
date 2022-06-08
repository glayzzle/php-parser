// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/sxe_003.phpt
  it("SPL: SimpleXMLIterator and getChildren()", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<!DOCTYPE sxe SYSTEM \"notfound.dtd\">\n<sxe id=\"elem1\">\n Plain text.\n <elem1 attr1='first'>\n  Bla bla 1.\n  <!-- comment -->\n  <elem2>\n   Here we have some text data.\n   <elem3>\n    And here some more.\n    <elem4>\n     Wow once again.\n    </elem4>\n   </elem3>\n  </elem2>\n </elem1>\n <elem11 attr2='second'>\n  Bla bla 2.\n  <elem111>\n   Foo Bar\n  </elem111>\n </elem11>\n</sxe>\nEOF;\n$sxe = simplexml_load_string($xml, 'SimpleXMLIterator');\nforeach($sxe->getChildren() as $name => $data) {\n    var_dump($name);\n    var_dump(get_class($data));\n    var_dump(trim($data));\n}\necho \"===RESET===\\n\";\nfor ($sxe->rewind(); $sxe->valid(); $sxe->next()) {\n    var_dump($sxe->hasChildren());\n    var_dump(trim($sxe->key()));\n    var_dump(trim($sxe->current()));\n    foreach($sxe->getChildren() as $name => $data) {\n        var_dump($name);\n        var_dump(get_class($data));\n        var_dump(trim($data));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
