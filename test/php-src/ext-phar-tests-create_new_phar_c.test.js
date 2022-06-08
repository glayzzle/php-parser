// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/create_new_phar_c.phpt
  it("Phar: create a completely new phar", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('phar://' . __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php/a.php',\n    'brand new!');\n$phar = new Phar(__DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php');\nvar_dump($phar->getSignature());\n?>")).toMatchSnapshot();
  });
});
