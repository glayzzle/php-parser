// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation9.phpt
  it("Test array_filter() function : usage variations - built-in functions as 'callback' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Passing built-in functions and different language constructs as 'callback' argument\n*/\necho \"*** Testing array_filter() : usage variations - built-in functions as 'callback' argument ***\\n\";\n$input = array(0, 1, -1, 10, 100, 1000);\n// using built-in function 'is_int' as 'callback'\nvar_dump( array_filter($input, 'is_int') );\n// using built-in function 'chr' as 'callback'\nvar_dump( array_filter($input, 'chr') );\n// using language construct 'echo' as 'callback'\ntry {\n    var_dump( array_filter($input, 'echo') );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// using language construct 'exit' as 'callback'\ntry {\n    var_dump( array_filter($input, 'exit') );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
