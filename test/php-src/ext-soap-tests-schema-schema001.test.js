// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema001.phpt
  it("SOAP XML Schema 1: simpleType/restriction", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <restriction base=\"xsd:int\"/>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
