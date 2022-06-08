// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/022.phpt
  it("Switch test 3", function () {
    expect(parser.parseCode("<?php\nfunction switchtest ($i, $j)\n{\n    switch ($i) {\n        case 0:\n                switch($j) {\n                    case 0:\n                        echo \"zero\";\n                        break;\n                    case 1:\n                        echo \"one\";\n                        break;\n                    default:\n                        echo $j;\n                        break;\n                }\n                echo \"\\n\";\n                break;\n        default:\n                echo \"Default taken\\n\";\n    }\n}\nfor ($i=0; $i<3; $i++) {\n  for ($k=0; $k<10; $k++) {\n    switchtest (0,$k);\n  }\n}\n?>")).toMatchSnapshot();
  });
});
