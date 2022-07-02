// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/static_method_non_existing_class.phpt
  it("Calling a static method on a non-existing class", function () {
    expect(parser.parseCode("<?php\n$str = \"foo\";\ntry {\n    Test::{$str . \"bar\"}();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
