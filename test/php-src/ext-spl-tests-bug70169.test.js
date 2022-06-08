// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70169.phpt
  it("SPL: Bug #70169\tUse After Free Vulnerability in unserialize() with SplDoublyLinkedList", function () {
    expect(parser.parseCode("<?php\n$inner = 'i:1;';\n$exploit = 'a:2:{i:0;C:19:\"SplDoublyLinkedList\":'.strlen($inner).':{'.$inner.'}i:1;R:3;}';\n$data = unserialize($exploit);\nfor($i = 0; $i < 5; $i++) {\n    $v[$i] = 'hi'.$i;\n}\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
