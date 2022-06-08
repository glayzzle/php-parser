// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug33853.phpt
  it("Bug #33853 (php:function call __autoload with lowercase param)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($className) {\n    var_dump($className);\n    exit();\n});\n$xsl = new DomDocument();\n$xsl->loadXML('<?xml version=\"1.0\" encoding=\"iso-8859-1\" ?>\n<xsl:stylesheet version=\"1.0\"\nxmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\nxmlns:php=\"http://php.net/xsl\">\n<xsl:template match=\"/\">\n<xsl:value-of select=\"php:function(\\'TeSt::dateLang\\')\" />\n</xsl:template>\n</xsl:stylesheet>');\n$inputdom = new DomDocument();\n$inputdom->loadXML('<?xml version=\"1.0\" encoding=\"iso-8859-1\" ?>\n<today></today>');\n$proc = new XsltProcessor();\n$proc->registerPhpFunctions();\n$xsl = $proc->importStylesheet($xsl);\n$newdom = $proc->transformToDoc($inputdom);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
