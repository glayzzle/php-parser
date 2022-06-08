// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug55700.phpt
  it("Bug #55700 (XPath namespace prefix conflict, global registerNodeNS flag)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadXML('<prefix:root xmlns:prefix=\"urn:a\" />');\n$xp = new DOMXPath($doc, true);\n$xp->registerNamespace('prefix', 'urn:b');\necho($xp->query('//prefix:root')->length . \"\\n\");\n$xp = new DOMXPath($doc, false);\n$xp->registerNamespace('prefix', 'urn:b');\necho($xp->query('//prefix:root')->length . \"\\n\");\nvar_dump($xp->registerNodeNamespaces);\n$xp->registerNodeNamespaces = true;\nvar_dump($xp->registerNodeNamespaces);\necho($xp->query('//prefix:root')->length . \"\\n\");\nvar_dump($xp);\n?>")).toMatchSnapshot();
  });
});
