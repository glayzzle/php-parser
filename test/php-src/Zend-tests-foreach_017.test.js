// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_017.phpt
  it("array_splice() function precerve foreach by reference iterator pointer", function () {
    expect(parser.parseCode("<?php\n/* remove before */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 3) {\n        $done = 1;\n        array_splice($a, 1, 2);\n    }\n}\necho \"\\n\";\n/* remove after */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 0) {\n        $done = 1;\n        array_splice($a, 2, 2);\n    }\n}\necho \"\\n\";\n/* remove current */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 2) {\n        $done = 1;\n        array_splice($a, 1, 3);\n    }\n}\necho \"\\n\";\n$replacement = ['x', 'y', 'z'];\n/* replace before */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 3) {\n        $done = 1;\n        array_splice($a, 1, 2, $replacement);\n    }\n}\necho \"\\n\";\n/* replace after */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 0) {\n        $done = 1;\n        array_splice($a, 2, 2, $replacement);\n    }\n}\necho \"\\n\";\n/* replace current */\n$done = 0;\n$a = [0,1,2,3,4];\nforeach($a as &$v) {\n    echo \"$v\\n\";\n    if (!$done && $v == 2) {\n        $done = 1;\n        array_splice($a, 1, 3, $replacement);\n    }\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
