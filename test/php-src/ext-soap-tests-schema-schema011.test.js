// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema011.phpt
  it("SOAP XML Schema 11: simpleType/list (inline type) (as string)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <list>\n            <simpleType>\n                <restriction base=\"int\"/>\n            </simpleType>\n        </list>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',\"123 456.7\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
