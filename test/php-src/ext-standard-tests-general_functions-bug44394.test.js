// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug44394.phpt
  it("Bug #44394 (Last two bytes missing from output)", function () {
    expect(parser.parseCode("<?php\n$string = \"<a href='a?q=1'>asd</a>\";\noutput_add_rewrite_var('a', 'b');\necho $string;\nob_flush();\nob_end_clean();\n?>")).toMatchSnapshot();
  });
});
