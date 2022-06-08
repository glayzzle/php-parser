// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug49490.phpt
  it("Bug #49490 (XPath namespace prefix conflict).", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadXML('<prefix:root xmlns:prefix=\"urn:a\" />');\n$xp = new DOMXPath($doc);\n$xp->registerNamespace('prefix', 'urn:b');\necho($xp->query('//prefix:root', null, false)->length . \"\\n\");\n?>")).toMatchSnapshot();
  });
});
