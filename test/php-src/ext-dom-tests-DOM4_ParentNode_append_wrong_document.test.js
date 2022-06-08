// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_ParentNode_append_wrong_document.phpt
  it("DOMParentNode::append() with DOMNode from wrong document throws exception", function () {
    expect(parser.parseCode("<?php\nrequire_once(\"dom_test.inc\");\n$dom1 = new DOMDocument;\n$dom1->loadXML('<test/>');\n$dom2 = new DOMDocument;\n$dom2->loadXML('<test><foo /></test>');\n$element = $dom1->documentElement;\ntry {\n    $element->append($dom2->documentElement->firstChild);\n    echo \"FAIL\";\n} catch (DOMException $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $element->prepend($dom2->documentElement->firstChild);\n    echo \"FAIL\";\n} catch (DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
