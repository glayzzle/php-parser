// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/025.phpt
  it("SimpleXML: getting namespaces", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version='1.0'?>\n<xhtml:html xmlns:html='http://www.w3.org/1999/xhtml' xmlns:xhtml='http://www.w3.org/TR/REC-html40'>\n<xhtml:head><xhtml:title xmlns:xhtml='http://www.w3.org/TR/REC-html401'>bla</xhtml:title></xhtml:head>\n<xhtml:body html:title=\"b\">\n<html:h1>bla</html:h1>\n<foo:bar xmlns:foo='foobar' xmlns:baz='foobarbaz'/>\n</xhtml:body>\n</xhtml:html>\nEOF;\n$sxe = simplexml_load_string($xml);\nvar_dump($sxe->getNamespaces());\nvar_dump($sxe->getNamespaces(true));\nvar_dump($sxe->getDocNamespaces());\nvar_dump($sxe->getDocNamespaces(true));\n$xml =<<<EOF\n<?xml version='1.0'?>\n<html xmlns='http://www.w3.org/1999/xhtml'>\n<head><title xmlns='http://www.w3.org/TR/REC-html40'>bla</title></head>\n</html>\nEOF;\n$sxe = simplexml_load_string($xml);\nvar_dump($sxe->getNamespaces());\nvar_dump($sxe->getDocNamespaces());\n$xml =<<<EOF\n<?xml version='1.0'?>\n<root/>\nEOF;\n$sxe = simplexml_load_string($xml);\nvar_dump($sxe->getNamespaces());\nvar_dump($sxe->getDocNamespaces());\n?>")).toMatchSnapshot();
  });
});
