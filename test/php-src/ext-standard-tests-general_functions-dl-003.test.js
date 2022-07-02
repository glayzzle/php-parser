// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/dl-003.phpt
  it("dl(): Loaded extensions support ini_set()", function () {
    expect(parser.parseCode("<?php\nif (extension_loaded('dl_test')) {\n    exit('Error: dl_test is already loaded');\n}\nif (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {\n    $loaded = dl('php_dl_test.dll');\n} else {\n    $loaded = dl('dl_test.so');\n}\nvar_dump($loaded);\ndl_test_test1();\nvar_dump(dl_test_test2(\"World!\"));\nini_set(\"dl_test.long\", \"1\");\nini_set(\"dl_test.string\", \"world\");\nvar_dump(ini_get(\"dl_test.long\"));\nvar_dump(ini_get(\"dl_test.string\"));\necho \"OK\\n\";")).toMatchSnapshot();
  });
});
