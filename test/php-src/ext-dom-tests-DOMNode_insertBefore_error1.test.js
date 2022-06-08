// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_insertBefore_error1.phpt
  it("DOMNode::insertBefore() should fail if node belongs to another document", function () {
    expect(parser.parseCode("<?php\n$doc1 = new DOMDocument();\n$doc2 = new DOMDocument();\n$node_in_doc1 = $doc1->createElement(\"foo\");\n$node_in_doc2 = $doc2->createElement(\"bar\");\ntry {\n    $node_in_doc2->insertBefore($node_in_doc1);\n} catch(DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
