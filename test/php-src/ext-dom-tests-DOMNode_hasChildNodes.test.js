// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_hasChildNodes.phpt
  it("Tests DOMNode::hasChildNodes()", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->loadXML('<root/>');\necho $dom->saveXML();\necho \"Document has child nodes\\n\";\nvar_dump($dom->documentElement->hasChildNodes());\necho \"Document has child nodes\\n\";\n$dom->loadXML('<root><a/></root>');\nvar_dump($dom->documentElement->hasChildNodes());\necho \"Remove node and save\\n\";\n$dom->documentElement->removeChild($dom->documentElement->firstChild);\necho $dom->saveXML();\necho \"Document has child nodes\\n\";\nvar_dump($dom->documentElement->hasChildNodes());\necho \"Document with 2 child nodes\\n\";\n$dom->loadXML('<root><a/><b/></root>');\nvar_dump($dom->documentElement->hasChildNodes());\n?>")).toMatchSnapshot();
  });
});
