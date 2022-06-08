// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78770.phpt
  it("Bug #78770: Incorrect callability check inside internal methods", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        IntlChar::enumCharTypes([$this, 'privateMethod']);\n        IntlChar::enumCharTypes('self::privateMethod');\n    }\n    private function privateMethod($start, $end, $name) {\n    }\n}\n(new Test)->method();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
