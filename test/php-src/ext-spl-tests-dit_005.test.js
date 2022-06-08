// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_005.phpt
  it("SPL: FilesystemIterator and clone", function () {
    expect(parser.parseCode("<?php\n// Let's hope nobody writes into this directory while testing...\n$a = new FileSystemIterator(__DIR__ . '/..');\n$b = clone $a;\nvar_dump((string)$b == (string)$a);\nvar_dump($a->key() == $b->key());\n$a->next();\n$a->next();\n$a->next();\n$c = clone $a;\nvar_dump((string)$c == (string)$a);\nvar_dump($a->key() == $c->key());\n?>")).toMatchSnapshot();
  });
});
