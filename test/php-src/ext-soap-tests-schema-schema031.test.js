// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema031.phpt
  it("SOAP XML Schema 31: Structure (all)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <all>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"str\" type=\"string\"/>\n        </all>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\",\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
