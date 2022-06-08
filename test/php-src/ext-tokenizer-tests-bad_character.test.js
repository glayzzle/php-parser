// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bad_character.phpt
  it("token_get_all() produces T_BAD_CHARACTER for unexpected characters", function () {
    expect(parser.parseCode("<?php\n$codes = [\n    \"<?php \\0 foo\",\n    \"<?php \\1 bar\",\n    \"<?php \\1\\2 bar \\3\",\n];\nforeach ($codes as $code) {\n    foreach (token_get_all($code) as $token) {\n        if (is_array($token)) {\n            echo token_name($token[0]), \" \", strlen($token[1]), \"\\n\";\n        } else {\n            echo $token, \"\\n\";\n        }\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
