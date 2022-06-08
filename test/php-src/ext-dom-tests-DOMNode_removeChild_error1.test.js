// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_removeChild_error1.phpt
  it("removeChild() where the node is not a child", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument();\n$real_parent = $document->createElement('real');\n$parent = $document->createElement('p');\n$child1 = $document->createElement('child1');\n$child2 = $document->createElement('child2');\n$real_parent->appendChild($child1);\n$parent->appendChild($child2);\ntry {\n\t$parent->removeChild($child1);\n} catch (DOMException $e) {\n\techo \"DOMException: \" . $e->getMessage();\n}")).toMatchSnapshot();
  });
});
