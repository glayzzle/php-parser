// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/optimize_static_001.phpt
  it("Keep BIND_STATIC when initial value refer to unresolved constants", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    static $a = UNDEFINED_CONST;\n}\ntry {\n    foo();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>\nOK")).toMatchSnapshot();
  });
});
