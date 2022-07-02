// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_no_eval_conflict.phpt
  it("Use conflicts should not occur across eval()s", function () {
    expect(parser.parseCode("<?php\n/* It is important that these two eval()s occur on the same line,\n * as this forces them to have the same filename. */\neval(\"class A {}\"); eval(\"use Foo\\A;\");\n?>\n===DONE===")).toMatchSnapshot();
  });
});
