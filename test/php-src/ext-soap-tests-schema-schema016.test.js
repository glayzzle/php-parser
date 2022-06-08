// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema016.phpt
  it("SOAP XML Schema 16: simpleType/union (inline type)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <union>\n            <simpleType>\n                <restriction base=\"string\"/>\n            </simpleType>\n            <simpleType>\n                <restriction base=\"int\"/>\n            </simpleType>\n            <simpleType>\n                <restriction base=\"float\"/>\n            </simpleType>\n        </union>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
