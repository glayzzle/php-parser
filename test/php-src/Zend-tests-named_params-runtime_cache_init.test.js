// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/runtime_cache_init.phpt
  it("Uninitialized run-time cache when resolving default values", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public static function method($a = FOO, $b = 1) {\n        echo \"a = $a, b = $b\\n\";\n    }\n}\ndefine('FOO', 42);\ncall_user_func(['Test', 'method'], b: 0);\n?>")).toMatchSnapshot();
  });
});
