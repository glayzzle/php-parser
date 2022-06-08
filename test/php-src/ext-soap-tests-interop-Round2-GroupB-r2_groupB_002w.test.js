// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_002w.phpt
  it("SOAP Interop Round2 groupB 002 (php/wsdl): echoSimpleTypesAsStruct", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round2_groupB.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoSimpleTypesAsStruct(\"arg\",34,34.345);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
