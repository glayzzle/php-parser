// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/001.phpt
  it("Simple If condition test", function () {
    expect(parser.parseCode("<?php $a=1; if($a>0) { echo \"Yes\"; } ?>")).toMatchSnapshot();
  });
});
