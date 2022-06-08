// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_insertBefore_error4.phpt
  it("Test DOMNode::insertBefore()  check the error code DOM_NOT_FOUND is raised", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$doc = $dom->load(__DIR__ . \"/book.xml\", LIBXML_NOBLANKS);\nassert($doc === true);\n$parent_node = $dom->getElementsByTagName(\"book\")->item(0);\nassert(!is_null($parent_node));\n$new_node = $dom->createElement('newnode');\nassert($new_node !== false);\n// could be a brand new node\n$ref_node = $dom->createElement('newnode2');\ntry {\n    $parent_node->insertBefore($new_node, $ref_node);\n} catch(DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
