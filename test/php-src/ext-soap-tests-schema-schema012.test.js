// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema012.phpt
  it("SOAP XML Schema 12: simpleType/list (inline type) (as array)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <list>\n            <simpleType>\n                <restriction base=\"int\"/>\n            </simpleType>\n        </list>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,456.7));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
