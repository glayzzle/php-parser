// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/regsiter_node_class.phpt
  it("Test: registerNodeClass()", function () {
    expect(parser.parseCode("<?php\nclass myAttribute extends DOMAttr {\n   function testit() { return \"HELLO Attribute\"; }\n}\nclass myElement extends DOMElement {\n   function testit() { return \"HELLO Element\"; }\n}\n$doc = new DOMDocument();\n$doc->registerNodeClass('DOMAttr', 'myAttribute');\n$doc->registerNodeClass('DOMElement', 'myElement');\n$doc->appendChild(new DOMElement('root'));\n$root = $doc->documentElement;\n$root->setAttribute('a', 'a1');\necho get_class($root), \"\\n\";\nprint $root->testit().\"\\n\";\n$attr = $root->getAttributeNode('a');\necho get_class($attr), \"\\n\";\nprint $attr->testit().\"\\n\";\nunset($attr);\n$doc->registerNodeClass('DOMAttr', NULL);\n$attr = $root->getAttributeNode('a');\necho get_class($attr), \"\\n\";\ntry {\n    print $attr->testit().\"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
