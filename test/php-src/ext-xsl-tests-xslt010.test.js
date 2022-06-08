// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt010.phpt
  it("Test 10: EXSLT Support", function () {
    expect(parser.parseCode("<?php\necho \"Test 10: EXSLT Support\";\n$dom = new domDocument();\n  $dom->load(__DIR__.\"/exslt.xsl\");\n  $proc = new xsltprocessor;\n  $xsl = $proc->importStylesheet($dom);\n  $xml = new DomDocument();\n  $xml->load(__DIR__.\"/exslt.xml\");\n  print $proc->transformToXml($xml);\n?>")).toMatchSnapshot();
  });
});
