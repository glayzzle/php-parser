// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69279a.phpt
  it("Bug #69279 (Compressed ZIP Phar extractTo() creates garbage files)", function () {
    expect(parser.parseCode("<?php\n$phar = new PharData(__DIR__ . '/bug69279a.zip');\nmkdir(__DIR__ . '/bug69279a');\nvar_dump($phar->extractTo(__DIR__ . '/bug69279a', null, true));\nvar_dump(strncmp(file_get_contents(__DIR__ . '/bug69279a/1.txt'), 'Lorem ipsum', 11));\nvar_dump(strncmp(file_get_contents(__DIR__ . '/bug69279a/2.txt'), 'foo', 3));\nvar_dump(strncmp(file_get_contents(__DIR__ . '/bug69279a/3.txt'), 'Lorem ipsum', 11));\n?>")).toMatchSnapshot();
  });
});
