// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29236.phpt
  it("Bug #29236 (memory error when wsdl-cache is enabled)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/bug29236.wsdl\");\nvar_dump($client->__getFunctions());\n?>")).toMatchSnapshot();
  });
});
