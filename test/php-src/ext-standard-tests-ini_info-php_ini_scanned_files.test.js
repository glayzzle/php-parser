// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/ini_info/php_ini_scanned_files.phpt
  it("php_ini_scanned_files() function", function () {
    expect(parser.parseCode("<?php\n    $inifile = __DIR__.DIRECTORY_SEPARATOR.'loaded.ini';\n    $php = sprintf('\"%s\" -c \"%s\"', getenv('TEST_PHP_EXECUTABLE'), $inifile);\n    $scandir = __DIR__.DIRECTORY_SEPARATOR.'scandir';\n    // Empty env value disables any config option\n    putenv('PHP_INI_SCAN_DIR=');\n    passthru($php.' -r \"var_dump(php_ini_scanned_files());\"');\n    // Env value without path separator overrides any config option\n    putenv('PHP_INI_SCAN_DIR='.$scandir);\n    passthru($php.' -r \"var_dump(php_ini_scanned_files());\"');\n    // Scanned ini values override previously loaded values\n    passthru($php.' -r \"var_dump(ini_get(\\'date.timezone\\'));\"');\n?>")).toMatchSnapshot();
  });
});
