// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug72164.phpt
  it("Bug #72164 (Null Pointer Dereference - mb_ereg_replace)", function () {
    expect(parser.parseCode("<?php\n$var0 = \"e\";\n$var2 = \"\";\n$var3 = \"\";\ntry {\n    $var8 = mb_ereg_replace($var2,$var3,$var3,$var0);\n    var_dump($var8);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
