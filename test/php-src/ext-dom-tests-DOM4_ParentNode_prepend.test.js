// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_prepend.phpt
  it("DOMParentNode::prepend()", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test><mark/><mark><nested /></mark><mark/></test>');\n$element = $dom->documentElement;\n$firstMark = $element->childNodes[0];\n$element->prepend(\n  $dom->createElement('element', 'content'),\n  'content'\n);\nvar_dump($element->childElementCount);\nprint_node_list_compact($element->childNodes);\n$element = $dom->documentElement;\n$element->prepend(\n  $dom->createElement('element', 'content'),\n  'content'\n);\nvar_dump($element->childElementCount);\n$firstMark->prepend('content');\nprint_node_list_compact($firstMark->childNodes);\n?>")).toMatchSnapshot();
  });
});
