// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72100.phpt
  it("Test implode() function, problems with big numbers", function () {
    expect(parser.parseCode("<?php\nvar_dump( implode(\" \", [\"hello long\", 999999999999999999, PHP_INT_MAX]));\nvar_dump( implode(\" \", [\"hello negative long\", -999999999999999999, PHP_INT_MIN] ) );\nvar_dump( implode(\" \", [\"hello small long\", -101, -100, -99, -90, -11, -10, -9, -1, 0, 1, 2, 9, 10, 11, 90, 99, 100, 101] ) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
