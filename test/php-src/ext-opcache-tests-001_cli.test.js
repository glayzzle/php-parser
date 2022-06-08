// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/001_cli.phpt
  it("001: O+ works in CLI", function () {
    expect(parser.parseCode("<?php\n$config = opcache_get_configuration();\n$status = opcache_get_status();\nvar_dump($config[\"directives\"][\"opcache.enable\"]);\nvar_dump($config[\"directives\"][\"opcache.enable_cli\"]);\nvar_dump($status[\"opcache_enabled\"]);\n?>")).toMatchSnapshot();
  });
});
