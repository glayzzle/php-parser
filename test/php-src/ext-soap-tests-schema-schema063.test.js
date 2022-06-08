// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema063.phpt
  it("SOAP XML Schema 63: standard unsignedLong type", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = '';\ntest_schema($schema,'type=\"xsd:unsignedLong\"',0xffffffff);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
