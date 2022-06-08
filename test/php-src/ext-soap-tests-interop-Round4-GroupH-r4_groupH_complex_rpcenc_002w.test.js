// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_rpcenc_002w.phpt
  it("SOAP Interop Round4 GroupH Complex RPC Enc 002 (php/wsdl): echoBaseStructFault", function () {
    expect(parser.parseCode("<?php\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->floatMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\n$struct = new BaseStruct(12.345,12);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_rpcenc.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoBaseStructFault($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_rpcenc.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
