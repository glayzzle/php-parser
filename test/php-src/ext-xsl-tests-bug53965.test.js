// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/bug53965.phpt
  it("Bug #53965 (<xsl:include> cannot find files with relative paths when loaded with \"file://\")", function () {
    expect(parser.parseCode("<?php\n$base = 'file://' . __DIR__ . DIRECTORY_SEPARATOR . '53965';\n$xml = new DOMDocument();\n$xml->load($base . DIRECTORY_SEPARATOR . 'collection.xml');\n$xsl = new DOMDocument();\n$xsl->load($base . DIRECTORY_SEPARATOR . 'collection.xsl');\n$proc = new XSLTProcessor;\n$proc->importStyleSheet($xsl);\necho $proc->transformToXML($xml);\n?>")).toMatchSnapshot();
  });
});
