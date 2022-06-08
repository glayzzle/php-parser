// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug50762.phpt
  it("Bug #50762 (in WSDL mode Soap Header handler function only being called if defined in WSDL)", function () {
    expect(parser.parseCode("<?php\nclass testSoap {\n    private $auth;\n    public function authToken($token){\n        $this->auth=true;\n    }\n    public function testHeader($param){\n        return 'header handler ' . ($this->auth ? 'called' : 'not called');\n    }\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n    $this->server->setObject(new testSoap());\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$cl = new LocalSoapClient(__DIR__.'/bug50762.wsdl', array('cache_wsdl'=>WSDL_CACHE_NONE, 'trace'=>true));\nclass authToken{\n    public function __construct($token){\n        $this->authToken=$token;\n    }\n}\n$cl->__setSoapHeaders(array(new SoapHeader('http://sova.pronto.ru/', 'authToken', new authToken('tokendata'))));\necho $cl->testHeader('param') . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
