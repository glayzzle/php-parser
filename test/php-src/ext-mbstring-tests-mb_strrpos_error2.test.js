// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_strrpos_error2.phpt
  it("Test mb_strrpos() function : error conditions - pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass mb_strrpos() an encoding that doesn't exist\n */\necho \"*** Testing mb_strrpos() : error conditions ***\\n\";\n$haystack = 'This is an English string. 0123456789.';\n$needle = '123';\n$offset = 5;\n$encoding = 'unknown-encoding';\ntry {\n    var_dump(mb_strrpos($haystack, $needle , $offset, $encoding));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
