// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_rpcenc_003w.phpt
  it("SOAP Interop Round4 GroupH Complex RPC Enc 003 (php/wsdl): echoExtendedStructFault", function () {
    expect(parser.parseCode("<?php\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->floatMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\nclass ExtendedStruct extends BaseStruct {\n    function __construct($f, $s, $x1, $x2, $x3) {\n        parent::__construct($f,$s);\n        $this->stringMessage = $x1;\n        $this->intMessage = $x2;\n        $this->anotherIntMessage = $x3;\n    }\n}\n$struct = new ExtendedStruct(12.345,12,\"arg\",-3,5);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_rpcenc.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoExtendedStructFault($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_rpcenc.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
