// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dit_006.phpt
  it("SPL: DirectoryIterator and seek", function () {
    expect(parser.parseCode("<?php\n$di = new DirectoryIterator(__DIR__.\"/..\");\n$di->seek(2);\n$n = 0;\nwhile ($di->valid()) {\n    $n++;\n    $di->next();\n}\necho \"With seek(2) we get $n\\n\";\n$di->seek(0);\n$m = 0;\nwhile ($di->valid()) {\n    $m++;\n    $di->next();\n}\necho \"With seek(0) we get $m\\n\";\n$o = 0;\n$di->rewind();\nwhile ($di->valid()) {\n    $o++;\n    $di->next();\n}\necho \"Without seek we get $o\\n\";\ntry {\n    $p = 0;\n    $di->seek($o+1);\n    $p = 1;\n} catch (\\OutOfBoundsException $ex) {\n    echo $ex->getMessage() . PHP_EOL;\n}\nvar_dump($n !== $m, $m === $o, $p === 0);\n?>")).toMatchSnapshot();
  });
});
