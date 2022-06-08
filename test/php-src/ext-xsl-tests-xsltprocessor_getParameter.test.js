// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_getParameter.phpt
  it("Check xsltprocessor::getparameter functionality", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\n$proc->importStylesheet($xsl);\n$proc->setParameter('', 'key', 'value');\nvar_dump($proc->getParameter('', 'key'));\n?>")).toMatchSnapshot();
  });
});
