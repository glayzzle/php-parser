// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_simple_rpcenc_003w.phpt
  it("SOAP Interop Round4 GroupH Simple RPC Enc 003 (php/wsdl): echoIntArrayFault", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupH_simple_rpcenc.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoIntArrayFault(array(34,12.345));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_simple_rpcenc.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
