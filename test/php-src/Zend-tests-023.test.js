// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/023.phpt
  it("Testing variable variables as function name", function () {
    expect(parser.parseCode("<?php\n$a = 'ucfirst';\n$b = 'a';\nprint $$b('test');\nprint \"\\n\";\nclass bar {\n    public function a() {\n        return \"bar!\";\n    }\n}\nclass foo {\n    public function test() {\n        print \"foo!\\n\";\n        return new bar;\n    }\n}\nfunction test() {\n    return new foo;\n}\n$a = 'test';\n$b = 'a';\nvar_dump($$b()->$$b()->$b());\n$a = 'strtoupper';\n$b = 'a';\n$c = 'b';\n$d = 'c';\nvar_dump($$$$d('foo'));\n?>")).toMatchSnapshot();
  });
});
