// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strrchr_error2.phpt
  it("Test mb_strrchr() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_strrchr() : error conditions ***\\n\";\necho \"\\n-- Testing mb_strrchr() with unknown encoding --\\n\";\n$haystack = 'Hello, world';\n$needle = 'world';\n$encoding = 'unknown-encoding';\n$part = true;\ntry {\n    var_dump( mb_strrchr($haystack, $needle, $part, $encoding) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
