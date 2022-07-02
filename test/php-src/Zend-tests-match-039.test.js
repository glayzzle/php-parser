// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/039.phpt
  it("Test match with duplicate conditions", function () {
    expect(parser.parseCode("<?php\n$value = 1;\necho match ($value) {\n    1 => 1,\n    2 => 2,\n    3 => 3,\n    4 => 4,\n    5 => 5,\n    1 => 6,\n};\necho \"\\n\";\necho match ($value) {\n    2, 1 => '2, 1',\n    1 => 1,\n    3 => 3,\n    4 => 4,\n    5 => 5,\n};\necho \"\\n\";\necho match ($value) {\n    1, 1 => '1, 1',\n    2, 2 => '2, 2',\n    3, 3 => '3, 3',\n    4, 4 => '4, 4',\n    5, 5 => '5, 5',\n};\necho \"\\n\";\necho match ($value) {\n    1 => 1,\n    1 => 2,\n};\necho \"\\n\";\necho match ($value) {\n    2, 1 => '2, 1',\n    1 => 1,\n};\necho \"\\n\";\necho match ($value) {\n    1, 1 => '1, 1',\n    1 => 1,\n};\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
