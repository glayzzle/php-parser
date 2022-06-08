// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xsl/tests/xsltprocessor_hasExsltSupport.phpt
  it("Test the basics to function XSLTProcessor::hasExsltSupport().", function () {
    expect(parser.parseCode("<?php\n$proc = new XSLTProcessor();\nvar_dump($proc->hasExsltSupport());\n?>")).toMatchSnapshot();
  });
});
