// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug70963.phpt
  it("Bug #70963 (Unserialize shows UNKNOW in result)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('a:2:{i:0;O:9:\"exception\":1:{s:16:\"'.\"\\0\".'Exception'.\"\\0\".'trace\";s:4:\"test\";}i:1;R:3;}'));\nvar_dump(unserialize('a:2:{i:0;O:9:\"exception\":1:{s:16:\"'.\"\\0\".'Exception'.\"\\0\".'trace\";s:4:\"test\";}i:1;r:3;}'));\n?>")).toMatchSnapshot();
  });
});
