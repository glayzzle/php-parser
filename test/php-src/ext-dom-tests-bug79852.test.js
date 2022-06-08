// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug79852.phpt
  it("Bug #79852: count(DOMNodeList) doesn't match count(IteratorIterator(DOMNodeList))", function () {
    expect(parser.parseCode("<?php\n$XML = <<< XML\n<root>\n  <item>1</item>\n  <item>2</item>\n  <item>3</item>\n</root>\nXML;\n$dom = new DomDocument();\n$dom->loadXml($XML);\n$items = $dom->getElementsByTagName('item');\necho \"Count: \".count($items).\"\\n\";\necho \"Count: \".iterator_count($items->getIterator()).\"\\n\";\n$it = new IteratorIterator($items);\necho \"Count: \".iterator_count($it).\"\\n\";\necho \"Count: \".iterator_count($it).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
