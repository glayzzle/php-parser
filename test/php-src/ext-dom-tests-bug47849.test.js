// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug47849.phpt
  it("Bug #47849 (Non-deep import loses the namespace).", function () {
    expect(parser.parseCode("<?php\n$aDOM= new DOMDocument();\n$aDOM->appendChild($aDOM->createElementNS('urn::root','r:root'));\n$fromdom= new DOMDocument();\n$fromdom->loadXML('<data xmlns=\"urn::data\">aaa</data>');\n$data= $fromdom->documentElement;\n$aDOM->documentElement->appendChild($aDOM->importNode($data));\necho $aDOM->saveXML();\n?>")).toMatchSnapshot();
  });
});
