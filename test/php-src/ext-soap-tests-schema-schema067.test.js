// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema067.phpt
  it("SOAP XML Schema 67: Attribute with fixed value (2)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <attribute name=\"str\" type=\"string\"/>\n        <attribute name=\"int\" type=\"int\" fixed=\"5\"/>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\",\"int\"=>5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
