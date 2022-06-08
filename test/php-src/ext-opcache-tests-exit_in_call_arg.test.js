// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/exit_in_call_arg.phpt
  it("exit() may occur in a call argument", function () {
    expect(parser.parseCode("<?php\nfunction test($c) {\n    if ($c) {\n        var_dump(var_dump(exit(\"exit\\n\")));\n    } else {\n        var_dump(\"test\");\n    }\n}\ntest(false);\ntest(true);\n?>")).toMatchSnapshot();
  });
});
