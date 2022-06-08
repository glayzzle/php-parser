// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_substr_count_error2.phpt
  it("Test mb_substr_count() function : error conditions - pass unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Test behaviour of mb_substr_count() function when passed an unknown encoding\n */\necho \"*** Testing mb_substr_count() : error conditions ***\\n\";\n$haystack = 'Hello, World!';\n$needle = 'Hello';\n$encoding = 'unknown-encoding';\necho \"\\n-- Testing mb_substr_count() function with an unknown encoding --\\n\";\ntry {\n    var_dump(mb_substr_count($haystack, $needle, $encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
