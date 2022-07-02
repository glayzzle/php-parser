// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_009.phpt
  it("Execution ordering with comparison operators.", function () {
    expect(parser.parseCode("<?php\nfunction f($x) {\n    echo \"f($x) \";\n    return $x;\n}\necho \"Function call args:\\n\";\nvar_dump(f($i=0) < f(++$i));\nvar_dump(f($i=0) <= f(++$i));\nvar_dump(f($i=0) > f(++$i));\nvar_dump(f($i=0) >= f(++$i));\necho \"\\nArray indices:\\n\";\n$a[1][2] = 0;\n$a[3][4] = 1;\n$i=0;\nvar_dump($a[$i=1][++$i] < $a[++$i][++$i]);\nvar_dump($a[$i=1][++$i] <= $a[++$i][++$i]);\nvar_dump($a[$i=1][++$i] > $a[++$i][++$i]);\nvar_dump($a[$i=1][++$i] >= $a[++$i][++$i]);\n?>")).toMatchSnapshot();
  });
});
