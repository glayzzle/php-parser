// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug26463.phpt
  it("Bug #26463 (token_get_all() does not correctly handle semicolons after T_END_HEREDOC)", function () {
    expect(parser.parseCode("<?php\n$str = '<?php\n$x=<<<DD\njhdsjkfhjdsh\nDD\n.\"\";\n$a=<<<DDDD\njhdsjkfhjdsh\nDDDD;\n?>';\nvar_dump(token_get_all($str));\n?>")).toMatchSnapshot();
  });
});
