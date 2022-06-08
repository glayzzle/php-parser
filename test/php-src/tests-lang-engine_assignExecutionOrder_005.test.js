// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_005.phpt
  it("Evaluation order during assignments.", function () {
    expect(parser.parseCode("<?php\nfunction i1() {\n        echo \"i1\\n\";\n        return 0;\n}\nfunction i2() {\n        echo \"i2\\n\";\n        return 0;\n}\nfunction i3() {\n        echo \"i3\\n\";\n        return 0;\n}\nfunction i4() {\n        echo \"i4\\n\";\n        return 0;\n}\nfunction i5() {\n        echo \"i5\\n\";\n        return 0;\n}\nfunction i6() {\n        echo \"i6\\n\";\n        return 0;\n}\n$a = array(array(0));\n$b = array(array(1));\n$c = array(array(2));\n$a[i1()][i2()] = $b[i3()][i4()] = $c[i5()][i6()];\nvar_dump($a);\nvar_dump($b);\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
