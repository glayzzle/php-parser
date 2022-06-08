// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/closures_002.phpt
  it("register_tick_function() & closure", function () {
    expect(parser.parseCode("<?php\ndeclare (ticks = 1);\n$i = 0;\nregister_tick_function(function () use (&$i) { $i++; });\necho \"Test\\n\";\necho \"$i\\n\";\necho \"$i\\n\";\nvar_dump ($i != 0);\necho \"$i\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
