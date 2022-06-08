// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62070.phpt
  it("Bug #62070: Collator::getSortKey() returns garbage", function () {
    expect(parser.parseCode("<?php\n$s1 = 'Hello';\n$coll = collator_create('en_US');\n$res = collator_get_sort_key($coll, $s1);\necho urlencode($res);\n?>")).toMatchSnapshot();
  });
});
