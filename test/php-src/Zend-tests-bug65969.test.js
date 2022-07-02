// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65969.phpt
  it("Bug #65969 (Chain assignment with T_LIST failure)", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\nlist($a,$b) = $obj->prop = [1,2];\nvar_dump($a,$b);")).toMatchSnapshot();
  });
});
