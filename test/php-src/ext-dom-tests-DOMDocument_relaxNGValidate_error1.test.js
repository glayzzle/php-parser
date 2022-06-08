// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_relaxNGValidate_error1.phpt
  it("DOMDocument::relaxNGValidate() should fail if document doesn't validate", function () {
    expect(parser.parseCode("<?php\n$rng = __DIR__.'/DOMDocument_relaxNGValidate_basic.rng';\n$xml = <<< XML\n<?xml version=\"1.0\"?>\n<apple>\n  <pear>Pear</pear>\n  <pear>Pear</pear>\n</apple>\nXML;\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$result = $doc->relaxNGValidate($rng);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
