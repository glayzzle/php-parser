// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug36614.phpt
  it("Bug #36614 (Segfault when using Soap)", function () {
    expect(parser.parseCode("<?php\n$lo_soap = new SoapClient(__DIR__.\"/bug36614.wsdl\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
