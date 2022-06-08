// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug71711.phpt
  it("Bug #71711: Soap Server Member variables reference bug", function () {
    expect(parser.parseCode("<?php\n$client = new class(null, [ 'location' => '', 'uri' => 'http://example.org']) extends SoapClient {\n    public function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request;\n        return '';\n    }\n};\n$ref = array(\"foo\");\n$data = new stdClass;\n$data->prop =& $ref;\n$client->foo($data);\n?>")).toMatchSnapshot();
  });
});
