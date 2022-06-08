// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug49056.phpt
  it("Bug #49056 (parse_ini_*() regression in 5.3.0 when using non-ASCII strings as option keys)", function () {
    expect(parser.parseCode("<?php\n$string = <<<EOT\nCooking_furniture=\"KÃ¼chen MÃ¶bel (en)\"\nKÃ¼chen_MÃ¶bel=\"Cooking furniture (en)\"\nEOT;\n$filename = __DIR__ . '/bug49056.tmp';\nfile_put_contents( $filename, $string);\nvar_dump(parse_ini_file($filename));\n?>")).toMatchSnapshot();
  });
});
