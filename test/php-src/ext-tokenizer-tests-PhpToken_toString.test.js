// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_toString.phpt
  it("PhpToken implements __toString()", function () {
    expect(parser.parseCode("<?php\n$tokens = PhpToken::tokenize('<?php echo \"Hello \". $what;');\nvar_dump(implode($tokens));\nvar_dump($tokens[0] instanceof Stringable);\nvar_dump((string) $tokens[0]);\nvar_dump($tokens[0]->__toString());\n?>")).toMatchSnapshot();
  });
});
