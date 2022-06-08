// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_relaxNGValidateSource_error2.phpt
  it("DOMDocument::relaxNGValidateSource() should fail on invalid RNG schema", function () {
    expect(parser.parseCode("<?php\n$rng = <<< RNG\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<grammar ns=\"\" xmlns=\"http://relaxng.org/ns/structure/1.0\"\n  datatypeLibrary=\"http://www.w3.org/2001/XMLSchema-datatypes\">\n  <start>\n    <element name=\"apple\">\n    </element>\n  </start>\n</grammar>\nRNG;\n$xml = <<< XML\n<?xml version=\"1.0\"?>\n<apple>\n  <pear>Pear</pear>\n</apple>\nXML;\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$result = $doc->relaxNGValidateSource($rng);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
