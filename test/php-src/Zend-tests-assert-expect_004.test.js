// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_004.phpt
  it("test providing reason (fail)", function () {
    expect(parser.parseCode("<?php\ntry {\n    assert(false, \"I require this to succeed\");\n} catch (AssertionError $ex) {\n    var_dump($ex->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
