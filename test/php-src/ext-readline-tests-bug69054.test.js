// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/bug69054.phpt
  it("Bug #69054 (Null dereference in readline_(read|write)_history() without parameters)", function () {
    expect(parser.parseCode("<?php readline_read_history(); ?>\n==DONE==")).toMatchSnapshot();
  });
});
