// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug73907.phpt
  it("Bug #73907 nextSibling property not included in var_dump of DOMNode", function () {
    expect(parser.parseCode("<?php\n$xmlString = '<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<root>\n</root>';\n$doc = new DOMDocument();\n$doc->loadXML($xmlString);\n$attr = $doc->documentElement;\nvar_dump($attr);\n?>")).toMatchSnapshot();
  });
});
