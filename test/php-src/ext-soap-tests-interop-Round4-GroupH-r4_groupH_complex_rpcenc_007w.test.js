// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_rpcenc_007w.phpt
  it("SOAP Interop Round4 GroupH Complex RPC Enc 007 (php/wsdl): echoMultipleFaults2(1)", function () {
    expect(parser.parseCode("<?php\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->floatMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\nclass ExtendedStruct extends BaseStruct {\n    function __construct($f, $s, $x1, $x2, $x3) {\n        parent::__construct($f,$s);\n        $this->stringMessage = $x1;\n        $this->intMessage = $x2;\n        $this->anotherIntMessage = $x3;\n    }\n}\nclass MoreExtendedStruct extends ExtendedStruct {\n    function __construct($f, $s, $x1, $x2, $x3, $b) {\n        parent::__construct($f, $s, $x1, $x2, $x3);\n        $this->booleanMessage = $b;\n    }\n}\n$s1 = new BaseStruct(12.345,1);\n$s2 = new ExtendedStruct(12.345,2,\"arg\",-3,5);\n$s3 = new MoreExtendedStruct(12.345,3,\"arg\",-3,5,true);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_rpcenc.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoMultipleFaults2(1,$s1,$s2,$s3);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_rpcenc.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
