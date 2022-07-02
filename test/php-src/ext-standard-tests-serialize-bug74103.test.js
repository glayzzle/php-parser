// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug74103.phpt
  it("Bug #74103: heap-use-after-free when unserializing invalid array size", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('a:7:{i:0;i:04;s:1:\"a\";i:2;i:9617006;i:4;s:1:\"a\";i:4;s:1:\"a\";R:5;s:1:\"7\";R:3;s:1:\"a\";R:5;;s:18;}}'));\n?>")).toMatchSnapshot();
  });
});
