// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug49700.phpt
  it("Bug #49700 (memory leaks in php_date.c if garbage collector is enabled)", function () {
    expect(parser.parseCode("<?php\ngc_enable();\n$objs = array();\n$objs[1] = new DateTime();\ngc_collect_cycles();\nunset($objs);\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
