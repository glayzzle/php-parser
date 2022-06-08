// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug659967.phpt
  it("Bug #65997: Leak when using gc_collect_cycles with new GMP implementation", function () {
    expect(parser.parseCode("<?php\ngc_enable();\n$gmp = gmp_init('10');\ngc_collect_cycles();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
