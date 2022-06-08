// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug38055.phpt
  it("Bug #38055 (Wrong interpretation of boolean parameters)", function () {
    expect(parser.parseCode("<?php\nfunction Test($param) {\n    global $g1, $g2;\n    $g1 = $param->boolA;\n    $g2\t= $param->boolB;\n    return 1;\n}\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl) {\n    parent::__construct($wsdl);\n    $this->server = new SoapServer($wsdl);\n    $this->server->addFunction('Test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new TestSoapClient(__DIR__.'/bug38055.wsdl');\n$boolA = 1;\n$boolB = '1';\n$res = $client->Test(array('boolA'=>$boolA, 'boolB'=>$boolB));\nvar_dump($g1);\nvar_dump($g2);\n?>")).toMatchSnapshot();
  });
});
