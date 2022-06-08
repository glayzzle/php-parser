// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/multiport.phpt
  it("Proper binding selection", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.'/multiport.wsdl',\n    array('trace' => true, 'exceptions' => false));\n$response = $client->GetSessionId(array('userId'=>'user', 'password'=>'password'));\necho $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
