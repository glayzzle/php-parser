// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_error.phpt
  it("Test readfile() function: error conditions", function () {
    expect(parser.parseCode("<?php\n$context = stream_context_create();\necho \"*** Test readfile(): error conditions ***\\n\";\necho \"\\n-- Testing readfile() with invalid arguments --\\n\";\n// invalid arguments\ntry {\n    var_dump( readfile('') );  // empty string as $filename\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( readfile(false) );  // boolean false as $filename\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"\\n-- Testing readfile() with non-existent file --\\n\";\n$non_existent_file = __DIR__.\"/non_existent_file.tmp\";\nvar_dump( readfile($non_existent_file) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
