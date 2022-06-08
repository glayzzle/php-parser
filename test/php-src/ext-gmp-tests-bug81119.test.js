// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug81119.phpt
  it("GMP operators throw errors with wrong parameter names", function () {
    expect(parser.parseCode("<?php\nfunction test($f) {\n    try {\n        $f();\n        echo \"No error?\\n\";\n    } catch (TypeError|ValueError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ntest(fn($WRONG_SCOPE_1 = 0, $WRONG_SCOPE_2 = 0) => gmp_init(1) < \"x\");\ntest(fn($WRONG_SCOPE_1 = 0, $WRONG_SCOPE_2 = 0) => gmp_init(1) < []);\ntest(fn($WRONG_SCOPE_1 = 0, $WRONG_SCOPE_2 = 0) => gmp_init(1) + \"x\");\ntest(fn($WRONG_SCOPE_1 = 0, $WRONG_SCOPE_2 = 0) => gmp_init(1) + []);\n?>")).toMatchSnapshot();
  });
});
