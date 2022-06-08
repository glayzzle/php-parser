// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug22414.phpt
  it("Bug #22414 (passthru() does not read data correctly)", function () {
    expect(parser.parseCode("<?php\n    $php = getenv('TEST_PHP_EXECUTABLE');\n    $tmpfile = tempnam(__DIR__, 'phpt');\n    $args = ' -n ';\n    /* Regular Data Test */\n    passthru($php . $args . ' -r \" echo \\\"HELLO\\\"; \"');\n    echo \"\\n\";\n    /* Binary Data Test */\n    if (substr(PHP_OS, 0, 3) != 'WIN') {\n        $cmd = $php . $args . ' -r \\\"readfile(@getenv(\\'\\\\\\'\\'TEST_PHP_EXECUTABLE\\'\\\\\\'\\')); \\\"';\n        $cmd = $php . $args . ' -r \\' passthru(\"'.$cmd.'\"); \\' > '.$tmpfile ;\n    } else {\n        $cmd = $php . $args . ' -r \\\"readfile(@getenv(\\\\\\\\\\\\\"TEST_PHP_EXECUTABLE\\\\\\\\\\\\\")); \\\"';\n        $cmd = $php . $args . ' -r \" passthru(\\''.$cmd.'\\');\" > '.$tmpfile ;\n    }\n    exec($cmd);\n    if (md5_file($php) == md5_file($tmpfile)) {\n        echo \"Works\\n\";\n    } else {\n        echo \"Does not work\\n\";\n    }\n    @unlink($tmpfile);\n?>")).toMatchSnapshot();
  });
});
