// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_registerPHPFunctions-null.phpt
  it("Check xsltprocessor::registerPHPFunctions called with null to reset", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$phpfuncxsl = new domDocument();\n$phpfuncxsl->load(__DIR__.\"/phpfunc.xsl\");\nif(!$phpfuncxsl) {\n  echo \"Error while parsing the xsl document\\n\";\n  exit;\n}\n$proc->importStylesheet($phpfuncxsl);\nvar_dump($proc->registerPHPFunctions('ucwords'));\nvar_dump($proc->registerPHPFunctions(null));\nvar_dump($proc->transformToXml($dom));\n?>")).toMatchSnapshot();
  });
});
