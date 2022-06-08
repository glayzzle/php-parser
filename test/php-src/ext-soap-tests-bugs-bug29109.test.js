// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29109.phpt
  it("Bug #29109 (Uncaught SoapFault exception: [WSDL] Out of memory)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/bug29109.wsdl\");\nvar_dump($client->__getFunctions());\n?>")).toMatchSnapshot();
  });
});
