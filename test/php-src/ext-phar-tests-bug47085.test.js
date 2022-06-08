// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug47085.phpt
  it("Phar: PHP bug #47085: \"rename() returns true even if the file in PHAR does not exist\"", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$phar = new Phar($fname, 0, 'a.phar');\n$phar['x'] = 'hi';\nunset($phar);\nrename(\"phar://a.phar/x\", \"phar://a.phar/y\");\nvar_dump(rename(\"phar://a.phar/x\", \"phar://a.phar/y\"));\n?>")).toMatchSnapshot();
  });
});
