// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69084.phpt
  it("Bug #69084: Unclear error message when not implementing a renamed abstract trait function", function () {
    expect(parser.parseCode("<?php\ntrait Foo {\n    abstract public function doStuff();\n    public function main() {\n        $this->doStuff();\n    }\n}\nclass Bar {\n    use Foo {\n        Foo::doStuff as doOtherStuff;\n    }\n    public function doStuff() {\n        var_dump(__FUNCTION__);\n    }\n}\n$b = new Bar();\n$b->main();\n?>")).toMatchSnapshot();
  });
});
