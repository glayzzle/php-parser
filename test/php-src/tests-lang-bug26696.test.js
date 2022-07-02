// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug26696.phpt
  it("Bug #26696 (string index in a switch() crashes with multiple matches)", function () {
    expect(parser.parseCode("<?php\n$str = 'asdd/?';\n$len = strlen($str);\nfor ($i = 0; $i < $len; $i++) {\n    switch ($str[$i]) {\n        case '?':\n            echo \"OK\\n\";\n            break;\n    }\n}\n$str = '*';\nswitch ($str[0]) {\n    case '*';\n        echo \"OK\\n\";\n        break;\n    default:\n        echo 'Default RAN!';\n}\n?>")).toMatchSnapshot();
  });
});
