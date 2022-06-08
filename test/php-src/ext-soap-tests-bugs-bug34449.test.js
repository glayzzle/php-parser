// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug34449.phpt
  it("Bug #34449 (ext/soap: XSD_ANYXML functionality not exposed)", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient {\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    echo \"$request\\n\";\n    exit;\n  }\n}\n$my_xml = \"<array><item/><item/><item/></array>\";\n$client = new TestSoapClient(null, array('location' => 'test://', 'uri' => 'test://'));\n$client->AnyFunction(new SoapVar($my_xml, XSD_ANYXML));\n?>")).toMatchSnapshot();
  });
});
