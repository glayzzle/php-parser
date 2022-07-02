// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug34227.phpt
  it("Bug #34277 (array_filter() crashes with references and objects)", function () {
    expect(parser.parseCode("<?php\nclass C\n{\n  function m1()\n  {\n    $this->m2();\n  }\n  function m2()\n  {\n    $this->m3();\n  }\n  function m3()\n  {\n    $this->m4();\n  }\n  function m4()\n  {\n    $this->m5();\n  }\n  function m5()\n  {\n    $this->m6();\n  }\n  function m6()\n  {\n    $this->m7();\n  }\n  function m7()\n  {\n    $this->m8();\n  }\n  function m8()\n  {\n    $this->m9();\n  }\n  function m9()\n  {\n    $this->m10();\n  }\n  function m10()\n  {\n    $this->m11(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n  }\n  function m11($a1, $a2, $a3, $a4, $a5, $a6, $a7, $a8, $a9, $a10)\n  {\n    $arr = explode('a', 'b');\n  }\n}\nfunction f($str)\n{\n  $obj = new C;\n  $obj->m1();\n  return TRUE;\n}\nfunction p5($a1, $a2, $a3, $a4, $a5, $a6, $a7, $a8, $a9, $a10, $a11, $a12)\n{\n  $ret = array_filter(array(0), 'f');\n}\nfunction p4()\n{\n  p5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);\n}\nfunction p3()\n{\n  p4();\n}\nfunction p2()\n{\n  p3();\n}\nfunction p1()\n{\n  p2();\n}\np1();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
