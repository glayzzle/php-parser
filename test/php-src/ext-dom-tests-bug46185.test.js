// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug46185.phpt
  it("Bug #46185 (importNode changes the namespace of an XML element).", function () {
    expect(parser.parseCode("<?php\n$aDOM = new DOMDocument();\n$aDOM->loadXML('<?xml version=\"1.0\"?>\n<ns1:a xmlns:ns1=\"urn::ns\"/>');\n$a= $aDOM->firstChild;\n$ok = new DOMDocument();\n$ok->loadXML('<?xml version=\"1.0\"?>\n<ns1:ok xmlns:ns1=\"urn::ns\" xmlns=\"urn::REAL\"><watch-me xmlns:default=\"urn::BOGUS\"/></ns1:ok>');\n$imported= $aDOM->importNode($ok->firstChild, true);\n$a->appendChild($imported);\necho $aDOM->saveXML();\n?>")).toMatchSnapshot();
  });
});
