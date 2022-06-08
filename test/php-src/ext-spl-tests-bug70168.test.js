// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70168.phpt
  it("SPL: Bug #70168 Use After Free Vulnerability in unserialize() with SplObjectStorage", function () {
    expect(parser.parseCode("<?php\n$inner = 'x:i:1;O:8:\"stdClass\":0:{};m:a:0:{}';\n$exploit = 'a:2:{i:0;C:16:\"SplObjectStorage\":'.strlen($inner).':{'.$inner.'}i:1;R:3;}';\n$data = unserialize($exploit);\nfor($i = 0; $i < 5; $i++) {\n    $v[$i] = 'hi'.$i;\n}\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
