// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/qm_assign_ref_unwrap_leak.phpt
  it("Leak in QM_ASSIGN when unwrapping references (rc=1)", function () {
    expect(parser.parseCode("<?php\nfunction &ref() {\n    $str = \"str\";\n    $str .= \"str\";\n    return $str;\n}\nvar_dump(true ? ref() : ref());\nvar_dump(ref() ?: ref());\nvar_dump(ref() ?? ref());\n?>")).toMatchSnapshot();
  });
});
