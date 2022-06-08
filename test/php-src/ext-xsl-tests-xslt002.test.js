// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xslt002.phpt
  it("Test 2: Transform To HTML String", function () {
    expect(parser.parseCode("<?php\necho \"Test 2: Transform To HTML String\";\ninclude(\"prepare.inc\");\n// changing output method to html\n$xp = new domxpath($xsl);\n$res = $xp->query(\"/xsl:stylesheet/xsl:output/@method\");\nif ($res->length != 1) {\n    print \"No or more than one xsl:output/@method found\";\n    exit;\n}\n$res->item(0)->value = \"html\";\n$proc->importStylesheet($xsl);\nprint \"\\n\";\nprint $proc->transformToXml($dom);\nprint \"\\n\";")).toMatchSnapshot();
  });
});
