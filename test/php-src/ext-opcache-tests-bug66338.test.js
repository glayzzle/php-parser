// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug66338.phpt
  it("Bug #66338 (Optimization binding of class constants is not safely opcacheable)", function () {
    expect(parser.parseCode("<?php\n$root  = str_replace('.php', \"\", __FILE__);\n$base  = basename( $root );\nfile_put_contents( \"$root-Officials.inc\", '<?php\n    class Officials { static function getLeader() { return LocalTerms::GOV_LEADER; } }\n    ' );\nfile_put_contents( \"$root-clientUS.php\", '<?php\n    class LocalTerms { const GOV_LEADER = \"Barack Hussein Obama II\"; }\n    require \\''.$root.'-Officials.inc\\';\n    printf( \"The President of the USA is %s\\n\", Officials::getLeader() );\n    ' );\nfile_put_contents( \"$root-clientUK.php\", '<?php\n    class LocalTerms { const GOV_LEADER = \"David William Donald Cameron\"; }\n    require \\''.$root.'-Officials.inc\\';\n    printf( \"The Prime Minister of the UK is %s\\n\", Officials::getLeader() );\n    ' );\ninclude \"php_cli_server.inc\";\n$uri = sprintf(\"http://%s/%s\", PHP_CLI_SERVER_ADDRESS, basename(__FILE__));\n$opt = -1;   # This test works if $opt = 0\nphp_cli_server_start(\"-d opcache.enable=1 -d opcache.enable_cli=1 -d opcache.optimization_level=$opt -d opcache.file_update_protection=0\" );\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/$base-clientUS.php\" );\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/$base-clientUK.php\" );\nunlink(\"$root-Officials.inc\");\nunlink(\"$root-clientUS.php\");\nunlink(\"$root-clientUK.php\");\n?>")).toMatchSnapshot();
  });
});
