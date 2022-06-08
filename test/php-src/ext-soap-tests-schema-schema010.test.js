// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema010.phpt
  it("SOAP XML Schema 10: simpleType/list (as array)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <list itemType=\"token\"/>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(\"one\",\"two\"));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
