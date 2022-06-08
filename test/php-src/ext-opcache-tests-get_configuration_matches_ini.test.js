// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/get_configuration_matches_ini.phpt
  it("Test that the directives listed with `opcache_get_configuration` include all those from the ini settings.", function () {
    expect(parser.parseCode("<?php\n$opts = opcache_get_configuration()['directives'];\n$inis = ini_get_all('zend opcache');\nvar_dump(array_diff_key($inis, $opts));\n?>")).toMatchSnapshot();
  });
});
