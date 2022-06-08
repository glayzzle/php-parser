// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_createProcessingInstruction_basic.phpt
  it("DomDocument::createProcessingInstruction() - basic test for DomDocument::createProcessingInstruction()", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument;\n$node = $doc->createElement(\"para\");\n$newnode = $doc->appendChild($node);\n$test_proc_inst0 =\n    $doc->createProcessingInstruction( \"blablabla\" );\n$node->appendChild($test_proc_inst0);\n$test_proc_inst1 =\n    $doc->createProcessingInstruction( \"blablabla\", \"datadata\" );\n$node->appendChild($test_proc_inst1);\necho $doc->saveXML();\n?>")).toMatchSnapshot();
  });
});
