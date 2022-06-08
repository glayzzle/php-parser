// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42183.phpt
  it("Bug #42183 (classmap cause crash in non-wsdl mode )", function () {
    expect(parser.parseCode("<?php\nclass PHPObject {\n}\n$req = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://ws.sit.com\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><SOAP-ENV:Body><ns1:test/></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\nfunction test() {\n    return new PHPObject();\n}\n$server = new SoapServer(NULL, array('uri' => 'http://ws.sit.com',\n    'classmap' => array('Object' => 'PHPObject')));\n$server->addFunction(\"test\");\nob_start();\n$server->handle($req);\nob_end_clean();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
