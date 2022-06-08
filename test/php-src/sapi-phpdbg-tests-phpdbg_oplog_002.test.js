// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/phpdbg_oplog_002.phpt
  it("phpdbg_end_oplog() alone must not crash", function () {
    expect(parser.parseCode("<?php\nvar_dump(phpdbg_end_oplog());\n")).toMatchSnapshot();
  });
});
