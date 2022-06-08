// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/gh8466.phpt
  it("Bug GH-8466: ini_get() is optimized out when the option does not exist during compilation", function () {
    expect(parser.parseCode("<?php\nif (extension_loaded('dl_test')) {\n    exit('Error: dl_test is already loaded');\n}\nif (PHP_OS_FAMILY === 'Windows') {\n    $loaded = dl('php_dl_test.dll');\n} else {\n    $loaded = dl('dl_test.so');\n}\nvar_dump($loaded);\nvar_dump(ini_get('dl_test.long'));")).toMatchSnapshot();
  });
});
