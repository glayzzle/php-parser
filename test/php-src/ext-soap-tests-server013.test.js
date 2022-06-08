// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server013.phpt
  it("SOAP Server 13: array handling", function () {
    expect(parser.parseCode("<?php\nfunction Sum($a) {\n  $sum = 0;\n  if (is_array($a)) {\n    foreach($a as $val) {\n      $sum += $val;\n    }\n  }\n  return $sum;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"Sum\");\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <SOAP-ENV:Body xmlns:ns1=\"http://linuxsrv.home/~dmitry/soap/\">\n    <ns1:sum>\n      <param0 SOAP-ENC:arrayType=\"xsd:int[2]\" xsi:type=\"SOAP-ENC:Array\">\n        <val xsi:type=\"xsd:int\">3</val>\n        <val xsi:type=\"xsd:int\">5</val>\n      </param0>\n    </ns1:sum>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
