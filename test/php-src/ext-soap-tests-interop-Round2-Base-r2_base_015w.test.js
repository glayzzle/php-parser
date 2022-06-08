// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_015w.phpt
  it("SOAP Interop Round2 base 015 (php/wsdl): echoStructArray", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct1 = new SOAPStruct('arg',34,325.325);\n$struct2 = new SOAPStruct('arg',34,325.325);\n$client = new SoapClient(__DIR__.\"/round2_base.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoStructArray(array($struct1,$struct2));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
