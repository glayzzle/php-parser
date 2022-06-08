// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/gh8538.phpt
  it("Bug GH-8538 (SoapClient may strip parts of nmtokens)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__ . \"/gh8538.wsdl\"); \nvar_dump($client->__getFunctions());\n?>")).toMatchSnapshot();
  });
});
