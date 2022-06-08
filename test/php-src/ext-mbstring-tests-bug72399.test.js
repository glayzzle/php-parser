// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72399.phpt
  it("Bug #72399 (Use-After-Free in MBString (search_re))", function () {
    expect(parser.parseCode("<?php\n$var5 = mb_ereg_search_init(\"\",\"2\");\nvar_dump($var5);\n$var6 = mb_eregi_replace(\"2\",\"\",\"\");\nvar_dump($var6);\ntry {\n    $var13 = mb_ereg_search_pos();\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
