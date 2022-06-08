// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_005.phpt
  it("test providing reason (pass)", function () {
    expect(parser.parseCode("<?php\ntry {\n    /* by passing we test there are no leaks upon success */\n    assert(true, \"I require this to succeed\");\n} catch (AssertionError $ex) {\n    var_dump($ex->getMessage());\n}\nvar_dump(true);\n?>")).toMatchSnapshot();
  });
});
