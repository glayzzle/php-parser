// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_doclit_002w.phpt
  it("SOAP Interop Round4 GroupH Complex Doc Lit 002 (php/wsdl): echoBaseStructFault", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->structMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\n$struct = new BaseStruct(new SOAPStruct(\"a1\",11,12.345),11);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoBaseStructFault($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
