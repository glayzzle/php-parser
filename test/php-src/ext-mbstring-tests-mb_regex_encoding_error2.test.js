// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_regex_encoding_error2.phpt
  it("Test mb_regex_encoding() function : error conditions - Pass an unknown encoding", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass mb_regex_encoding an unknown type of encoding\n */\necho \"*** Testing mb_regex_encoding() : error conditions ***\\n\";\ntry {\n    var_dump(mb_regex_encoding('unknown'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
