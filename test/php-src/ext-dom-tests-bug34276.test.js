// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug34276.phpt
  it("Bug #34276 (setAttributeNS and default namespace)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<HERE\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<foo xmlns=\"http://www.example.com/ns/foo\"\n     xmlns:fubar=\"http://www.example.com/ns/fubar\" attra=\"attra\" />\nHERE;\nfunction dump($elems) {\n    foreach ($elems as $elem) {\n        var_dump($elem->nodeName);\n        dump($elem->childNodes);\n    }\n}\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$foo = $dom->documentElement;\nvar_dump($foo->hasAttributeNS('http://www.example.com/ns/foo', 'attra'));\nvar_dump($foo->getAttributeNS('http://www.example.com/ns/foo', 'attra'));\n$foo->setAttributeNS('http://www.example.com/ns/foo', 'attra', 'attranew');\n$foo->setAttributeNS('http://www.example.com/ns/fubar', 'attrb', 'attrbnew');\n$foo->setAttributeNS('http://www.example.com/ns/foo', 'attrc', 'attrc');\nvar_dump($foo->getAttributeNS('http://www.example.com/ns/foo', 'attra'));\nvar_dump($foo->getAttributeNS('http://www.example.com/ns/fubar', 'attrb'));\nvar_dump($foo->getAttributeNS('http://www.example.com/ns/foo', 'attrc'));\nprint $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
