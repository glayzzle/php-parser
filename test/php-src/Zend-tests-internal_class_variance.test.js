// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/internal_class_variance.phpt
  it("Internal class variance", function () {
    expect(parser.parseCode("<?php\n$test = new _ZendTestChildClass;\ntry {\n    $test->returnsThrowable();\n} catch (\\Error) {\n    echo \"OK\";\n}\n?>")).toMatchSnapshot();
  });
});
