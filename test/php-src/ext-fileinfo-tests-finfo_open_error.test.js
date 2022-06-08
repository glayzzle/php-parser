// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_open_error.phpt
  it("Test finfo_open() function : error functionality", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\necho \"*** Testing finfo_open() : error functionality ***\\n\";\nvar_dump( finfo_open( FILEINFO_MIME, 'foobarfile' ) );\nvar_dump( finfo_open( PHP_INT_MAX - 1, $magicFile ) );\ntry {\n    var_dump( finfo_open( 'foobar' ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( new finfo('foobar') );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
