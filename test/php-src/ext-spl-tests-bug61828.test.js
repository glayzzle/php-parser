// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61828.phpt
  it("Bug #61828 (Memleak when calling Directory(Recursive)Iterator/Spl(Temp)FileObject ctor twice)", function () {
    expect(parser.parseCode("<?php\n$x = new DirectoryIterator('.');\ntry {\n    $x->__construct('/tmp');\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
