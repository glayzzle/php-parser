// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/026.phpt
  it("Trying assign value to property when an object is not returned in a function", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function a() {\n    }\n}\n$test = new foo;\n$test->a()->a;\nprint \"ok\\n\";\ntry {\n    $test->a()->a = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
