// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug72433.phpt
  it("Bug #72433: Use After Free Vulnerability in PHP's GC algorithm and unserialize", function () {
    expect(parser.parseCode("<?php\n$serialized_payload = 'a:3:{i:0;r:1;i:1;r:1;i:2;C:11:\"ArrayObject\":19:{x:i:0;r:1;;m:a:0:{}}}';\nvar_dump(unserialize($serialized_payload));\n?>")).toMatchSnapshot();
  });
});
