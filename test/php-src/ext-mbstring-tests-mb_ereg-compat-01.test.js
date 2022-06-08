// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg-compat-01.phpt
  it("mb_ereg() compat test 1", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/004.phpt) */\n  $a=\"This is a nice and simple string\";\n  if (mb_ereg(\".*nice and simple.*\",$a)) {\n    echo \"ok\\n\";\n  }\n  if (!mb_ereg(\".*doesn't exist.*\",$a)) {\n    echo \"ok\\n\";\n  }\n?>")).toMatchSnapshot();
  });
});
