// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug79665.phpt
  it("Bug #79665 (ini_get() and opcache_get_configuration() may be inconsistent)", function () {
    expect(parser.parseCode("<?php\n$config = opcache_get_configuration();\nvar_dump(ini_get('opcache.max_wasted_percentage'));\nvar_dump($config['directives']['opcache.max_wasted_percentage']);\nvar_dump(ini_get('opcache.memory_consumption'));\nvar_dump($config['directives']['opcache.memory_consumption']);\nvar_dump(ini_get('opcache.max_accelerated_files'));\nvar_dump($config['directives']['opcache.max_accelerated_files']);\n?>")).toMatchSnapshot();
  });
});
