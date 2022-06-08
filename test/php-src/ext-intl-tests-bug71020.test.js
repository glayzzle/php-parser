// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug71020.phpt
  it("Bug #71020 (Use after free in Collator::sortWithSortKeys)", function () {
    expect(parser.parseCode("<?php\n$var_3=new Collator(\"Whatever\");\nfor($x=0;$x<0xbb;$x++)\n    $myarray[substr(md5(microtime()),rand(0,26),9) . strval($x)]= substr(md5(microtime()),rand(0,26),9) . strval($x);\n$var_3->sortWithSortKeys($myarray);\n?>\nokey")).toMatchSnapshot();
  });
});
