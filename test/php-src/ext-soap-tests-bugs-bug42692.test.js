// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42692.phpt
  it("Bug #42692 (Procedure 'int1' not present with doc/lit SoapServer)", function () {
    expect(parser.parseCode("<?php\nini_set('soap.wsdl_cache_enabled','0');\nfunction checkAuth($peid,$auth) {\n    return $peid;\n}\nclass TestSoap extends SoapClient {\n    function __construct($wsdl, $options) {\n        parent::__construct($wsdl, $options);\n        $this->server = new SoapServer($wsdl, $options);\n        $this->server->addFunction(\"checkAuth\");\n    }\n    function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        ob_start();\n        $this->server->handle($request);\n        $response = ob_get_contents();\n        ob_end_clean();\n        return $response;\n    }\n}\n$client = new TestSoap(__DIR__ . \"/bug42692.wsdl\", array(\"trace\"=>1));\ntry {\n    $result = $client->checkAuth(1,\"two\");\n    echo \"Auth for 1 is $result\\n\";\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
