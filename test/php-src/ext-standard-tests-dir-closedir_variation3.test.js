// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/closedir_variation3.phpt
  it("Test closedir() function : usage variations - close a file pointer", function () {
    expect(parser.parseCode("<?php\n/*\n * Create a file pointer using fopen() then try to close it using closedir()\n */\necho \"*** Testing closedir() : usage variations ***\\n\";\necho \"\\n-- Open a file using fopen() --\\n\";\nvar_dump($fp = fopen(__FILE__, 'r'));\necho \"\\n-- Try to close the file pointer using closedir() --\\n\";\ntry {\n    var_dump(closedir($fp));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Check file pointer: --\\n\";\nvar_dump($fp);\nif(is_resource($fp)) {\n    fclose($fp);\n}\n?>")).toMatchSnapshot();
  });
});
