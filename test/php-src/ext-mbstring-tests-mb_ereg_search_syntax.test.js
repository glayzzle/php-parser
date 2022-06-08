// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_syntax.phpt
  it("Specifying non-default syntax in mb_ereg_search()", function () {
    expect(parser.parseCode("<?php\nmb_ereg_search_init(\"a\");\nvar_dump(mb_ereg_search(\"a\\\\{1,2\\\\}\", \"b\"));\n?>")).toMatchSnapshot();
  });
});
