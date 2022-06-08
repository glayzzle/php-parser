// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug24766.phpt
  it("Bug #24766 (strange result array from unpack)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\n$a = unpack('C2', \"\\0224V\");\n$b = array(1 => 18, 2 => 52);\nvar_dump($a, $b);\n$k = array_keys($a);\n$l = array_keys($b);\nvar_dump($k, $l);\n$i=$k[0];\nvar_dump($a[$i]);\n$i=$l[0];\nvar_dump($b[$i]);\n?>")).toMatchSnapshot();
  });
});
