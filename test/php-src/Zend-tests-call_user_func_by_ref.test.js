// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_by_ref.phpt
  it("call_user_func() with ref arg and type check", function () {
    expect(parser.parseCode("<?php\nfunction test(Type &$ref) {\n}\ntry {\n    call_user_func('test', 0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
