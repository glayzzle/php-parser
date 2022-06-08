// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug75002.phpt
  it("Bug #75002 Null Pointer Dereference in timelib_time_clone", function () {
    expect(parser.parseCode("<?php\nclass aaa extends DatePeriod {\n    public function __construct() { }\n}\n$start=new DateTime( '2012-08-01' );\nforeach (new aaa($start) as $y) {\n    $a=$key;\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
