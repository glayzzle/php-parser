// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt005.phpt
  it("Test 5: Checking Indent", function () {
    expect(parser.parseCode("<?php\necho \"Test 5: Checking Indent\";\ninclude(\"prepare.inc\");\n$xp = new domxpath($xsl);\n$res = $xp->query(\"/xsl:stylesheet/xsl:output/@indent\");\nif ($res->length != 1) {\n    print \"No or more than one xsl:output/@indent found\";\n    exit;\n}\n$res->item(0)->value = \"yes\";\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";")).toMatchSnapshot();
  });
});
