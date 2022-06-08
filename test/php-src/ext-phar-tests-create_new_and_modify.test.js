// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/create_new_and_modify.phpt
  it("Phar: create and modify phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n@unlink($fname);\nfile_put_contents($pname . '/a.php', \"brand new!\\n\");\n$phar = new Phar($fname);\n$sig1 = $phar->getSignature();\ninclude $pname . '/a.php';\nif (function_exists(\"opcache_get_status\")) {\n    $status = opcache_get_status();\n    if (is_array($status) && ($status[\"opcache_enabled\"] || (isset($status[\"file_cache_only\"]) && $status[\"file_cache_only\"]))) {\n        opcache_invalidate($pname . '/a.php', true);\n        // opcache_invalidate is buggy and doesn't work as expected so we add a\n        // minor delay here.\n        sleep(2);\n    }\n}\nfile_put_contents($pname .'/a.php', \"modified!\\n\");\nfile_put_contents($pname .'/b.php', \"another!\\n\");\n$phar = new Phar($fname);\n$sig2 = $phar->getSignature();\nvar_dump($sig1['hash']);\nvar_dump($sig2['hash']);\nvar_dump($sig1['hash'] != $sig2['hash']);\ninclude $pname . '/a.php';\ninclude $pname . '/b.php';\n?>")).toMatchSnapshot();
  });
});
