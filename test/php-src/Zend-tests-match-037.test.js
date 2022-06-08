// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/037.phpt
  it("Test match jumptable with only one arm", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(match(true) {\n        1, 2, 3, 4, 5 => 'foo',\n    });\n} catch (Error $e) {\n    var_dump((string) $e);\n}\ntry {\n    var_dump(match(6) {\n        1, 2, 3, 4, 5 => 'foo',\n    });\n} catch (Error $e) {\n    var_dump((string) $e);\n}\ntry {\n    var_dump(match('3') {\n        1, 2, 3, 4, 5 => 'foo',\n    });\n} catch (Error $e) {\n    var_dump((string) $e);\n}\nvar_dump(match(3) {\n    1, 2, 3, 4, 5 => 'foo',\n});\nvar_dump(match(true) {\n    1, 2, 3, 4, 5 => 'foo',\n    default => 'bar',\n});\nvar_dump(match(6) {\n    1, 2, 3, 4, 5 => 'foo',\n    default => 'bar',\n});\nvar_dump(match('3') {\n    1, 2, 3, 4, 5 => 'foo',\n    default => 'bar',\n});\nvar_dump(match(3) {\n    1, 2, 3, 4, 5 => 'foo',\n    default => 'bar',\n});\n?>")).toMatchSnapshot();
  });
});
