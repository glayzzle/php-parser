// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/009.phpt
  it("Subtract 3 variables and print result", function () {
    expect(parser.parseCode("<?php $a=27; $b=7; $c=10; $d=$a-$b-$c; echo $d?>")).toMatchSnapshot();
  });
});
