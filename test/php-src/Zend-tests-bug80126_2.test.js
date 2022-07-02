// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80126_2.phpt
  it("Bug #80126: Covariant return types failing compilation (variation 2)", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    public function method(): I;\n}\nabstract class A implements I {\n    public function method(): I {\n        return new static();\n    }\n}\nclass C extends A { }\ninterface I2 { }\nclass C2 extends C implements I2 {\n    public function method(): C2 { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
