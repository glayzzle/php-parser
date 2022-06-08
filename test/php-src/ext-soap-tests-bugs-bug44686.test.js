// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug44686.phpt
  it("Bug #44686 (SOAP-ERROR: Parsing WSDL with references)", function () {
    expect(parser.parseCode("<?php\nnew SoapClient(__DIR__ . \"/bug44686.wsdl\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
