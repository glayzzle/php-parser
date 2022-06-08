// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exit_finally_3.phpt
  it("exit() and finally (3)", function () {
    expect(parser.parseCode("<?php\n// TODO: In the future, we should execute the finally block.\nfunction test() {\n    try {\n        exit(\"Exit\\n\");\n    } finally {\n        return 42;\n    }\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
