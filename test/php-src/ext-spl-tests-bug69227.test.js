// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69227.phpt
  it("Bug #69227 (Use after free in zval_scan caused by spl_object_storage_get_gc)", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\n$s->attach($s);\ngc_collect_cycles();\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
