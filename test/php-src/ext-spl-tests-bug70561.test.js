// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70561.phpt
  it("Bug #70561 (DirectoryIterator::seek should throw OutOfBoundsException)", function () {
    expect(parser.parseCode("<?php\n$di = new DirectoryIterator(__DIR__ . '/..');\n$cnt = 0;\n$di->rewind();\nwhile ($di->valid()) {\n    $cnt++;\n    $di->next();\n}\ntry {\n    $di->seek($cnt+1);\n} catch (OutOfBoundsException $ex) {\n    echo $ex->getMessage() . PHP_EOL;\n}\necho \"Is valid? \" . (int) $di->valid() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
