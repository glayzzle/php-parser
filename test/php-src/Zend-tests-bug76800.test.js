// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76800.phpt
  it("Bug #76800 (foreach inconsistent if array modified during loop)", function () {
    expect(parser.parseCode("<?php\n$arr = [1 => 1, 3 => 3];           // [1 => 1, 2 => 3] will print both keys\nforeach($arr as $key => &$val) {   // without & will print both keys\n    echo \"See key {$key}\\n\";\n    $arr[0] = 0;                   // without this line will print both keys\n    unset($arr[0]);\n}\n?>")).toMatchSnapshot();
  });
});
