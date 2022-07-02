// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/028.phpt
  it("Testing function call through of array item", function () {
    expect(parser.parseCode("<?php\n$arr = array('strtoupper', 'strtolower');\n$k = 0;\nvar_dump($arr[0]('foo') == 'FOO');\nvar_dump($arr[$k]('foo') == 'FOO');\nvar_dump($arr[++$k]('FOO') == 'foo');\nvar_dump($arr[++$k]('FOO') == 'foo');\n?>")).toMatchSnapshot();
  });
});
