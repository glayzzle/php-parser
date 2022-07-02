// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug66094.phpt
  it("Bug #66094 (unregister_tick_function tries to cast a Closure to a string)", function () {
    expect(parser.parseCode("<?php\ndeclare(ticks=1);\nregister_tick_function($closure = function () { echo \"Tick!\\n\"; });\nunregister_tick_function($closure);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
