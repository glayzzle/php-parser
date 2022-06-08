// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug70078.phpt
  it("Bug #70078 (XSL callbacks with nodes as parameter leak memory)", function () {
    expect(parser.parseCode("<?php\n// create big dummy document:\n$dom = new \\DOMDocument();\n$rootNode = $dom->appendChild($dom->createElement('root'));\nfor ($i = 0; $i <= 100; $i++) {\n    $level1Node = $rootNode->appendChild($dom->createElement('level1'));\n    for ($j = 0; $j <= 100; $j++) {\n        $level2Node = $level1Node->appendChild($dom->createElement('level2'));\n        for ($k = 0; $k <= 10; $k++) {\n            $level3Node = $level2Node->appendChild($dom->createElement('level3', 'test'));\n        }\n    }\n}\nfunction testPhpFunction($node) {\n    return 'test2';\n}\n$xslStr = <<<EOF\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" xmlns:php=\"http://php.net/xsl\">\n    <xsl:template match=\"root\">\n        <output>\n            <xsl:for-each select=\"level1\">\n                <node>\n                    <xsl:value-of select=\"php:function('testPhpFunction', .)\" />\n                </node>\n            </xsl:for-each>\n        </output>\n    </xsl:template>\n</xsl:stylesheet>\nEOF;\n$xsl = new \\DOMDocument();\n$xsl->loadXML($xslStr);\n$xslt = new \\XSLTProcessor();\n$xslt->registerPHPFunctions('testPhpFunction');\n$xslt->importStyleSheet($xsl);\necho $xslt->transformToXML($dom);\n?>")).toMatchSnapshot();
  });
});
