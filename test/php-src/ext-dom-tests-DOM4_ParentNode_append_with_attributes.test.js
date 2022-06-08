// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_append_with_attributes.phpt
  it("DOMParentNode::append() with attributes", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom = new DOMDocument;\n$dom->loadXML('<test attr-one=\"21\"/>');\n$replacement = $dom->createAttribute('attr-one');\n$replacement->value ='42';\n$addition = $dom->createAttribute('attr-two');\n$addition->value = '23';\n$element = $dom->documentElement;\ntry {\n    $element->append($replacement, $addition);\n} catch (DOMException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
