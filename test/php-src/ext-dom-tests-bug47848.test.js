// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug47848.phpt
  it("Bug #47848 (importNode doesn't preserve attribute namespaces)", function () {
    expect(parser.parseCode("<?php\n$aDOM = new DOMDocument();\n$aDOM->appendChild($aDOM->createElementNS('http://friend2friend.net/','f2f:a'));\n$fromdom = new DOMDocument();\n$fromdom->loadXML('<data xmlns:ai=\"http://altruists.org\" ai:attr=\"namespaced\" />');\n$attr= $fromdom->firstChild->attributes->item(0);\n$att = $aDOM->importNode($attr);\n$aDOM->documentElement->appendChild($aDOM->importNode($attr, true));\necho $aDOM->saveXML();\n?>")).toMatchSnapshot();
  });
});
