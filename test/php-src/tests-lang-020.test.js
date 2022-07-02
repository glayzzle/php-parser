// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/020.phpt
  it("Switch test 1", function () {
    expect(parser.parseCode("<?php\n$i=\"abc\";\nfor ($j=0; $j<10; $j++) {\nswitch (1) {\n  case 1:\n    echo \"In branch 1\\n\";\n    switch ($i) {\n        case \"ab\":\n            echo \"This doesn't work... :(\\n\";\n            break;\n        case \"abcd\":\n            echo \"This works!\\n\";\n            break;\n        case \"blah\":\n            echo \"Hmmm, no worki\\n\";\n            break;\n        default:\n            echo \"Inner default...\\n\";\n    }\n    for ($blah=0; $blah<200; $blah++) {\n      if ($blah==100) {\n        echo \"blah=$blah\\n\";\n      }\n    }\n    break;\n  case 2:\n    echo \"In branch 2\\n\";\n    break;\n  case $i:\n    echo \"In branch \\$i\\n\";\n    break;\n  case 4:\n    echo \"In branch 4\\n\";\n    break;\n  default:\n    echo \"Hi, I'm default\\n\";\n    break;\n }\n}\n?>")).toMatchSnapshot();
  });
});
