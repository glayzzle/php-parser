// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/007.phpt
  it("Multiply 3 variables and print result", function () {
    expect(parser.parseCode("<?php $a=2; $b=4; $c=8; $d=$a*$b*$c; echo $d?>")).toMatchSnapshot();
  });
});
