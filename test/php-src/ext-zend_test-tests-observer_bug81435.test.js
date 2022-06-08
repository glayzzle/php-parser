// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_bug81435.phpt
  it("Bug #81435 (Observer current_observed_frame may point to an old (overwritten) frame)", function () {
    expect(parser.parseCode("<?php\nfunction d() {} // observed\nfunction c() {\n    d();\n}\nfunction b() {\n    c();\n}\nfunction bailout(...$args) {\n    array_map(\"str_repeat\", [\"\\xFF\"], [100000000]);\n}\nfunction a() { // observed (first_observed_frame)\n    b();\n    bailout(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15); // overwrite the vm_stack containing prev_execute_data\n}\na();\n?>")).toMatchSnapshot();
  });
});
