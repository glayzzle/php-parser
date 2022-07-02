// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_key2.phpt
  it("basic array_diff_key test", function () {
    expect(parser.parseCode("<?php\n$array1 = array(\"a\" => \"green\", \"b\" => \"brown\", \"c\" => \"blue\", \"red\", \"\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\", TRUE);\n$array3 = array(\"red\", \"a\"=>\"brown\", \"\");\n$result[] = array_diff_key($array1, $array2);\n$result[] = array_diff_key($array1, $array3);\n$result[] = array_diff_key($array2, $array3);\n$result[] = array_diff_key($array1, $array2, $array3);\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
