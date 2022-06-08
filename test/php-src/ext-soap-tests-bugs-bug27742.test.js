// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug27742.phpt
  it("Bug #27742 (WDSL SOAP Parsing Schema bug)", function () {
    expect(parser.parseCode("<?php\n$x = new SoapClient(__DIR__.\"/bug27742.wsdl\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
