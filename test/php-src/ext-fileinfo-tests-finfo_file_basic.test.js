// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_file_basic.phpt
  it("Test finfo_file() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\n$finfo = finfo_open( FILEINFO_MIME );\necho \"*** Testing finfo_file() : basic functionality ***\\n\";\n// Calling finfo_file() with all possible arguments\nvar_dump( finfo_file( $finfo, __FILE__) );\nvar_dump( finfo_file( $finfo, __FILE__, FILEINFO_CONTINUE ) );\nvar_dump( finfo_file( $finfo, $magicFile ) );\ntry {\n    var_dump( finfo_file( $finfo, $magicFile.chr(0).$magicFile) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
