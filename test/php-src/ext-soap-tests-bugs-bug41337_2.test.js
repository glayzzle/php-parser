// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug41337_2.phpt
  it("Bug #41337 (WSDL parsing doesn't ignore non soap bindings)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\",0);\n$client = new SoapClient(__DIR__.\"/bug41337_2.wsdl\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
