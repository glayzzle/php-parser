// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_encoding_aliases.phpt
  it("mb_encoding_aliases()", function () {
    expect(parser.parseCode("<?php\n$list = mb_encoding_aliases(\"ASCII\");\nsort($list);\nvar_dump($list);\nvar_dump(mb_encoding_aliases(\"7bit\"));\nvar_dump(mb_encoding_aliases(\"8bit\"));\ntry {\n    var_dump(mb_encoding_aliases(\"BAD\"));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
