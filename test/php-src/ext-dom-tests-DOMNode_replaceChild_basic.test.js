// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_replaceChild_basic.phpt
  it("Replacing a child node", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument();\n$document->loadXML('<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<root><foo><bar/><baz/></foo><spam><eggs/><eggs/></spam></root>');\n// Replaces the child node oldChild with newChild in the list of children, and\n// returns the oldChild node.\n$parent = $document->getElementsByTagName('foo')->item(0);\n$new_child = $document->createElement('qux');\n$old_child = $parent->replaceChild($new_child, $parent->firstChild);\necho \"New child replaces old child:\\n\" . $document->saveXML();\necho \"Old child is returned:\\n\" . $old_child->tagName . \"\\n\";\n// If the newChild is already in the tree, it is first removed.\n$parent = $document->getElementsByTagName('spam')->item(0);\n$parent->replaceChild($new_child, $parent->firstChild);\necho \"Existing child is removed from tree:\\n\" . $document->saveXML();\n// Children are inserted in the correct order.\n$new_child = $document->getElementsByTagName('spam')->item(0);\n$parent = $document->getElementsByTagName('foo')->item(0);\n$parent->replaceChild($new_child, $parent->firstChild);\necho \"Children are inserted in order:\\n\" . $document->saveXML();\n?>")).toMatchSnapshot();
  });
});
