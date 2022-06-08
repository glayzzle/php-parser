// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/008.phpt
  it("Divide 3 variables and print result", function () {
    expect(parser.parseCode("<?php $a=27; $b=3; $c=3; $d=$a/$b/$c; echo $d?>")).toMatchSnapshot();
  });
});
