// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/required_param_after_optional_named_args.phpt
  it("Optional param before required should be treated as required for named args as well", function () {
    expect(parser.parseCode("<?php\nfunction test($a = 1, $b) {\n}\ntry {\n    test(b: 2);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
