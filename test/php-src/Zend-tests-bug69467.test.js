// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69467.phpt
  it("Bug #69467 (Wrong checked for the interface by using Trait)", function () {
    expect(parser.parseCode("<?php\ninterface Baz {\n    public function bad();\n}\ntrait Bar{\n    protected function bad(){}\n}\nclass Foo implements Baz{\n    use Bar;\n}\n$test = new Foo();\nvar_dump($test instanceof Baz);\n?>")).toMatchSnapshot();
  });
});
