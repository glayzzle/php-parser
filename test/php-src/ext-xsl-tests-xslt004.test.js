// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt004.phpt
  it("Test 4: Checking UTF8 Output", function () {
    expect(parser.parseCode("<?php\necho \"Test 4: Checking UTF8 Output\";\ninclude(\"prepare.inc\");\n$xp = new domxpath($xsl);\n$res = $xp->query(\"/xsl:stylesheet/xsl:output/@encoding\");\nif ($res->length != 1) {\n    print \"No or more than one xsl:output/@encoding found\";\n    exit;\n}\n$res->item(0)->value = \"utf-8\";\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";\n?>")).toMatchSnapshot();
  });
});
