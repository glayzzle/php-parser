// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema013.phpt
  it("SOAP XML Schema 13: simpleType/union", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <union memberTypes=\"string int float\"/>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',\"str\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
