// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug76991.phpt
  it("Bug #76991: Incorrect tokenization of multiple invalid flexible heredoc strings", function () {
    expect(parser.parseCode("<?php\n$code = <<<CODE\n<?php\n<<<TEST\n\\$a\n TEST;\n<<<END\n\\$a\n END;\nCODE;\nforeach (token_get_all($code) as $token) {\n    if (is_array($token)) {\n        echo token_name($token[0]) . \": \" .str_replace(\"\\n\", '\\n', $token[1]);\n    } else {\n        echo $token;\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
