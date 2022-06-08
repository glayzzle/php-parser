// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug69846.phpt
  it("Bug #69846 Segmenation fault (access violation) when iterating over DOMNodeList", function () {
    expect(parser.parseCode("<?php\n$tmpDomDocument = new DOMDocument();\n$xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><dummy xmlns:xfa=\"http://www.xfa.org/schema/xfa-data/1.0/\"><xfa:data>\n  <form1>\n    <TextField1>Value A</TextField1>\n    <TextField1>Value B</TextField1>\n    <TextField1>Value C</TextField1>\n  </form1>\n</xfa:data></dummy>';\n$tmpDomDocument->loadXML($xml);\n$dataNodes = $tmpDomDocument->firstChild->childNodes->item(0)->childNodes;\nvar_dump($dataNodes->length);\n$datasetDom = new DOMDocument();\nforeach ($dataNodes AS $node) {\n    $node = $datasetDom->importNode($node, true);\n    var_dump($node);\n}\n?>")).toMatchSnapshot();
  });
});
