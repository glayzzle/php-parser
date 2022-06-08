// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug72639.phpt
  it("Bug #72639 (Segfault when instantiating class that extends IntlCalendar and adds a property)", function () {
    expect(parser.parseCode("<?php\nclass A extends IntlCalendar {\n    public function __construct() {}\n    private $a;\n}\nvar_dump(new A());\n?>")).toMatchSnapshot();
  });
});
