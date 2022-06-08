// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/gh8364.phpt
  it("Bug GH-8364 (msgfmt_format $values may not support references)", function () {
    expect(parser.parseCode("<?php\n$formatter = new MessageFormatter('en', 'translate {0}');\n$args = ['string', 'string'];\nforeach ($args as &$arg) {\n//     do nothing;\n}\n$result = $formatter->format($args);\nvar_dump($result);\nvar_dump(intl_get_error_code());\n?>")).toMatchSnapshot();
  });
});
