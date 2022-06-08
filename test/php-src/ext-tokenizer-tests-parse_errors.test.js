// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/parse_errors.phpt
  it("Parse errors during token_get_all()", function () {
    expect(() => parser.parseCode("<?php\nfunction test_parse_error($code) {\n    try {\n        var_dump(token_get_all($code, TOKEN_PARSE));\n    } catch (ParseError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    foreach (token_get_all($code) as $token) {\n        if (is_array($token)) {\n            echo token_name($token[0]), \" ($token[1])\\n\";\n        } else {\n            echo \"$token\\n\";\n        }\n    }\n    echo \"\\n\";\n}\ntest_parse_error('<?php var_dump(078);');\ntest_parse_error('<?php var_dump(\"\\u{xyz}\");');\ntest_parse_error('<?php var_dump(\"\\u{ffffff}\");');\ntest_parse_error('<?php var_dump(078 + 078);');\n?>")).toThrowErrorMatchingSnapshot();
  });
});
