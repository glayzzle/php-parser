// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/cache_list/copyonwrite4a.phpt
  it("Phar: copy-on-write test 4a [cache_list]", function () {
    expect(parser.parseCode("<?php\nvar_dump(file_exists('phar://' . __DIR__ . '/files/write4.phar/testit.txt'));\nPhar::mount('phar://' . __DIR__ . '/files/write4.phar/testit.txt', 'phar://' . __DIR__ . '/files/write4.phar/tobemounted');\nvar_dump(file_exists('phar://' . __DIR__ . '/files/write4.phar/testit.txt'), file_get_contents('phar://' . __DIR__ . '/files/write4.phar/testit.txt'));\n?>")).toMatchSnapshot();
  });
});
