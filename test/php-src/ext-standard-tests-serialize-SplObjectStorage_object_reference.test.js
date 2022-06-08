// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/SplObjectStorage_object_reference.phpt
  it("Reference to SplObjectStorage key (not supported)", function () {
    expect(parser.parseCode("<?php\n$inner = 'x:i:1;O:8:\"stdClass\":0:{};m:a:0:{}';\n$inner_len = strlen($inner);\n$str = <<<STR\na:2:{i:0;C:16:\"SPlObjectStorage\":{$inner_len}:{{$inner}}i:1;R:4;}\nSTR;\nvar_dump(unserialize($str));\n?>")).toMatchSnapshot();
  });
});
