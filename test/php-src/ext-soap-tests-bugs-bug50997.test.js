// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug50997.phpt
  it("Bug #50997 (SOAP Error when trying to submit 2nd Element of a choice)", function () {
    expect(parser.parseCode("<?php\n$soapClient = new SoapClient(__DIR__ . '/bug50997.wsdl', array('trace' => 1, 'exceptions'=>0));\n$params = array('code'=>'foo');\n$soapClient->newOperation($params);\necho $soapClient->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
