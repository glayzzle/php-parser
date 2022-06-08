// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug44478.phpt
  it("Bug #44478 (Inconsistent behaviour when assigning new nodes)", function () {
    expect(parser.parseCode("<?php\n$xml_element = new simpleXMLElement('<root></root>');\n$xml_element->node1 = 'a &#38; b';\nprint $xml_element->node1.\"\\n\";\n$xml_element->node1 = 'a &#38; b';\nprint $xml_element->node1.\"\\n\";\n$xml_element->addChild('node2','a &#38; b');\nprint $xml_element->node2.\"\\n\";\n$xml_element->node2 = 'a & b';\nprint $xml_element->node2.\"\\n\";\nprint $xml_element->asXML();\n?>")).toMatchSnapshot();
  });
});
