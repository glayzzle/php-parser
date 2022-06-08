// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/links6.phpt
  it("Phar: test nested linked files", function () {
    expect(parser.parseCode("<?php\necho file_get_contents('phar://' . __DIR__ . '/files/links.phar.tar/link2');\necho file_get_contents('phar://' . __DIR__ . '/files/links.phar.tar/link1');\necho file_get_contents('phar://' . __DIR__ . '/files/links.phar.tar/testit.txt');\n$a = fopen('phar://' . __DIR__ . '/files/links.phar.tar/link2', 'r');\nfseek($a, 3);\necho fread($a, 10);\n?>")).toMatchSnapshot();
  });
});
