// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/blacklist.phpt
  it("Blacklist (with glob, quote and comments)", function () {
    expect(parser.parseCode("<?php\n$conf = opcache_get_configuration();\n$conf = $conf['blacklist'];\n$conf[3] = preg_replace(\"!^\\\\Q\".__DIR__.\"\\\\E!\", \"__DIR__\", $conf[3]);\n$conf[4] = preg_replace(\"!^\\\\Q\".__DIR__.\"\\\\E!\", \"__DIR__\", $conf[4]);\nprint_r($conf);\ninclude(\"blacklist.inc\");\n$status = opcache_get_status();\nprint_r(count($status['scripts']));\n?>")).toMatchSnapshot();
  });
});
