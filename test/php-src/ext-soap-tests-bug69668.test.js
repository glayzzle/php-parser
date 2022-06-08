// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug69668.phpt
  it("Bug #69668 (SOAP: special XML characters in namespace URIs not encoded)", function () {
    expect(parser.parseCode("<?php\nclass MySoapClient extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request, PHP_EOL;\n        return '';\n    }\n}\n$client = new MySoapClient(__DIR__ . '/bug69668.wsdl', [\n    'trace'      => true,\n    'exceptions' => true,\n    'cache_wsdl' => WSDL_CACHE_NONE,\n]);\n$client->test();\n?>")).toMatchSnapshot();
  });
});
