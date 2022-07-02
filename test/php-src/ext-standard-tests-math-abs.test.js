// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/abs.phpt
  it("Simple math tests", function () {
    expect(parser.parseCode("<?php\ndefine('LONG_MAX', is_int(5000000000)? 9223372036854775807 : 0x7FFFFFFF);\ndefine('LONG_MIN', -LONG_MAX - 1);\nprintf(\"%d,%d,%d,%d\\n\",is_int(LONG_MIN  ),is_int(LONG_MAX  ),\n                       is_int(LONG_MIN-1),is_int(LONG_MAX+1));\nvar_dump(1   === abs(-1));\nvar_dump(1.5 === abs(-1.5));\nvar_dump(1   === abs(\"-1\"));\nvar_dump(1.5 === abs(\"-1.5\"));\nvar_dump(-LONG_MIN+1 === abs(LONG_MIN-1));\nvar_dump(-LONG_MIN   === abs(LONG_MIN));\nvar_dump(-(LONG_MIN+1) === abs(LONG_MIN+1));\n?>")).toMatchSnapshot();
  });
});
