// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_transformToURI.phpt
  it("Test the basics to function XSLTProcessor::transformToURI().", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOB\n<allusers>\n <user>\n  <uid>bob</uid>\n </user>\n <user>\n  <uid>joe</uid>\n </user>\n</allusers>\nEOB;\n$xsl = <<<EOB\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n     xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n     xmlns:php=\"http://php.net/xsl\">\n<xsl:output method=\"html\" encoding=\"utf-8\" indent=\"yes\"/>\n <xsl:template match=\"allusers\">\n  <html><body>\n    <table>\n    <xsl:for-each select=\"user\">\n      <tr><td>\n        <xsl:value-of\n             select=\"php:function('ucfirst',string(uid))\"/>\n      </td></tr>\n    </xsl:for-each>\n    </table>\n  </body></html>\n </xsl:template>\n</xsl:stylesheet>\nEOB;\n$xmldoc = new DOMDocument('1.0', 'utf-8');\n$xmldoc->loadXML($xml);\n$xsldoc = new DOMDocument('1.0', 'utf-8');\n$xsldoc->loadXML($xsl);\n$proc = new XSLTProcessor();\n$proc->registerPHPFunctions();\n$proc->importStyleSheet($xsldoc);\nvar_dump($proc->transformToURI($xsldoc, 'php://output'));\n?>")).toMatchSnapshot();
  });
});
