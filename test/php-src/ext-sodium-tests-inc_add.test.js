// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/inc_add.phpt
  it("increment and add edge cases", function () {
    expect(parser.parseCode("<?php\n$notStr = 123;\ntry {\n    sodium_increment($notStr);\n} catch (SodiumException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$str = \"abc\";\n$str2 = $str;\nsodium_increment($str);\nvar_dump($str, $str2);\n$str = \"ab\" . ($x = \"c\");\n$str2 = $str;\nsodium_increment($str);\nvar_dump($str, $str2);\n$addStr = \"\\2\\0\\0\";\n$notStr = 123;\ntry {\n    sodium_add($notStr, $addStr);\n} catch (SodiumException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$str = \"abc\";\n$str2 = $str;\nsodium_add($str, $addStr);\nvar_dump($str, $str2);\n$str = \"ab\" . ($x = \"c\");\n$str2 = $str;\nsodium_add($str, $addStr);\nvar_dump($str, $str2);\n?>")).toMatchSnapshot();
  });
});
