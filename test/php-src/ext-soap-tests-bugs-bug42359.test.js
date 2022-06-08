// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42359.phpt
  it("Bug #42326 (SoapServer crash)", function () {
    expect(parser.parseCode("<?php\n$soap = new SoapClient(__DIR__.\"/bug42359.wsdl\");\nprint_r($soap->__getTypes());\n?>")).toMatchSnapshot();
  });
});
