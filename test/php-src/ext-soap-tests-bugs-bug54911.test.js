// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug54911.phpt
  it("Bug #54911 (Access to a undefined member in inherit SoapClient may cause Segmentation Fault)", function () {
    expect(parser.parseCode("<?php\n    class XSoapClient extends SoapClient {\n        function __doRequest($request, $location, $action, $version, $one_way=false): ?string {\n            echo self::$crash;\n        }\n    }\n    $client = new XSoapClient(null, array('uri'=>'', 'location'=>''));\n    $client->__soapCall('', array());\n?>")).toMatchSnapshot();
  });
});
