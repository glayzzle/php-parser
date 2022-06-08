// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/024.phpt
  it("SimpleXML: XPath and attributes", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<root>\n<elem attr1='11' attr2='12' attr3='13'/>\n<elem attr1='21' attr2='22' attr3='23'/>\n<elem attr1='31' attr2='32' attr3='33'/>\n</root>\nEOF;\n$sxe = simplexml_load_string($xml);\nfunction test($xpath)\n{\n    global $sxe;\n    echo \"===$xpath===\\n\";\n    var_dump($sxe->xpath($xpath));\n}\ntest('elem/@attr2');\ntest('//@attr2');\ntest('//@*');\ntest('elem[2]/@attr2');\n?>")).toMatchSnapshot();
  });
});
