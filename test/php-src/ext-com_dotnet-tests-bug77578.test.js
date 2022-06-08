// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug77578.phpt
  it("Bug #77578 (Crash when php unload)", function () {
    expect(parser.parseCode("<?php\n// To actually be able to verify the crash during shutdown on Windows, we have\n// to execute a PHP subprocess, and check its exit status.\n$php = PHP_BINARY;\n$ini = php_ini_loaded_file();\n$iniopt = $ini ? \"-c $ini\" : '';\n$command = \"$php $iniopt -d extension=com_dotnet -d com.autoregister_typelib=1 -r \\\"new COM('WbemScripting.SWbemLocator');\\\"\";\nexec($command, $output, $status);\nvar_dump($output, $status);\n?>")).toMatchSnapshot();
  });
});
