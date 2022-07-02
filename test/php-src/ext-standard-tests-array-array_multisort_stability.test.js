// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_multisort_stability.phpt
  it("array_multisort() is stable", function () {
    expect(parser.parseCode("<?php\n// Something of a dummy example where 0 and '0' are used as equal elements.\n$ary1 = array_fill(0, 100, 0);\n$origAry2 = $ary2 = array_merge(...array_fill(0, 50, [0, '0']));\narray_multisort($ary1, $ary2);\nvar_dump($ary2 === $origAry2);\n?>")).toMatchSnapshot();
  });
});
