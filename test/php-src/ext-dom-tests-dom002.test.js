// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom002.phpt
  it("Test 2: getElementsByTagName() / getElementsByTagNameNS()", function () {
    expect(parser.parseCode("<?php\n$xml = <<<HERE\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<foo xmlns=\"http://www.example.com/ns/foo\"\n     xmlns:fubar=\"http://www.example.com/ns/fubar\">\n  <bar><test1 /></bar>\n  <bar><test2 /></bar>\n  <fubar:bar><test3 /></fubar:bar>\n  <fubar:bar><test4 /></fubar:bar>\n</foo>\nHERE;\nfunction dump($elems) {\n    foreach ($elems as $elem) {\n        var_dump($elem->nodeName);\n        dump($elem->childNodes);\n    }\n}\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$doc = $dom->documentElement;\ndump($dom->getElementsByTagName('bar'));\ndump($doc->getElementsByTagName('bar'));\ndump($dom->getElementsByTagNameNS('http://www.example.com/ns/fubar', 'bar'));\ndump($doc->getElementsByTagNameNS('http://www.example.com/ns/fubar', 'bar'));\n?>")).toMatchSnapshot();
  });
});
