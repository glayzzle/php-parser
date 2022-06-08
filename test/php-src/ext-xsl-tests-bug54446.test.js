// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug54446.phpt
  it("Bug #54446 (Arbitrary file creation via libxslt 'output' extension)", function () {
    expect(parser.parseCode("<?php\ninclude(\"prepare.inc\");\n$outputfile = __DIR__.\"/bug54446test.txt\";\nif (file_exists($outputfile)) {\n    unlink($outputfile);\n}\n$sXsl = <<<EOT\n<xsl:stylesheet version=\"1.0\"\n    xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n    xmlns:sax=\"http://icl.com/saxon\"\n    extension-element-prefixes=\"sax\">\n    <xsl:template match=\"/\">\n        <sax:output href=\"$outputfile\" method=\"text\">\n            <xsl:value-of select=\"'0wn3d via PHP and libxslt ...'\"/>\n        </sax:output>\n    </xsl:template>\n</xsl:stylesheet>\nEOT;\n$xsl->loadXML( $sXsl );\n# START XSLT\n$proc->importStylesheet( $xsl );\n# TRASNFORM & PRINT\nprint $proc->transformToXML( $dom );\nif (file_exists($outputfile)) {\n    print \"$outputfile exists, but shouldn't!\\n\";\n} else {\n    print \"OK, no file created\\n\";\n}\n#SET NO SECURITY PREFS\n$proc->setSecurityPrefs(XSL_SECPREF_NONE);\n# TRASNFORM & PRINT\nprint $proc->transformToXML( $dom );\nif (file_exists($outputfile)) {\n    print \"OK, file exists\\n\";\n} else {\n    print \"$outputfile doesn't exist, but should!\\n\";\n}\nunlink($outputfile);\n#SET SECURITY PREFS AGAIN\n$proc->setSecurityPrefs( XSL_SECPREF_WRITE_FILE |  XSL_SECPREF_WRITE_NETWORK | XSL_SECPREF_CREATE_DIRECTORY);\n# TRASNFORM & PRINT\nprint $proc->transformToXML( $dom );\nif (file_exists($outputfile)) {\n    print \"$outputfile exists, but shouldn't!\\n\";\n} else {\n    print \"OK, no file created\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
