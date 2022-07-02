// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/006.phpt
  it("Output buffering tests", function () {
    expect(parser.parseCode("<?php\nob_start();\necho ob_get_level();\necho 'A';\n  ob_start();\n  echo ob_get_level();\n  echo 'B';\n  $b = ob_get_contents();\n  ob_end_clean();\n$a = ob_get_contents();\nob_end_clean();\nvar_dump( $b ); // 2B\nvar_dump( $a ); // 1A\n?>")).toMatchSnapshot();
  });
});
