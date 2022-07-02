// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug61273.phpt
  it("Bug #61273 (call_user_func_array with more than 16333 arguments leaks / crashes)", function () {
    expect(parser.parseCode("<?php\n/**\n * for 5.3 #define ZEND_VM_STACK_PAGE_SIZE ((64 * 1024) - 64)\n * for 5.4 #define ZEND_VM_STACK_PAGE_SIZE ((16 * 1024) - 16)\n * we should trick EG(argument_stack) into growing\n */\n$args = array_fill(0, 64 * 1024 - 64, 0);\ncall_user_func_array(function(&$a) {}, $args);\necho strval(\"okey\");\n?>")).toMatchSnapshot();
  });
});
