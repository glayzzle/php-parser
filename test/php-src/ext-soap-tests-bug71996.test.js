// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug71996.phpt
  it("Bug #71996: Using references in arrays doesn't work like expected", function () {
    expect(parser.parseCode("<?php\n$client = new class(null, ['location' => '', 'uri' => 'http://example.org']) extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request, \"\\n\";\n        return '';\n    }\n};\n$ref = array(\"foo\");\n$data = array(&$ref);\n$client->foo($data);\n$ref = array(\"def\" => \"foo\");\n$data = array(\"abc\" => &$ref);\n$client->foo($data);\n?>")).toMatchSnapshot();
  });
});
