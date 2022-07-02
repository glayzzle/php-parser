// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach.phpt
  it("foreach() by-ref bug", function () {
    expect(parser.parseCode("<?php\n$foo = array(1,2,3,4);\nforeach($foo as $key => &$val) {\n    if($val == 3) {\n        $foo[$key] = 0;\n    } else {\n        $val++;\n    }\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
