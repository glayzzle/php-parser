// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/cannot_pass_by_ref.phpt
  it("Cannot pass by reference error with named parameters", function () {
    expect(parser.parseCode("<?php\nfunction test($a, &$e) {}\ntry {\n    test(e: 42);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
