// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_filter.phpt
  it("basic array_filter test", function () {
    expect(parser.parseCode("<?php\nfunction odd($var)\n{\n   return($var & 1);\n}\nfunction even($var)\n{\n   return(!($var & 1));\n}\n$array1 = array(\"a\"=>1, \"b\"=>2, \"c\"=>3, \"d\"=>4, \"e\"=>5);\n$array2 = array(6, 7, 8, 9, 10, 11, 12, 0);\n$array3 = array(TRUE, FALSE, NULL);\necho \"Odd :\\n\";\nvar_dump(array_filter($array1, \"odd\"));\nvar_dump(array_filter($array2, \"odd\"));\nvar_dump(array_filter($array3, \"odd\"));\necho \"Even:\\n\";\nvar_dump(array_filter($array1, \"even\"));\nvar_dump(array_filter($array2, \"even\"));\nvar_dump(array_filter($array3, \"even\"));\nvar_dump(array_filter(array()));\n?>")).toMatchSnapshot();
  });
});
