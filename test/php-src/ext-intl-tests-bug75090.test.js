// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug75090.phpt
  it("Bug #75090 Constants of parent IntlCalendar class not inherited", function () {
    expect(parser.parseCode("<?php\nclass Foo extends IntlCalendar {}\n$fooRef = new ReflectionClass(Foo::class);\n$intlGregorianCalendarRef = new ReflectionClass(IntlGregorianCalendar::class);\n$intlCalendarRef = new ReflectionClass(IntlCalendar::class);\nvar_dump(\n    count($fooRef->getConstants()) === count($intlCalendarRef->getConstants()),\n    count($intlGregorianCalendarRef->getConstants()) === count($intlCalendarRef->getConstants())\n);\n?>")).toMatchSnapshot();
  });
});
