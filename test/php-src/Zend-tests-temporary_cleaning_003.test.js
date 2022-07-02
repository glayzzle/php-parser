// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_003.phpt
  it("Fundamental memory leak test on temporaries", function () {
    expect(parser.parseCode("<?php\nfunction ops() {\n    throw new Exception();\n}\ntry{\n    $x = 1;\n    $r = [$x] + ops();\n} catch (Exception $e) {\n}\n?>\n==DONE==")).toMatchSnapshot();
  });
});
