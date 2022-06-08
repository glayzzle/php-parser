// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_bug71103.phpt
  it("Bug #71103 file_exists and is_readable fail silently", function () {
    expect(parser.parseCode("<?php\n$base = __DIR__;\n$d = $base . '\\\\dev\\\\http\\\\tproj\\\\app\\\\cache\\\\dev_old\\\\annotations\\\\72';\n$foo = $d . '\\\\5b53796d666f6e795c42756e646c655c5477696742756e646c655c436f6e74726f6c6c65725c457863657074696f6e436f6e74726f6c6c657223676574416e64436c65616e4f7574707574427566666572696e67405b416e6e6f745d5d5b.doctrinecache.data';\n$bar = $d . '\\\\5b53796d666f6e795c42756e646c655c5477696742756e646c655c436f6e74726f6c6c65725c457863657074696f6e436f6e74726f6c6c657223676574416e64436c65616e4f7574707574427566666572696e67405b416e6e6f745d5d5b315d.doctrinecache.data';\nmkdir($d, 0777, true);\nforeach (array($foo, $bar) as $f) {\n    touch($f);\n    $foo_obj = new \\SplFileInfo($f);\n    var_dump(\n        $f,\n        strlen($f) > 260, /* exceeds _MAX_PATH */\n        file_exists($f),\n        file_exists($foo_obj),\n        is_readable($f),\n        is_readable($foo_obj),\n        is_writable($f),\n        is_writable($foo_obj)\n    );\n    unlink($f);\n}\n$p = $d;\ndo {\n    rmdir($p);\n    $p = dirname($p);\n} while ($p != $base);\n?>")).toMatchSnapshot();
  });
});
