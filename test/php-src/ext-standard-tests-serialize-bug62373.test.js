// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug62373.phpt
  it("Bug #62373 (serialize() generates wrong reference to the object)", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B {}\n$size_of_ce = (((int)(log(PHP_INT_MAX) / log(2)) + 1 == 32 ? 368: 680) + 15) & ~15;\n$dummy = array();\n$b = new B();\n$period = $size_of_ce << 5;\nfor ($i = 0; $i < $period * 3; $i++) {\n    $a = new A();\n    $s = unserialize(serialize(array($b, $a)));\n    if ($s[0] === $s[1]) {\n        echo \"OOPS\\n\";\n        break;\n    }\n    $dummy[] = $a;\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
