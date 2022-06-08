// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createProcessingInstruction_error.phpt
  it("DomDocument::createProcessingInstruction() - error test for DomDocument::createProcessingInstruction()", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$node = $doc->createElement(\"para\");\n$newnode = $doc->appendChild($node);\ntry {\n    $test_proc_inst =\n        $doc->createProcessingInstruction( \"bla bla bla\" );\n    $node->appendChild($test_proc_inst);\n    echo $doc->saveXML();\n}\ncatch (DOMException $e)\n{\n    echo 'Test failed!', PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
