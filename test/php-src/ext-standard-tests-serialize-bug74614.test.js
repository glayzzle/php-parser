// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug74614.phpt
  it("Bug #74614: Use-after-free in PHP7's unserialize()", function () {
    expect(parser.parseCode("<?php\nunserialize('a:3020000000000000000000000000000001:{i:0;a:0:{}i:1;i:2;i:2;i:3;i:3;i:4;i:4;i:5;i:5;i:6;i:6;i:7;i:7;i:8;i:8;R:2;}');\n?>")).toMatchSnapshot();
  });
});
