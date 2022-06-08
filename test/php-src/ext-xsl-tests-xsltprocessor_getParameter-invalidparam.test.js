// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_getParameter-invalidparam.phpt
  it("Check xsltprocessor::getParameter with undefined parameter", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ .'/prepare.inc';\nvar_dump($proc->getParameter('', 'doesnotexist'));\n?>")).toMatchSnapshot();
  });
});
