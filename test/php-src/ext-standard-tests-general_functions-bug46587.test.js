// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug46587.phpt
  it("Bug #46587 (mt_rand() does not check that max is greater than min).", function () {
    expect(parser.parseCode("<?php\nvar_dump(mt_rand(3,8));\ntry {\n    var_dump(mt_rand(8,3));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
