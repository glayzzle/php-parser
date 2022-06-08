// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug69335.phpt
  it("Bug #69335 (SplArray BC break)", function () {
    expect(parser.parseCode("<?php\n$a = array(1=>1, 3=>3, 5=>5, 7=>7);\n$a = new ArrayObject($a);\nforeach ($a as $k => $v) {\n    var_dump(\"$k => $v\");\n    if ($k == 3) {\n        $a['a'] = \"?\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
