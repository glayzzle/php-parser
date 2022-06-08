// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug38067.phpt
  it("Bug #38067 (Parameters are not decoded from utf-8 when using encoding option)", function () {
    expect(parser.parseCode("<?php\nfunction Test($param) {\n    global $g;\n    $g = $param->str;\n    return $g;\n}\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl, $opt) {\n    parent::__construct($wsdl, $opt);\n    $this->server = new SoapServer($wsdl, $opt);\n    $this->server->addFunction('Test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new TestSoapClient(__DIR__.'/bug38067.wsdl',\n    array('encoding' => 'ISO-8859-1'));\n$str = 'test: �';\n$res = $client->Test(array('str'=>$str));\necho $str.\"\\n\";\necho $res.\"\\n\";\necho $g.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
