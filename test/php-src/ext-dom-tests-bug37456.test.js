// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug37456.phpt
  it("Bug #37456 (DOMElement->setAttribute() loops forever)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->resolveExternals = true;\n$doc->load(__DIR__.\"/dom.xml\");\n$root = $doc->getElementsByTagName('foo')->item(0);\n$root->setAttribute('bar', '&gt;');\n$attr = $root->setAttribute('bar', 'newval');\nprint $attr->nodeValue;\n?>")).toMatchSnapshot();
  });
});
