// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/rewinddir_variation2-win32-mb.phpt
  it("Test rewinddir() function : usage variations - operate on a closed directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Open and close a directory handle then call rewinddir() to test behaviour\n */\necho \"*** Testing rewinddir() : usage variations ***\\n\";\n$dir_path = __DIR__ . '/私はガラスを食べられますrewinddir_variation2';\nmkdir($dir_path);\necho \"\\n-- Create the directory handle, read and close the directory --\\n\";\nvar_dump($dir_handle = opendir($dir_path));\nvar_dump(readdir($dir_handle));\nclosedir($dir_handle);\necho \"\\n-- Call to rewinddir() --\\n\";\ntry {\n    var_dump(rewinddir($dir_handle));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
