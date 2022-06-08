// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42143.phpt
  it("bug #42143 (The constant NAN is reported as 0 on Windows build)", function () {
    expect(parser.parseCode("<?php\necho \"Testing NAN:\\n\";\necho \"NAN= \";\nvar_dump(NAN);\nvar_dump(tan(-1) == 123);\nvar_dump(cos(-100) == \"PHP String\");\nvar_dump(deg2rad(-5.6) == null);\nvar_dump(sqrt(-0.1) == false);\nvar_dump(sqrt(cos(M_PI)) == 0.1);\nvar_dump(NAN);\nvar_dump(is_nan(sqrt(-1.005)) == false);\nvar_dump(is_nan(floor(1)) == true);\nvar_dump(log10(-1) == log(-1));\nvar_dump(log10(-1) != log10(-1));\nvar_dump(is_finite(log10(-1)) == false);\nvar_dump(NAN == NAN);\n?>")).toMatchSnapshot();
  });
});
