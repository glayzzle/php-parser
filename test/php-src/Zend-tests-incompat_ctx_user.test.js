// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/incompat_ctx_user.phpt
  it("Incompatible context call (non-internal function)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo() { var_dump(get_class($this)); }\n}\nclass B {\n    function bar() { A::foo(); }\n}\n$b = new B;\ntry {\n    $b->bar();\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
