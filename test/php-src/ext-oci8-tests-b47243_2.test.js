// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/b47243_2.phpt
  it("Bug #47243 (Crash on exit with ZTS mode)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\n$s = oci_parse($c, \"select cursor(select dummy from dual) from dual\");\noci_execute($s);\noci_fetch_all($s, $r);\noci_free_statement($s);\n// no explicit close\n?>\n===DONE===")).toMatchSnapshot();
  });
});
