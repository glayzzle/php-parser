// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42488.phpt
  it("Bug #42488 (SoapServer reports an encoding error and the error itself breaks)", function () {
    expect(parser.parseCode("<?php\n$request = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"test:\\\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><SOAP-ENV:Body><ns1:getBadUTF/></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\n$soap = new SoapServer(NULL, array('uri'=>'test://'));\nfunction getBadUTF(){\n    return \"stuff\\x93thing\";\n}\n$soap->addFunction('getBadUTF');\n$soap->handle($request);\n?>")).toMatchSnapshot();
  });
});
