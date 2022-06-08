// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug73452.phpt
  it("Bug #73452 Segfault (Regression for #69152)", function () {
    expect(parser.parseCode("<?php\n$data = 'O:9:\"SoapFault\":4:{s:9:\"faultcode\";i:4298448493;s:11:\"faultstring\";i:4298448543;s:7:\"'.\"\\0*\\0\".'file\";s:0:\"\";s:7:\"'.\"\\0*\\0\".'line\";i:0;}';\necho unserialize($data);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
