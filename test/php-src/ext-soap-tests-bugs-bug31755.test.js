// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug31755.phpt
  it("Bug #31755 (Cannot create SOAP header in no namespace)", function () {
    expect(parser.parseCode("<?php\nclass MySoapClient extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): string {\n        echo $request, \"\\n\";\n        return '';\n    }\n}\n$client = new MySoapClient(null, array(\n    'location' => 'http://localhost', 'uri' => 'myNS', 'exceptions' => false\n));\ntry {\n    new SOAPHeader('', 'foo', 'bar');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$header = new SOAPHeader('namespace', 'foo', 'bar');\n$response= $client->__soapCall('function', array(), null, $header);\nprint $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
