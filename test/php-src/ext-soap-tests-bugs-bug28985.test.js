// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug28985.phpt
  it("Bug #28985 (__getTypes() returning nothing on complex WSDL)", function () {
    expect(parser.parseCode("<?php\n$client = new SOAPClient(__DIR__.'/bug28985.wsdl', array('trace'=>1));\nvar_dump($client->__getTypes());\n?>")).toMatchSnapshot();
  });
});
