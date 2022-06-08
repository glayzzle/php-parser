// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/040.phpt
  it("foreach into array", function () {
    expect(parser.parseCode("<?php\n$a = array(0,1);\n$b[0]=2;\nforeach($a as $b[0]) {\n  echo $b[0].\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
