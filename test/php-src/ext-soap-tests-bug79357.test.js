// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug79357.phpt
  it("Bug #79357: SOAP request segfaults when any request parameter is missing", function () {
    expect(parser.parseCode("<?php\n$sc = new SoapClient(__DIR__ . '/bug79357.wsdl');\n$res = $sc->Add(['intA'=>1]);\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
