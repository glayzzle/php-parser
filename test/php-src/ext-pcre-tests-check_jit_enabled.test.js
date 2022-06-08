// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/check_jit_enabled.phpt
  it("Check for JIT enablement status", function () {
    expect(parser.parseCode("<?php\nob_start();\nphpinfo();\n$info = ob_get_contents();\nob_end_clean();\nvar_dump(preg_match(\",PCRE JIT Support .* enabled,\", $info));\n?>")).toMatchSnapshot();
  });
});
