// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug36575.phpt
  it("Bug #36575 (Incorrect complex type instantiation with hierarchies)", function () {
    expect(parser.parseCode("<?php\nabstract class CT_A1 {\n    public $var1;\n}\nclass CT_A2 extends CT_A1 {\n    public $var2;\n}\nclass CT_A3 extends CT_A2 {\n    public $var3;\n}\n// returns A2 in WSDL\nfunction test( $a1 ) {\n    $a3 = new CT_A3();\n    $a3->var1 = $a1->var1;\n    $a3->var2 = \"var two\";\n    $a3->var3 = \"var three\";\n    return $a3;\n}\n$classMap = array(\"A1\" => \"CT_A1\", \"A2\" => \"CT_A2\", \"A3\" => \"CT_A3\");\n$client = new SoapClient(__DIR__.\"/bug36575.wsdl\", array(\"trace\" => 1, \"exceptions\" => 0, \"classmap\" => $classMap));\n$a2 = new CT_A2();\n$a2->var1 = \"one\";\n$a2->var2 = \"two\";\n$client->test($a2);\n$soapRequest = $client->__getLastRequest();\necho $soapRequest;\n$server = new SoapServer(__DIR__.\"/bug36575.wsdl\", array(\"classmap\" => $classMap));\n$server->addFunction(\"test\");\n$server->handle($soapRequest);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
