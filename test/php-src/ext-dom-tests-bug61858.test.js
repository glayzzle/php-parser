// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug61858.phpt
  it("Bug #61858 DOMAttr debug info generates E_WARNING", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadXML('<example a=\"b\">Test</example>');\n$example = $doc->getElementsByTagName('example')->item(0);\n$attr    = $example->getAttributeNode('a');\nvar_dump($attr);\nprint_r($attr);\n?>")).toMatchSnapshot();
  });
});
