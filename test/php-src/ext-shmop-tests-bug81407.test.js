// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/shmop/tests/bug81407.phpt
  it("Bug #81407 (shmop_open won't attach and causes php to crash)", function () {
    expect(parser.parseCode("<?php\n$a = shmop_open(367504384, 'n', 0664, 262144);\n$b = shmop_open(367504385, 'n', 0664, 65536);\nif ($b == false) {\n\t$b = shmop_open(367504385, 'w', 0664, 65536);\n}\nvar_dump($a !== false, $b !== false);\n?>")).toMatchSnapshot();
  });
});
