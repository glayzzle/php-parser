// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/033.phpt
  it("Alternative syntaxes test", function () {
    expect(parser.parseCode("<?php\n$a = 1;\necho \"If: \";\nif ($a) echo 1; else echo 0;\nif ($a):\n    echo 1;\nelse:\n    echo 0;\nendif;\necho \"\\nWhile: \";\nwhile ($a<5) echo $a++;\nwhile ($a<9):\n    echo ++$a;\nendwhile;\necho \"\\nFor: \";\nfor($a=0;$a<5;$a++) echo $a;\nfor($a=0;$a<5;$a++):\n    echo $a;\nendfor;\necho \"\\nSwitch: \";\nswitch ($a):\n    case 0;\n        echo 0;\n        break;\n    case 5:\n        echo 1;\n        break;\n    default;\n        echo 0;\n        break;\nendswitch;\n?>")).toMatchSnapshot();
  });
});
