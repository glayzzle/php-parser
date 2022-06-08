// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/php_tag_only.phpt
  it("Tokenization of only the <?php tag", function () {
    expect(parser.parseCode("<?php\nforeach (token_get_all(\"<?php\") as $token) {\n    echo token_name($token[0]), \"\\n\";\n}\necho \"\\n\";\nforeach (token_get_all(\"Foobar<?php\") as $token) {\n    echo token_name($token[0]), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
