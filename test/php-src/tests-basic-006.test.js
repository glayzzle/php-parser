// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/006.phpt
  it("Add 3 variables together and print result", function () {
    expect(parser.parseCode("<?php $a=1; $b=2; $c=3; $d=$a+$b+$c; echo $d?>")).toMatchSnapshot();
  });
});
