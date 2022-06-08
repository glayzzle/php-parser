// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug78238.phpt
  it("Bug #78238 (BCMath returns \"-0\")", function () {
    expect(parser.parseCode("<?php\nvar_dump(bcadd(\"0\", \"-0.1\"));\n$a = bcmul(\"0.9\", \"-0.1\", 1);\n$b = bcmul(\"0.90\", \"-0.1\", 1);\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
