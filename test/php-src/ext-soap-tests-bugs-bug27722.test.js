// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug27722.phpt
  it("Bug #27722 (Segfault on schema without targetNamespace)", function () {
    expect(parser.parseCode("<?php\n$x = new SoapClient(__DIR__.\"/bug27722.wsdl\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
