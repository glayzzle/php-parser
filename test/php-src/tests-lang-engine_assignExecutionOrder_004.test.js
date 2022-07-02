// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_004.phpt
  it("Evaluation order during assignments.", function () {
    expect(parser.parseCode("<?php\nfunction i1() {\n        echo \"i1\\n\";\n        return 1;\n}\nfunction i2() {\n        echo \"i2\\n\";\n        return 1;\n}\nfunction i3() {\n        echo \"i3\\n\";\n        return 3;\n}\n$a = array(10, 11, 12, 13);\nlist($a[i1()+i2()], , list($a[i3()], $a[])) = array(0, 1, array(30, 40), 3);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
