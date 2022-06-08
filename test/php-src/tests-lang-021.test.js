// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/021.phpt
  it("Switch test 2", function () {
    expect(parser.parseCode("<?php\nfor ($i=0; $i<=5; $i++)\n{\n  echo \"i=$i\\n\";\n  switch($i) {\n    case 0:\n      echo \"In branch 0\\n\";\n      break;\n    case 1:\n      echo \"In branch 1\\n\";\n      break;\n    case 2:\n      echo \"In branch 2\\n\";\n      break;\n    case 3:\n      echo \"In branch 3\\n\";\n      break 2;\n    case 4:\n      echo \"In branch 4\\n\";\n      break;\n    default:\n      echo \"In default\\n\";\n      break;\n  }\n}\necho \"hi\\n\";\n?>")).toMatchSnapshot();
  });
});
