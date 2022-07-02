// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80126.phpt
  it("Bug #80126: Covariant return types failing compilation", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    public function method(): I;\n}\nabstract class A implements I {\n    public function method(): I { }\n}\nclass C extends A { }\nclass C2 extends C {\n    public function method(): C2 { }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
