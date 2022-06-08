// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/create_new_phar_b.phpt
  it("Phar: create a completely new tar-based phar", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar/a.php',\n    'brand new!');\ninclude 'phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar/a.php';\n?>")).toMatchSnapshot();
  });
});
