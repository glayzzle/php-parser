// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/closedir_variation2.phpt
  it("Test closedir() function : usage variations - close directory handle twice", function () {
    expect(parser.parseCode("<?php\n/*\n * close the directory handle twice using closedir() to test behaviour\n */\necho \"*** Testing closedir() : usage variations ***\\n\";\n//create temporary directory for test, removed in CLEAN section\n$directory = __DIR__ . \"/closedir_variation2\";\nmkdir($directory);\n$dh = opendir($directory);\necho \"\\n-- Close directory handle first time: --\\n\";\nvar_dump(closedir($dh));\necho \"Directory Handle: \";\nvar_dump($dh);\necho \"\\n-- Close directory handle second time: --\\n\";\ntry {\n    var_dump(closedir($dh));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Directory Handle: \";\nvar_dump($dh);\n?>")).toMatchSnapshot();
  });
});
