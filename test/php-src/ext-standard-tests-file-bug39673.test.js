// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug39673.phpt
  it("Bug #39673 (file_get_contents causes bus error on certain offsets)", function () {
    expect(parser.parseCode("<?php\n$str = str_repeat(\"test\", 3456);\n$filename = __DIR__.'/bug39673.txt';\nfile_put_contents($filename, $str);\n$offsets = array(\n    -1,\n    0,\n    3456*4,\n    3456*4 - 1,\n    3456*4 + 1,\n    2000,\n    5000,\n    100000,\n);\nforeach ($offsets as $offset) {\n    $r = file_get_contents($filename, false, null, $offset);\n    if ($r !== false) var_dump(strlen($r));\n}\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
