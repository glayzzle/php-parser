// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug75502.phpt
  it("Bug #75502 (Segmentation fault in zend_string_release)", function () {
    expect(parser.parseCode("<?php\n/* The important part is that restriction>enumeration is used together with mem cache.\n * Reuse a WSDL file contains this. */\n$client = new SoapClient(__DIR__.\"/bug29236.wsdl\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
