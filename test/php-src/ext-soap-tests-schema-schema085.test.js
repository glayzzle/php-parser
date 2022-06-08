// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema085.phpt
  it("SOAP XML Schema 85: Extension of complex type (elements order)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType2\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n        </sequence>\n    </complexType>\n    <complexType name=\"testType\">\n        <complexContent>\n            <extension base=\"tns:testType2\">\n                <sequence>\n                    <element name=\"int2\" type=\"int\"/>\n                </sequence>\n            </extension>\n        </complexContent>\n    </complexType>\nEOF;\nclass A {\n  public $int = 1;\n}\nclass B extends A {\n  public $int2 = 2;\n}\ntest_schema($schema,'type=\"tns:testType\"',new B());\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
