// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78810.phpt
  it("Bug #78810: RW fetches do not throw \"uninitialized property\" exception", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $i;\n}\n$test = new Test;\ntry {\n    $test->i++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->i += 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
