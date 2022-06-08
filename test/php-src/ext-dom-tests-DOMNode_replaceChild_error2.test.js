// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_replaceChild_error2.phpt
  it("replaceChild() where the new node is a grandparent of the old node ", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument();\n$a = $document->createElement('a');\n$b = $document->createElement('b');\n$c = $document->createElement('c');\n$a->appendChild($b);\n$b->appendChild($c);\ntry {\n\t$b->replaceChild($a, $c);\n} catch (DOMException $e) {\n\techo \"DOMException: \" . $e->getMessage();\n}")).toMatchSnapshot();
  });
});
