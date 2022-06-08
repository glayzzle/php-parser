// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_004.phpt
  it("SPL: DirectoryIterator and clone", function () {
    expect(parser.parseCode("<?php\n@mkdir($dir = __DIR__ . '/dit_004');\ntouch($dir . '/file1');\ntouch($dir . '/file2');\ntouch($dir . '/file3');\n$a = new DirectoryIterator($dir);\n$b = clone $a;\nvar_dump((string)$b == (string)$a);\nvar_dump($a->key(), $b->key());\n$a->next();\n$a->next();\n$a->next();\n$c = clone $a;\nvar_dump((string)$c == (string)$a);\nvar_dump($a->key(), $c->key());\n?>")).toMatchSnapshot();
  });
});
