// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70166.phpt
  it("SPL: Bug #70166 Use After Free Vulnerability in unserialize() with SPLArrayObject", function () {
    expect(parser.parseCode("<?php\n$inner = 'x:i:1;a:0:{};m:a:0:{}';\n$exploit = 'a:2:{i:0;C:11:\"ArrayObject\":'.strlen($inner).':{'.$inner.'}i:1;R:5;}';\n$data = unserialize($exploit);\nfor($i = 0; $i < 5; $i++) {\n    $v[$i] = 'hi'.$i;\n}\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
