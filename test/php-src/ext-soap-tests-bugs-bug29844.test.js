// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug29844.phpt
  it("Bug #29844 (SOAP doesn't return the result of a valid SOAP request)", function () {
    expect(parser.parseCode("<?php\nclass hello_world {\n  public function hello($to) {\n    return 'Hello ' . $to;\n  }\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->setClass('hello_world');\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug29844.wsdl\", array(\"trace\"=>1));\nvar_dump($client->hello('davey'));\n?>")).toMatchSnapshot();
  });
});
