// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug77410.phpt
  it("Bug #77410: Segmentation Fault when executing method with an empty parameter", function () {
    expect(parser.parseCode("<?php\n$client = new class(__DIR__ . '/bug77410.wsdl', [\n    'cache_wsdl' => WSDL_CACHE_NONE,\n    'trace' => 1,\n]) extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request, \"\\n\";\n        return '';\n    }\n};\n$client->MyMethod([\n    'parameter' => [],\n]);\n?>")).toMatchSnapshot();
  });
});
