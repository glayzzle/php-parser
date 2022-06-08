// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug35273.phpt
  it("Bug #35273 (Error in mapping soap - java types)", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient {\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    echo $request;\n    exit;\n    }\n}\nini_set(\"soap.wsdl_cache_enabled\", 0);\n$client = new TestSoapClient(__DIR__.'/bug32941.wsdl', array(\"trace\" => 1, 'exceptions' => 0));\n$ahoj = $client->echoPerson(array(\"name\"=>\"Name\",\"surname\"=>\"Surname\"));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
