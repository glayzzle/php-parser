// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug61998.phpt
  it("Bug #61998 (Using traits with method aliases appears to result in crash during execution)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    use T1 {\n       func as newFunc;\n    }\n    public function func() {\n        echo \"From Foo\\n\";\n    }\n}\ntrait T1 {\n    public function func() {\n        echo \"From T1\\n\";\n    }\n}\nclass Bar {\n    public function func() {\n        echo \"From Bar\\n\";\n    }\n    public function func2() {\n        echo \"From Bar\\n\";\n    }\n    public function func3() {\n        echo \"From Bar\\n\";\n    }\n    use T1 {\n        func as newFunc;\n        func as func2;\n    }\n    use T2 {\n        func2 as newFunc2;\n        func2 as newFunc3;\n        func2 as func3;\n    }\n}\ntrait T2 {\n    public function func2() {\n        echo \"From T2\\n\";\n    }\n}\n$f = new Foo();\n$f->newFunc(); //from T1\n$f->func(); //from Foo\n$b = new Bar();\n$b->newFunc(); //from T1\n$b->func(); //from Bar\n$b->func2(); //from Bar\n$b->newFunc2(); //from T2\n$b->newFunc3(); //from T2\n$b->func3(); //from Bar\n?>")).toMatchSnapshot();
  });
});
