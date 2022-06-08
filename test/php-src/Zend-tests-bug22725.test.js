// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug22725.phpt
  it("Bug #22725 (A derived class can call a parent's protected method that calls a private method)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private function aPrivateMethod() {\n        echo \"Foo::aPrivateMethod() called.\\n\";\n    }\n    protected function aProtectedMethod() {\n        echo \"Foo::aProtectedMethod() called.\\n\";\n        $this->aPrivateMethod();\n    }\n}\nclass Bar extends Foo {\n    public function aPublicMethod() {\n        echo \"Bar::aPublicMethod() called.\\n\";\n        $this->aProtectedMethod();\n    }\n}\n$o = new Bar;\n$o->aPublicMethod();\n?>")).toMatchSnapshot();
  });
});
