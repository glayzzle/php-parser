// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_splice_basic.phpt
  it("Test array_splice(): basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/array.c\n*/\necho \"*** Testing array_splice() basic operations ***\\n\";\necho \"test truncation \\n\";\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, 2));\nvar_dump ($input);\n// $input is now array(\"red\", \"green\")\necho \"test truncation with null length \\n\";\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, 2, null));\nvar_dump ($input);\n// $input is now array(\"red\", \"green\")\necho \"test removing entries from the middle \\n\";\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, 1, -1));\nvar_dump ($input);\n// $input is now array(\"red\", \"yellow\")\necho \"test substitution at end \\n\";\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, 1, count($input), \"orange\"));\nvar_dump ($input);\n// $input is now array(\"red\", \"orange\")\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, -1, 1, array(\"black\", \"maroon\")));\nvar_dump ($input);\n// $input is now array(\"red\", \"green\",\n//          \"blue\", \"black\", \"maroon\")\necho \"test insertion \\n\";\n$input = array(\"red\", \"green\", \"blue\", \"yellow\");\nvar_dump (array_splice($input, 3, 0, \"purple\"));\nvar_dump ($input);\n// $input is now array(\"red\", \"green\",\n//          \"blue\", \"purple\", \"yellow\");\n?>")).toMatchSnapshot();
  });
});
