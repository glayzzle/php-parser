// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc.phpt
  it("basic array_diff_assoc test", function () {
    expect(parser.parseCode("<?php\n$array1 = array(\"a\" => \"green\", \"b\" => \"brown\", \"c\" => \"blue\", \"red\", \"\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\", TRUE);\n$array3 = array(\"red\", \"a\"=>\"brown\", \"\");\n$result[] = array_diff_assoc($array1, $array2);\n$result[] = array_diff_assoc($array1, $array3);\n$result[] = array_diff_assoc($array2, $array3);\n$result[] = array_diff_assoc($array1, $array2, $array3);\nprint_r($result)\n?>")).toMatchSnapshot();
  });
});
