// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir_rmdir_variation2.phpt
  it("Test mkdir() and rmdir() functions: usage variations - misc.", function () {
    expect(parser.parseCode("<?php\n$context = stream_context_create();\n$file_path = __DIR__;\necho \"\\n*** Testing mkdir() and rmdir() by giving stream context as fourth argument ***\\n\";\nvar_dump( mkdir(\"$file_path/mkdir_variation2/test/\", 0777, true, $context) );\nvar_dump( rmdir(\"$file_path/mkdir_variation2/test/\", $context) );\necho \"\\n*** Testing rmdir() on a non-empty directory ***\\n\";\nvar_dump( mkdir(\"$file_path/mkdir_variation2/test/\", 0777, true) );\nvar_dump( rmdir(\"$file_path/mkdir_variation2/\") );\necho \"\\n*** Testing mkdir() and rmdir() for binary safe functionality ***\\n\";\ntry {\n    var_dump( mkdir(\"$file_path/temp\".chr(0).\"/\") );\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( rmdir(\"$file_path/temp\".chr(0).\"/\") );\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n*** Testing mkdir() with miscellaneous input ***\\n\";\n/* changing mode of mkdir to prevent creating sub-directory under it */\nvar_dump( chmod(\"$file_path/mkdir_variation2/\", 0000) );\n/* creating sub-directory test1 under mkdir, expected: false */\nvar_dump( mkdir(\"$file_path/mkdir_variation2/test1\", 0777, true) );\nvar_dump( chmod(\"$file_path/mkdir_variation2/\", 0777) );  // chmod to enable removing test1 directory\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
