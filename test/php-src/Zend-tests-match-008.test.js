// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/008.phpt
  it("Match expression multiple conditions per case", function () {
    expect(parser.parseCode("<?php\nfunction is_working_day($day) {\n    return match ($day) {\n        1, 7 => false,\n        2, 3, 4, 5, 6 => true,\n    };\n}\nfor ($i = 1; $i <= 7; $i++) {\n    var_dump(is_working_day($i));\n}\n?>")).toMatchSnapshot();
  });
});
