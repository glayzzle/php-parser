// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug67081.phpt
  it("Bug #67081 DOMDocumentType->internalSubset returns entire DOCTYPE tag, not only the subset", function () {
    expect(parser.parseCode("<?php\n    $domDocument = new DOMDocument();\n    $domDocument->substituteEntities = true;\n    $domDocument->load(__DIR__ . DIRECTORY_SEPARATOR . \"bug67081_0.xml\");\n    var_dump($domDocument->doctype->internalSubset);\n    $domDocument = new DOMDocument();\n    $domDocument->substituteEntities = true;\n    $domDocument->load(__DIR__ . DIRECTORY_SEPARATOR . \"bug67081_1.xml\");\n    var_dump($domDocument->doctype->internalSubset);\n    $domDocument = new DOMDocument();\n    $domDocument->substituteEntities = true;\n    $domDocument->load(__DIR__ . DIRECTORY_SEPARATOR . \"bug67081_2.xml\");\n    var_dump($domDocument->doctype->internalSubset);\n    $domDocument = new DOMDocument();\n    $domDocument->substituteEntities = true;\n    $domDocument->load(__DIR__ . DIRECTORY_SEPARATOR . \"dom.xml\");\n    var_dump($domDocument->doctype->internalSubset);\n?>")).toMatchSnapshot();
  });
});
