// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/domattributes.phpt
  it("Attributes: DOMAttribute functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML($xmlstr);\nif(!$dom) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$node = $dom->documentElement;\n$lang = $node->getAttributeNode('language');\necho \"Language: \".$lang->value.\"\\n\";\n$lang->value = 'en-US';\necho \"Language: \".$lang->value.\"\\n\";\n$parent = $lang->ownerElement;\n$chapter = new DOMAttr(\"num\", \"1\");\n$parent->setAttributeNode($chapter);\necho \"Is ID?: \".($chapter->isId()?'YES':'NO').\"\\n\";\n$top_element = $node->cloneNode();\nprint $dom->saveXML($top_element);\n?>")).toMatchSnapshot();
  });
});
