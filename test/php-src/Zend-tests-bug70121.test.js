// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70121.phpt
  it("Bug #70121 (unserialize() could lead to unexpected methods execution / NULL pointer deref)", function () {
    expect(parser.parseCode("<?php\nunserialize('O:12:\"DateInterval\":1:{s:4:\"days\";O:9:\"Exception\":7:{s:10:\"'.\"\\0\".'*'.\"\\0\".'message\";s:1:\"x\";s:17:\"'.\"\\0\".'Exception'.\"\\0\".'string\";s:1:\"A\";s:7:\"'.\"\\0\".'*'.\"\\0\".'code\";i:0;s:7:\"'.\"\\0\".'*'.\"\\0\".'file\";s:1:\"a\";s:7:\"'.\"\\0\".'*'.\"\\0\".'line\";i:1337;s:16:\"'.\"\\0\".'Exception'.\"\\0\".'trace\";a:0:{}s:19:\"'.\"\\0\".'Exception'.\"\\0\".'previous\";O:8:\"stdClass\":0:{}}}');\n?>\nOK")).toMatchSnapshot();
  });
});
