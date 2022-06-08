// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server028.phpt
  it("SOAP Server 28: SoapServer::setObject and __call()", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  function __call($name, $args) {\n    if ($name == \"test\") {\n      return \"Hello World\";\n    } else {\n      return SoapFault(\"Server\",\"Function $name doesn't exist\");\n    }\n  }\n}\n$foo = new Foo();\n$server = new SoapServer(null,array('uri'=>\"http://testuri.org\"));\n$server->setObject($foo);\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:test xmlns:ns1=\"http://testuri.org\" />\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
