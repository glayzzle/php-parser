// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29061.phpt
  it("Bug #29061 (soap extension segfaults)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/bug29061.wsdl\", array(\"exceptions\"=>0));\n$client->getQuote(\"ibm\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
