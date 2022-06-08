// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_doclit_003w.phpt
  it("SOAP Interop Round4 GroupH Complex Doc Lit 003 (php/wsdl): echoExtendedStructFault", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->structMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\nclass ExtendedStruct extends BaseStruct {\n    function __construct($f, $s, $x1, $x2, $x3) {\n        parent::__construct($f,$s);\n        $this->stringMessage = $x1;\n        $this->intMessage = $x2;\n        $this->anotherIntMessage = $x3;\n    }\n}\n$struct = new ExtendedStruct(new SOAPStruct(\"a1\",11,12.345),12,\"arg\",-3,5);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoExtendedStructFault($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
