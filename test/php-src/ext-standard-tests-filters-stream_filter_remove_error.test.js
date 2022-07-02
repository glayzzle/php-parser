// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/stream_filter_remove_error.phpt
  it("Test stream_filter_remove() function : error conditions", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . DIRECTORY_SEPARATOR . 'streamfilterTest.txt';\ntouch( $file );\n$fp = fopen( $file, 'w+' );\n$filter = stream_filter_append( $fp, \"string.rot13\", STREAM_FILTER_WRITE );\necho \"*** Testing stream_filter_remove() : error conditions ***\\n\";\necho \"\\n-- Testing stream_filter_remove() function with bad resource --\\n\";\ntry {\n    stream_filter_remove($fp);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing stream_filter_remove() function with an already removed filter --\\n\";\n// Double remove it\nvar_dump(stream_filter_remove( $filter ));\ntry {\n    stream_filter_remove($filter);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
