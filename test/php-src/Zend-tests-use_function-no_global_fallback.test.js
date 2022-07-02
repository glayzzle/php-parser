// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/no_global_fallback.phpt
  it("non-existent imported functions should not be looked up in the global table", function () {
    expect(parser.parseCode("<?php\nrequire 'includes/global_baz.inc';\nuse function foo\\bar\\baz;\nvar_dump(baz());\n?>")).toMatchSnapshot();
  });
});
