// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserializeS.phpt
  it("Bug MOPB-29 (wrong length calculation for S)", function () {
    expect(parser.parseCode("<?php\n$str = 'S:'.(100*3).':\"'.str_repeat('\\61', 100).'\"';\n$arr = array(str_repeat('\"', 200).\"1\"=>1,str_repeat('\"', 200).\"2\"=>1);\n$data = unserialize($str);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
