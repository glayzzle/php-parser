// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_relaxNGValidateSource_basic.phpt
  it("DOMDocument::relaxNGValidateSource()", function () {
    expect(parser.parseCode("<?php\n$rng = <<< RNG\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<grammar ns=\"\" xmlns=\"http://relaxng.org/ns/structure/1.0\"\n  datatypeLibrary=\"http://www.w3.org/2001/XMLSchema-datatypes\">\n  <start>\n    <element name=\"apple\">\n      <element name=\"pear\">\n        <data type=\"NCName\"/>\n      </element>\n    </element>\n  </start>\n</grammar>\nRNG;\n$good_xml = <<< GOOD_XML\n<?xml version=\"1.0\"?>\n<apple>\n  <pear>Pear</pear>\n</apple>\nGOOD_XML;\n$doc = new DOMDocument();\n$doc->loadXML($good_xml);\n$result = $doc->relaxNGValidateSource($rng);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
