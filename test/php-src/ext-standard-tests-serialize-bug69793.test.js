// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug69793.phpt
  it("Bug #69793: Remotely triggerable stack exhaustion via recursive method calls", function () {
    expect(parser.parseCode("<?php\n$e = unserialize('O:9:\"Exception\":7:{s:17:\"'.\"\\0\".'Exception'.\"\\0\".'string\";s:1:\"a\";s:7:\"'.\"\\0\".'*'.\"\\0\".'code\";i:0;s:7:\"'.\"\\0\".'*'.\"\\0\".'file\";s:0:\"\";s:7:\"'.\"\\0\".'*'.\"\\0\".'line\";i:1337;s:16:\"'.\"\\0\".'Exception'.\"\\0\".'trace\";a:0:{}s:19:\"'.\"\\0\".'Exception'.\"\\0\".'previous\";i:10;s:10:\"'.\"\\0\".'*'.\"\\0\".'message\";N;}');\nvar_dump($e.\"\");\n?>")).toMatchSnapshot();
  });
});
