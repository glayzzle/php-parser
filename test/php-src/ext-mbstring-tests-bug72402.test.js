// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72402.phpt
  it("Bug #72402: _php_mb_regex_ereg_replace_exec - double free", function () {
    expect(parser.parseCode("<?php\nfunction throwit() {\n    throw new Exception('it');\n}\n$var10 = \"throwit\";\ntry {\n    $var14 = mb_ereg_replace_callback(\"\", $var10, \"\");\n} catch(Exception $e) {}\n?>\nDONE")).toMatchSnapshot();
  });
});
