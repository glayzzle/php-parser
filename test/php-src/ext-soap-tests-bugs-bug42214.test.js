// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42214.phpt
  it("Bug #42214 (SoapServer sends clients internal PHP errors)", function () {
    expect(parser.parseCode("<?php\n$request = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://localhost/server.php\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><SOAP-ENV:Body><ns1:test/></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\nfunction test() {\n    $a = $b;\n    obvious_error(); // will cause an error\n}\n$server = new SoapServer(NULL, array('uri' =>'http://localhost/server.php',\n    'send_errors'=>0));\n$server->addFunction('test');\n$server->handle($request);\n?>")).toMatchSnapshot();
  });
});
