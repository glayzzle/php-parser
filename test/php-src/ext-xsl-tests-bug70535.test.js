// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug70535.phpt
  it("Bug #70535 (XSLT: free(): invalid pointer)", function () {
    expect(parser.parseCode("<?php\n$xmlInput = simplexml_load_string('<root></root>');\n$xslInput = '<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"><xsl:template match=\"root\"><xsl:text>success</xsl:text></xsl:template></xsl:stylesheet>';\n$xsl = new \\DomDocument();\n$xsl->loadXML($xslInput);\n$xslt = new \\XsltProcessor();\n$xslt->importStylesheet($xsl);\n$xmloutput = $xslt->transformToXml($xmlInput);\n?>\nokey")).toMatchSnapshot();
  });
});
