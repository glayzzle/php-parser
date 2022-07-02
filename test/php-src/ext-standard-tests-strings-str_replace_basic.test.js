// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_replace_basic.phpt
  it("Test str_replace() function basic function", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing str_replace() on basic operations ***\\n\";\nvar_dump( str_replace(\"\", \"\", \"\") );\nvar_dump( str_replace(\"e\", \"b\", \"test\") );\nvar_dump( str_replace(\"\", \"\", \"\", $count) );\nvar_dump( $count );\nvar_dump( str_replace(\"q\", \"q\", \"q\", $count) );\nvar_dump( $count );\nvar_dump( str_replace(\"long string here\", \"\", \"\", $count) );\nvar_dump( $count );\n$fp = fopen( __FILE__, \"r\" );\n$fp_copy = $fp;\ntry {\n    var_dump( str_replace($fp_copy, $fp_copy, $fp_copy, $fp_copy) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump( $fp_copy );\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
