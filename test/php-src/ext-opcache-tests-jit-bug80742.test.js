// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80742.phpt
  it("Bug #80742 (Opcache JIT makes some boolean logic unexpectedly be true)", function () {
    expect(parser.parseCode("<?php\nfunction checkGroundState(float $movY, float $dy) : void{\n\tvar_dump($movY != $dy, $movY < 0, ($movY != $dy and $movY < 0));\n\tvar_dump(\"wow!\");\n}\ncheckGroundState(0, 0);\nfunction eq(float $a, float $b, $c, $d) {\n\tif ($a == $b) {\n\t\techo 1;\n\t}\n\tif ($a == $b) {\n\t} else {\n\t\techo 2;\n\t}\n\tif ($a != $b) {\n\t\techo 3;\n\t}\n\tif ($a != $b) {\n\t} else {\n\t\techo 4;\n\t}\n\tif ($a === $b) {\n\t\techo 5;\n\t}\n\tif ($a === $b) {\n\t} else {\n\t\techo 6;\n\t}\n\tif ($a !== $b) {\n\t\techo 7;\n\t}\n\tif ($a !== $b) {\n\t} else {\n\t\techo 8;\n\t}\n\techo \"\\n\";\n\tvar_dump(\n\t\t$a == $b && $c,\n\t\t$a != $b && $c,\n\t\t$a === $b && $c,\n\t\t$a !== $b && $c,);\n\tvar_dump(\n\t\t$a == $b || $d,\n\t\t$a != $b || $d,\n\t\t$a === $b || $d,\n\t\t$a !== $b || $d);\n}\neq(3.0, 3.0, true, false);\neq(3.0,\t2.0, true, false);\neq(3.0, NAN, true, false);\neq(NAN, NAN, true, false);")).toMatchSnapshot();
  });
});
