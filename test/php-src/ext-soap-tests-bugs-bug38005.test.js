// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug38005.phpt
  it("Bug #38005 (SoapFault faultstring doesn't follow encoding rules)", function () {
    expect(parser.parseCode("<?php\nfunction Test($param=NULL) {\n    return new SoapFault('Test', 'This is our fault: �');\n}\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl, $opt) {\n    parent::__construct($wsdl, $opt);\n    $this->server = new SoapServer($wsdl, $opt);\n    $this->server->addFunction('Test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new TestSoapClient(NULL, array(\n    'encoding' => 'ISO-8859-1',\n    'uri' => \"test://\",\n    'location' => \"test://\",\n    'soap_version'=>SOAP_1_2,\n    'trace'=>1,\n    'exceptions'=>0));\n$res = $client->Test();\necho($res->faultstring.\"\\n\");\necho($client->__getLastResponse());\n?>")).toMatchSnapshot();
  });
});
