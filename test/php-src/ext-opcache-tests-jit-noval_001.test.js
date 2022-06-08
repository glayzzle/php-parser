// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/noval_001.phpt
  it("JIT NOVAL: 001 (bug in zend_jit_compute_false_dependencies())", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const X = false;\n    static function bar() {\n        $count = 0;\n        if (self::X) {\n            $count = intval(9223372036854775807);\n        }\n        if (self::X) {\n           $count = 2;\n        }\n        if ($count != 0) {\n            return \"bug\";\n        }\n        return \"ok\";\n    }\n}\nvar_dump(Foo::bar());\n?>")).toMatchSnapshot();
  });
});
