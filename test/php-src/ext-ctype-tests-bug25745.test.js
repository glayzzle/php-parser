// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/bug25745.phpt
  it("Bug #25745 (ctype functions fail with non-ascii characters)", function () {
    expect(parser.parseCode("<?php\n$funcs = array(\n    \"ctype_alnum\", \"ctype_alpha\", \"ctype_cntrl\", \"ctype_digit\",\n    \"ctype_graph\", \"ctype_lower\", \"ctype_print\", \"ctype_punct\",\n    \"ctype_space\", \"ctype_upper\", \"ctype_xdigit\"\n);\nforeach ($funcs as $ctype_func) {\n    for ($i = 0; $i < 256; $i++) {\n        $a = $ctype_func($i);\n        $b = $ctype_func(chr($i));\n        if ($a != $b) {\n            echo \"broken... $ctype_func($i) = $a, $ctype_func(chr($i)) = $b\\n\";\n            exit;\n        }\n    }\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
