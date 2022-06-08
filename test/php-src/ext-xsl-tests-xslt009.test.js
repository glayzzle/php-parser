// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt009.phpt
  it("Test 9: Stream Wrapper XPath-Document()", function () {
    expect(parser.parseCode("<?php\necho \"Test 9: Stream Wrapper XPath-Document()\";\ninclude(\"prepare.inc\");\n$xsl = new domDocument;\n$xsl->load(__DIR__.\"/documentxpath.xsl\");\nif(!$xsl) {\n  echo \"Error while parsing the document\\n\";\n  exit;\n}\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXML($dom);\n?>")).toMatchSnapshot();
  });
});
