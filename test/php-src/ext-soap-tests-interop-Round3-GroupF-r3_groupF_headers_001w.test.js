// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupF/r3_groupF_headers_001w.phpt
  it("SOAP Interop Round3 GroupF Headers 001 (php/wsdl): echoString", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round3_groupF_headers.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoString(\"Hello World\");\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupF_headers.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
