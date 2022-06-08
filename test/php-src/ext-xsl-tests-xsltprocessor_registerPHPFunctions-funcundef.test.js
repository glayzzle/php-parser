// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_registerPHPFunctions-funcundef.phpt
  it("Check xsltprocessor::registerPHPFunctions and a undefined php function", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$phpfuncxsl = new domDocument();\n$phpfuncxsl->load(__DIR__.\"/phpfunc-undef.xsl\");\nif(!$phpfuncxsl) {\n  echo \"Error while parsing the xsl document\\n\";\n  exit;\n}\n$proc->importStylesheet($phpfuncxsl);\nvar_dump($proc->registerPHPFunctions());\nvar_dump($proc->transformToXml($dom));\n?>")).toMatchSnapshot();
  });
});
