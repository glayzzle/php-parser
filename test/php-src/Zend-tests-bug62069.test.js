// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug62069.phpt
  it("Bug #62069: binding wrong traits if they have same name methods", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    public function func() {\n        echo \"From T1\\n\";\n    }\n}\ntrait T2 {\n    public function func() {\n        echo \"From T2\\n\";\n    }\n}\nclass Bar {\n    public function func() {\n        echo \"From Bar\\n\";\n    }\n    use T1, T2 {\n        func as f1;\n    }\n}\n$b = new Bar();\n$b->f2();\n?>")).toMatchSnapshot();
  });
});
