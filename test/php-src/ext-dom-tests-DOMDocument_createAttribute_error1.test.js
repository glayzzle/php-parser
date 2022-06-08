// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createAttribute_error1.phpt
  it("DomDocument::createAttribute() - error test for DomDocument::createAttribute()", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$node = $doc->createElement(\"para\");\n$newnode = $doc->appendChild($node);\ntry {\n    $failed_test_attribute = $doc->createAttribute(\"ha haha\");\n    $node->appendChild($failed_test_attribute);\n    echo $doc->saveXML();\n}\ncatch (DOMException $e) {\n    echo 'Test failed!', PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
