// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_simple_rpcenc_014w.phpt
  it("SOAP Interop Round4 GroupH Simple RPC Enc 014 (php/wsdl): echoMultipleFaults3(3)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupH_simple_rpcenc.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoMultipleFaults3(3,\"arg1\",\"arg2\");\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_simple_rpcenc.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
