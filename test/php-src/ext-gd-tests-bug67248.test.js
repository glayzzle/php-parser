// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug67248.phpt
  it("Bug #67248 (imageaffinematrixget missing check of parameters)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\nfor($i=0;$i<7;$i++) {\n    trycatch_dump(\n        fn() => imageaffinematrixget($i, new stdClass())\n    );\n}\n?>")).toMatchSnapshot();
  });
});
