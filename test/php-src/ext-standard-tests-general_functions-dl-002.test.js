// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/dl-002.phpt
  it("dl(): Extensions compiled against zend_register_ini_entries() are supported", function () {
    expect(parser.parseCode("<?php\nif (extension_loaded('dl_test')) {\n    exit('Error: dl_test is already loaded');\n}\nif (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {\n    $loaded = dl('php_dl_test.dll');\n} else {\n    $loaded = dl('dl_test.so');\n}\nvar_dump($loaded);\ndl_test_test1();\nvar_dump(dl_test_test2(\"World!\"));\nvar_dump(ini_get(\"dl_test.long\"));\nvar_dump(ini_get(\"dl_test.string\"));\necho \"OK\\n\";")).toMatchSnapshot();
  });
});
