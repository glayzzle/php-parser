// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug44394_2.phpt
  it("Bug #44394 (Last two bytes missing from output) with session.use_trans_id", function () {
    expect(parser.parseCode("<?php\nini_set('session.use_trans_sid', 1);\nsession_save_path(__DIR__);\nsession_start();\nob_start();\n$string = \"<a href='a?q=1'>asd</a>\";\noutput_add_rewrite_var('a', 'b');\necho $string;\nob_flush();\nob_end_clean();\n?>")).toMatchSnapshot();
  });
});
