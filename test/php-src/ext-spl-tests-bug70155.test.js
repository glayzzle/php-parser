// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70155.phpt
  it("SPL: Bug #70155 Use After Free Vulnerability in unserialize() with SPLArrayObject", function () {
    expect(parser.parseCode("<?php\n$inner = 'x:i:0;O:12:\"DateInterval\":1:{s:1:\"y\";i:3;};m:a:1:{i:0;R:2;}';\n$exploit = 'C:11:\"ArrayObject\":'.strlen($inner).':{'.$inner.'}';\n$data = unserialize($exploit);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
