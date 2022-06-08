// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_pad.phpt
  it("array_pad() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_pad(array(), 1, 0));\nvar_dump(array_pad(array(), 0, 0));\nvar_dump(array_pad(array(), -1, 0));\nvar_dump(array_pad(array(\"\", -1, 2.0), 5, 0));\nvar_dump(array_pad(array(\"\", -1, 2.0), 5, array()));\nvar_dump(array_pad(array(\"\", -1, 2.0), 2, array()));\nvar_dump(array_pad(array(\"\", -1, 2.0), -3, array()));\nvar_dump(array_pad(array(\"\", -1, 2.0), -4, array()));\ntry {\n    var_dump(array_pad(array(\"\", -1, 2.0), 2000000, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
