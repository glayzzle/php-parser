// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug54601.phpt
  it("Segfault when removing the Doctype node", function () {
    expect(parser.parseCode("<?php\n$xml = <<< XML\n<?xml version='1.0' encoding='utf-8' ?>\n<!DOCTYPE set PUBLIC \"-//OASIS//DTD DocBook XML V5.0//EN\" \"http://www.docbook.org/xml/5.0/dtd/docbook.dtd\" [\n<!ENTITY foo '<foo>footext</foo>'>\n<!ENTITY bar '<bar>bartext</bar>'>\n]>\n<set>&foo;&bar;</set>\nXML;\n$doc = new DOMDocument();\n$doc->loadXML($xml, LIBXML_NOENT);\n$n = $doc->doctype;\n$doc->removeChild($n);\necho get_class($n), \"\\n\";\nprint $doc->saveXML();\n?>")).toMatchSnapshot();
  });
});
