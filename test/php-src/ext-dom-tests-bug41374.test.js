// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug41374.phpt
  it("Bug #41374 (wholetext concats values of wrong nodes)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOXML\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<root>foo<child />baz</root>\nEOXML;\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$root = $doc->documentElement;\n$foo = $root->firstChild;\nvar_dump($foo->wholeText == \"foo\");\n$bar = $root->insertBefore($doc->createTextNode(\"bar\"), $foo->nextSibling);\nvar_dump($foo->wholeText == \"foobar\");\nvar_dump($foo->wholeText == $bar->wholeText);\n$baz = $bar->nextSibling->nextSibling;\nvar_dump($baz->wholeText === $foo->wholeText);\n?>")).toMatchSnapshot();
  });
});
