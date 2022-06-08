// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/offsets_general.phpt
  it("testing the behavior of string offsets", function () {
    expect(parser.parseCode("<?php\n$string = \"foobar\";\nconst FOO = \"BAR\"[0];\nvar_dump(FOO);\nvar_dump($string[0]);\nvar_dump($string[1]);\nvar_dump(isset($string[0]));\nvar_dump(isset($string[0][0]));\ntry {\n    var_dump($string[\"foo\"]);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(isset($string[\"foo\"][\"bar\"]));\n?>")).toMatchSnapshot();
  });
});
