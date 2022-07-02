// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chmod_variation2-win32-mb.phpt
  it("chmod() with various paths", function () {
    expect(parser.parseCode("<?php\ndefine(\"PERMISSIONS_MASK\", 0777);\n$script_directory = __DIR__;\nchdir($script_directory);\n$test_dirname = basename(__FILE__, \".php\") . \"testdir私はガラスを食べられます\";\nmkdir($test_dirname);\n$filepath = __FILE__ . \".tmp\";\n$filename = basename($filepath);\n$fd = fopen($filepath, \"w+\");\nfclose($fd);\necho \"chmod() on a path containing .. and .\\n\";\nvar_dump(chmod(\"./$test_dirname/../$filename\", 0777));\nvar_dump(chmod(\"./$test_dirname/../$filename\", 0755));\nclearstatcache();\nprintf(\"%o\\n\", fileperms($filepath) & PERMISSIONS_MASK);\necho \"\\nchmod() on a path containing .. with invalid directories\\n\";\nvar_dump(chmod($filepath, 0777));\nvar_dump(chmod(\"./$test_dirname/bad_dir/../../$filename\", 0755));\nclearstatcache();\nprintf(\"%o\\n\", fileperms($filepath) & PERMISSIONS_MASK);\necho \"\\nchmod() on a relative path from a different working directory\\n\";\nchdir($test_dirname);\nvar_dump(chmod(\"../$filename\", 0777));\nvar_dump(chmod(\"../$filename\", 0755));\nclearstatcache();\nprintf(\"%o\\n\", fileperms($filepath) & PERMISSIONS_MASK);\nchdir($script_directory);\necho \"\\nchmod() on a directory with a trailing /\\n\";\nvar_dump(chmod($test_dirname, 0777));\nvar_dump(chmod(\"$test_dirname/\", 0775));\nclearstatcache();\nprintf(\"%o\\n\", fileperms($filepath) & PERMISSIONS_MASK);\nchdir($script_directory);\nrmdir($test_dirname);\nunlink($filepath);\n?>")).toMatchSnapshot();
  });
});
