// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug41037.phpt
  it("Bug #41037 (unregister_tick_function() inside the tick function crash PHP)", function () {
    expect(parser.parseCode("<?php\nfunction a() {\n    echo \"hello\\n\";\n    try {\n        unregister_tick_function('a');\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\ndeclare (ticks=1) {\n    register_tick_function('a');\n    echo \"Done\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
