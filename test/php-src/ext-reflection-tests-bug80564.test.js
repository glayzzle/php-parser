// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug80564.phpt
  it("Bug #80564: ReflectionProperty::__toString() renders current value, not default value", function () {
    expect(parser.parseCode("<?php\nclass A {\n\tpublic static $x = 'default';\n}\nA::$x = new stdClass;\n$rp = new ReflectionProperty('A', 'x');\necho $rp;\n?>")).toMatchSnapshot();
  });
});
