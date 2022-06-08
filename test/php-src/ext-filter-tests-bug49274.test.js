// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug49274.phpt
  it("#49274, fatal error when an object does not implement toString", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(new stdClass, FILTER_VALIDATE_EMAIL));\n?>")).toMatchSnapshot();
  });
});
