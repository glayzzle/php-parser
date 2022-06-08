// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug37386.phpt
  it("Bug #39760 (autocreating element doesn't assign value to first node)", function () {
    expect(parser.parseCode("<?php\n$sx1 = new SimpleXMLElement(\"<root />\");\n$sx1->node[0] = 'node1';\n$sx1->node[1] = 'node2';\nprint $sx1->asXML().\"\\n\";\n$node = $sx1->node[0];\n$node[0] = 'New Value';\nprint $sx1->asXML();\n?>")).toMatchSnapshot();
  });
});
