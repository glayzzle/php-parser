// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_with_default.phpt
  it("Readonly property with default value", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public readonly int $prop = 1;\n}\n$test = new Test;\ntry {\n    $test->prop = 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
