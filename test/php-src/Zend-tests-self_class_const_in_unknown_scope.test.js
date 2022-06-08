// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_class_const_in_unknown_scope.phpt
  it("Use of self::class inside a constant in an unknown scope", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function foobar() {\n        eval(\"\n            const FOO = self::class;\n            var_dump(FOO);\n        \");\n    }\n}\n(new Test)->foobar();\nconst BAR = self::class;\nvar_dump(BAR);\n?>")).toMatchSnapshot();
  });
});
