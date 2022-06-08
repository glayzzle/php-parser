// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema054.phpt
  it("SOAP XML Schema 54: Apache Map", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = '';\ntest_schema($schema,'type=\"apache:Map\" xmlns:apache=\"http://xml.apache.org/xml-soap\"',array('a'=>123,'b'=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
