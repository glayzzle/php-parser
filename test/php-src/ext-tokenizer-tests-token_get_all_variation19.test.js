// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_variation19.phpt
  it("Reconstructing a script using token_get_all()", function () {
    expect(parser.parseCode("<?php\n$phpstr = '\n<?php\n// A php script to test token_get_all()\n/* a different\ntype of\ncomment */\n// a class\nclass TestClass {\n    public function foo() {\n        echo \"Called foo()\\n\";\n    }\n}\n$a = new TestClass();\n$a->foo();\nfor ($i = 0; $i < 10; $i++) {\n    echo \"Loop iteration $i\\n\";\n}\n?>';\n$token_array = token_get_all($phpstr);\n$script = \"\";\n// reconstruct a script (without open/close tags) from the token array\nforeach ($token_array as $token) {\n    if (is_array($token)) {\n        if (strncmp($token[1], '<?php', 5) == 0) {\n            continue;\n        }\n        if (strncmp($token[1], '?>', 2) == 0) {\n            continue;\n        }\n        $script .= $token[1];\n    } else {\n        $script .= $token;\n    }\n}\nvar_dump($script);\neval($script);\n?>")).toMatchSnapshot();
  });
});
