// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug67395.phpt
  it("Bug 67395: token_name() does not return name for T_POW and T_POW_EQUAL token", function () {
    expect(parser.parseCode("<?php\n$powToken = token_get_all('<?php **')[1][0];\nvar_dump(token_name($powToken));\n$powEqualToken = token_get_all('<?php **=')[1][0];\nvar_dump(token_name($powEqualToken));\n?>")).toMatchSnapshot();
  });
});
