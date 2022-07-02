// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug29566.phpt
  it("Bug #29566 (foreach/string handling strangeness)", function () {
    expect(parser.parseCode("<?php\n$var=\"This is a string\";\n$dummy=\"\";\nunset($dummy);\nforeach($var['0nosuchkey'] as $v) {\n}\n?>")).toMatchSnapshot();
  });
});
