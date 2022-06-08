// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug71313.phpt
  it("Bug #71311 Use-after-free vulnerability in SPL(SplObjectStorage, unserialize)", function () {
    expect(parser.parseCode("<?php\n$data = unserialize(\"C:16:\\\"SplObjectStorage\\\":113:{x:i:2;O:8:\\\"stdClass\\\":0:{},a:2:{s:4:\\\"prev\\\";i:2;s:4:\\\"next\\\";O:8:\\\"stdClass\\\":0:{}};r:7;,R:2;s:4:\\\"next\\\";;r:3;};m:a:0:{}}\");\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
