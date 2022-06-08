// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/no_global_fallback.phpt
  it("non-existent imported constants should not be looked up in the global table", function () {
    expect(parser.parseCode("<?php\nrequire 'includes/global_baz.inc';\nuse const foo\\bar\\baz;\nvar_dump(baz);\n?>")).toMatchSnapshot();
  });
});
