// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/sccp_loop_var_free.phpt
  it("Check that SCCP correctly handles non-terminating frees of loop variables", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $arr = [];\n    foreach ($arr as $item) {\n        if (!empty($result)) {\n            return $result;\n        }\n    }\n    return 2;\n}\nvar_dump(test());\n?>")).toMatchSnapshot();
  });
});
