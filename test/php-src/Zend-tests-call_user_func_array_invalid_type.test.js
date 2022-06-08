// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_array_invalid_type.phpt
  it("call_user_func_array() generating TypeError", function () {
    expect(parser.parseCode("<?php\nclass drv {\n    function func() {\n    }\n}\n$drv = new drv;\ntry {\n    call_user_func_array(array($drv, 'func'), null);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
