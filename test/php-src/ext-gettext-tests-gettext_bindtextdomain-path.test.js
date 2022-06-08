// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_bindtextdomain-path.phpt
  it("Test if bindtextdomain() returns false if path does not exist.", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\nvar_dump(bindtextdomain('example.org', 'foobar'));\n?>")).toMatchSnapshot();
  });
});
