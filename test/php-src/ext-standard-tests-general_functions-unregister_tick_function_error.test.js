// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/unregister_tick_function_error.phpt
  it("unregister_tick_function only accepts a valid callback as parameter", function () {
    expect(parser.parseCode("<?php\ndeclare(ticks=1);\ntry {\n    unregister_tick_function(\"a\");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
