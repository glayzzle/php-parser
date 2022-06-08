// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug66872.phpt
  it("Bug #66872: Crash when passing string to gmp_testbit", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_testbit(\"abc\", 1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
