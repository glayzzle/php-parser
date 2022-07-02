// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/zend_throw_exception_001.phpt
  it("zend_throw_exception with NULL message", function () {
    expect(parser.parseCode("<?php\nassert_options(ASSERT_EXCEPTION, true);\ntry {\n    $assert = 'assert';\n    $assert(false);\n} catch (AssertionError $assertionError) {\n    echo 'Done' . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
