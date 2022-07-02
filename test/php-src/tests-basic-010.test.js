// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/010.phpt
  it("Testing | and & operators", function () {
    expect(parser.parseCode("<?php $a=8; $b=4; $c=8; echo $a|$b&$c?>")).toMatchSnapshot();
  });
});
