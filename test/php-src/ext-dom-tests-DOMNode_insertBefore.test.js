// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_insertBefore.phpt
  it("Tests DOMNode::insertBefore()", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->loadXML('<root/>');\necho $dom->saveXML();\n$e1 = $dom->createElement(\"A\");\n$e2 = $dom->documentElement->appendChild($dom->createElement(\"B\"));\necho \"Add new node B\\n\";\necho $dom->saveXML();\necho \"Add new node A before B\\n\";\n$e2->parentNode->insertBefore($e1, $e2);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
