// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42086.phpt
  it("Bug #42086 (SoapServer return Procedure '' not present for WSIBasic compliant wsdl)", function () {
    expect(parser.parseCode("<?php\n$request = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"><SOAP-ENV:Body><firstFunctionWithoutParam/></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\nclass firstFunctionWithoutParamResponse {\n    public $param;\n}\nfunction firstFunctionWithoutParam() {\n    $ret = new firstFunctionWithoutParamResponse();\n    $ret->param\t=\t\"firstFunctionWithoutParam\";\n    return $ret;\n}\n$server = new SoapServer(__DIR__.'/bug42086.wsdl',\n    array('features'=>SOAP_SINGLE_ELEMENT_ARRAYS));\n$server->addFunction('firstFunctionWithoutParam');\n$server->handle($request);\n?>")).toMatchSnapshot();
  });
});
