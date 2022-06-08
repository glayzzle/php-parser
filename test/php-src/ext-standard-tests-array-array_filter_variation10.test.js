// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter_variation10.phpt
  it("Test array_filter() function : usage variations - using the array keys inside 'callback'", function () {
    expect(parser.parseCode("<?php\n/*\n* Using array keys as an argument to the 'callback'\n*/\necho \"*** Testing array_filter() : usage variations - using array keys in 'callback' ***\\n\";\n$input = array(0, 1, -1, 10, 100, 1000, 'Hello', null);\n$small = array(123);\nfunction dump($value, $key)\n{\n  echo \"$key = $value\\n\";\n}\nvar_dump( array_filter($input, 'dump', true) );\necho \"*** Testing array_filter() : usage variations - 'callback' filters based on key value ***\\n\";\nfunction dump2($value, $key)\n{\n  return $key > 4;\n}\nvar_dump( array_filter($input, 'dump2', true) );\necho \"*** Testing array_filter() : usage variations - 'callback' expecting second argument ***\\n\";\ntry {\n    var_dump( array_filter($small, 'dump', false) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"*** Testing array_filter() with various use types ***\\n\";\n$mixed = array(1 => 'a', 2 => 'b', 'a' => 1, 'b' => 2);\nvar_dump(array_filter($mixed, 'is_numeric', ARRAY_FILTER_USE_KEY));\nvar_dump(array_filter($mixed, 'is_numeric', 0));\ntry {\n    var_dump(array_filter($mixed, 'is_numeric', ARRAY_FILTER_USE_BOTH));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
