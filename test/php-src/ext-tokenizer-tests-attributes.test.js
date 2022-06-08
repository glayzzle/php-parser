// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/attributes.phpt
  it("Attributes are exposed as tokens.", function () {
    expect(parser.parseCode("<?php\n$tokens = token_get_all('<?php #[A1(1, 2)] class C1 { }');\n$attr = $tokens[1];\nvar_dump(token_name(T_ATTRIBUTE));\nvar_dump($attr[0] === T_ATTRIBUTE);\nvar_dump($attr[1]);\n$class = $tokens[2];\nvar_dump($class[1]);\n?>")).toMatchSnapshot();
  });
});
