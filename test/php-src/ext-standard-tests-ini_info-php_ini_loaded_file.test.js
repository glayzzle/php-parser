// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/ini_info/php_ini_loaded_file.phpt
  it("php_ini_loaded_file() function", function () {
    expect(parser.parseCode("<?php\n    $inifile = __DIR__.DIRECTORY_SEPARATOR.'loaded.ini';\n    $php = '\"'.getenv('TEST_PHP_EXECUTABLE').'\"';\n    $code = '\"var_dump(php_ini_loaded_file());\"';\n    // No ini file\n    passthru($php.' -n -r '.$code);\n    // Specified ini file\n    passthru($php.' -c \"'.$inifile.'\" -r '.$code);\n?>")).toMatchSnapshot();
  });
});
