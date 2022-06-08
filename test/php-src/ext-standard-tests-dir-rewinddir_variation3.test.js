// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/rewinddir_variation3.phpt
  it("Test rewinddir() function : usage variations - file pointers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a file pointer to rewinddir() to test behaviour\n */\necho \"*** Testing rewinddir() : usage variations ***\\n\";\necho \"\\n-- Open a file using fopen --\\n\";\nvar_dump($fp = fopen(__FILE__, 'r'));\n$result1 = fread($fp, 5);\ntry {\n    var_dump(rewinddir($fp));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$result2 = fread($fp, 5);\necho \"\\n-- Check if rewinddir() has repositioned the file pointer --\\n\";\nif ($result1 === $result2) {\n    echo \"rewinddir() works on file pointers\\n\";\n} else {\n    echo \"rewinddir() does not work on file pointers\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
