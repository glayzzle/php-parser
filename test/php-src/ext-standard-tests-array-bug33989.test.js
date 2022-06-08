// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug33989.phpt
  it("Bug #33989 (extract($GLOBALS,EXTR_REFS) crashes PHP)", function () {
    expect(parser.parseCode("<?php\n$a=\"a\";\nextract($GLOBALS, EXTR_REFS);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
