// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug36988.phpt
  it("Bug #36988 (mktime freezes on long numbers)", function () {
    expect(parser.parseCode("<?php\ndate_default_timezone_set('GMT');\n$start = microtime(true);\ntry {\n    $a = mktime(1, 1, 1, 1, 1, 11111111111);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
