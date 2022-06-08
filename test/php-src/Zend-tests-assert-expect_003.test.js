// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_003.phpt
  it("test catching failed assertion", function () {
    expect(parser.parseCode("<?php\ntry {\n    assert(false);\n} catch (AssertionError $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
