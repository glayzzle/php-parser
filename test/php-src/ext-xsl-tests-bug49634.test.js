// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug49634.phpt
  it("bug #49634 (Segfault throwing an exception in a XSL registered function)", function () {
    expect(parser.parseCode("<?php\n$sXml = <<<XML\n<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<root>\n    test\n</root>\nXML;\n$cDIR = __DIR__;\n$sXsl = <<<XSL\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:ext=\"http://php.net/xsl\"\n                xsl:extension-element-prefixes=\"ext\"\n                exclude-result-prefixes=\"ext\">\n    <xsl:output encoding=\"UTF-8\" indent=\"yes\" method=\"xml\" />\n    <xsl:template match=\"/\">\n        <xsl:value-of select=\"ext:function('testFunction', document('$cDIR/bug49634.xml')/root)\"/>\n    </xsl:template>\n</xsl:stylesheet>\nXSL;\nfunction testFunction($a)\n{\n        throw new Exception('Test exception.');\n}\n$domXml = new DOMDocument;\n$domXml->loadXML($sXml);\n$domXsl = new DOMDocument;\n$domXsl->loadXML($sXsl);\nfor ($i = 0; $i < 10; $i++)\n{\n    $xsltProcessor = new XSLTProcessor();\n    $xsltProcessor->registerPHPFunctions(array('testFunction'));\n    $xsltProcessor->importStyleSheet($domXsl);\n    try {\n        @$xsltProcessor->transformToDoc($domXml);\n    } catch (Exception $e) {\n        echo $e,\"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
