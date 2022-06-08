// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation12.phpt
  it("Test array_map() function : usage variations - built-in function as callback", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing buit-in function as callback function\n */\necho \"*** Testing array_map() : built-in function ***\\n\";\n$array1 = array(1, 2, 3);\n$array2 = array(3, 4, 5);\necho \"-- with built-in function 'pow' and two parameters --\\n\";\nvar_dump( array_map('pow', $array1, $array2));\necho \"-- with built-in function 'pow' and one parameter --\\n\";\ntry {\n    var_dump( array_map('pow', $array1));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"-- with language construct --\\n\";\ntry {\n    var_dump( array_map('echo', $array1));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
