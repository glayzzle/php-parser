// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug71540.phpt
  it("Bug #71540 (NULL pointer dereference in xsl_ext_function_php())", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOB\n<allusers>\n <user>\n  <uid>bob</uid>\n </user>\n</allusers>\nEOB;\n$xsl = <<<EOB\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n     xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n     xmlns:php=\"http://php.net/xsl\">\n<xsl:output method=\"html\" encoding=\"utf-8\" indent=\"yes\"/>\n <xsl:template match=\"allusers\">\n  <html><body>\n    <h2>Users</h2>\n    <table>\n    <xsl:for-each select=\"user\">\n      <tr><td>\n        <xsl:value-of\n             select=\"php:function('test',uid,test(test))\"/>\n      </td></tr>\n    </xsl:for-each>\n    </table>\n  </body></html>\n </xsl:template>\n</xsl:stylesheet>\nEOB;\n$xmldoc = new DOMDocument();\n$xmldoc->loadXML($xml);\n$xsldoc = new DOMDocument();\n$xsldoc->loadXML($xsl);\n$proc = new XSLTProcessor();\n$proc->registerPHPFunctions();\n$proc->importStyleSheet($xsldoc);\necho $proc->transformToXML($xmldoc);\n?>\nDONE")).toMatchSnapshot();
  });
});
