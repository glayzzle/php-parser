// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exit_finally_1.phpt
  it("exit() and finally (1)", function () {
    expect(parser.parseCode("<?php\n// TODO: In the future, we should execute the finally block.\ntry {\n    exit(\"Exit\\n\");\n} catch (Throwable $e) {\n    echo \"Not caught\\n\";\n} finally {\n    echo \"Finally\\n\";\n}\necho \"Not executed\\n\";\n?>")).toMatchSnapshot();
  });
});
