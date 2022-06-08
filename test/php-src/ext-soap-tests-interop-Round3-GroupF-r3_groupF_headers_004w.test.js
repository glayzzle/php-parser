// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupF/r3_groupF_headers_004w.phpt
  it("SOAP Interop Round3 GroupF Headers 004 (php/wsdl): echoString", function () {
    expect(parser.parseCode("<?php\n$hdr = array(\n  new SoapHeader(\"http://soapinterop.org/xsd\",\"Header1\", array(\"int\"=>34,\"string\"=>\"arg1\")),\n  new SoapHeader(\"http://soapinterop.org/xsd\",\"Header2\", array(\"int\"=>43,\"string\"=>\"arg2\"))\n);\n$client = new SoapClient(__DIR__.\"/round3_groupF_headers.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoString\",array(\"Hello World\"),null,$hdr);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupF_headers.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
