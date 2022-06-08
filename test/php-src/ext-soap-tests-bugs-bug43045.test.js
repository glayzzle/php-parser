// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug43045.phpt
  it("Bug #43045i (SOAP encoding violation on \"INF\" for type double/float)", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n  return $x;\n}\nclass TestSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->addFunction('test');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n    echo $request;\n    return '<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\nxmlns:soapenc=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\nsoap:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<soap:Body><testResponse xmlns=\"urn:TestSOAP\">\n<s-gensym3>\n<doubleInfinity xsi:type=\"xsd:double\">INF</doubleInfinity>\n</s-gensym3>\n</testResponse>\n</soap:Body></soap:Envelope>';\n  }\n}\n$client = new TestSoapClient(NULL, array(\n            \"location\" => \"test://\",\n            \"uri\"      => 'urn:TestSOAP',\n            \"style\"    => SOAP_RPC,\n            \"use\"      => SOAP_ENCODED\n            ));\nvar_dump($client->test(0.1));\nvar_dump($client->test(NAN));\nvar_dump($response = $client->test(INF));\nvar_dump($response = $client->test(-INF));\n?>")).toMatchSnapshot();
  });
});
