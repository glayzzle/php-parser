// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug60192-sortwithsortkeys.phpt
  it("Bug #60192 (SegFault when Collator not constructed properly)", function () {
    expect(parser.parseCode("<?php\nclass Collator2 extends Collator{\n    public function __construct() {\n        // omitting parent::__construct($someLocale);\n    }\n}\n$c = new Collator2();\n$a = array('a', 'b');\n$c->sortWithSortKeys($a);\n?>")).toMatchSnapshot();
  });
});
