// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_variation5.phpt
  it("Test mb_ereg() function : usage variations - Test anchors in regex", function () {
    expect(parser.parseCode("<?php\n/*\n * Test mb_ereg with anchors (start and end of string) in $pattern\n */\necho \"*** Testing mb_ereg() : usage variations ***\\n\";\nmb_regex_encoding('utf-8');\n$string_ascii = 'This is an English string. 0123456789.';\n$string_mb = base64_decode('5pel5pys6Kqe44OG44Kt44K544OI44Gn44GZ44CCMDEyMzTvvJXvvJbvvJfvvJjvvJnjgII=');\n$regex = '^.*?[[:blank:]]?[[:punct:][:digit:]]+\\.?$';\necho \"\\nASCII String without \\$regs arg:\\t\\t\";\nvar_dump(mb_ereg($regex, $string_ascii));\necho \"ASCII String with \\$regs arg:\\n\";\nvar_dump(mb_ereg($regex, $string_ascii, $regs_ascii));\nbase64_encode_var_dump($regs_ascii);\necho \"\\nMultibyte String without \\$regs arg:\\t\";\nvar_dump(mb_ereg($regex, $string_mb));\necho \"Multubyte String with \\$regs arg:\\n\";\nvar_dump(mb_ereg($regex, $string_mb, $regs_mb));\nbase64_encode_var_dump($regs_mb);\necho \"Done\";\n/**\n * replicate a var dump of an array but outputted string values are base64 encoded\n *\n * @param array $regs\n */\nfunction base64_encode_var_dump($regs) {\n    if ($regs) {\n        echo \"array(\" . count($regs) . \") {\\n\";\n        foreach ($regs as $key => $value) {\n            echo \"  [$key]=>\\n  \";\n            if (is_string($value)) {\n                var_dump(base64_encode($value));\n            } else {\n                var_dump($value);\n            }\n        }\n        echo \"}\\n\";\n    } else {\n        echo \"NULL\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
