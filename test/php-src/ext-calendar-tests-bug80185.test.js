// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/bug80185.phpt
  it("Bug #80185 (jdtounix() fails after 2037)", function () {
    expect(parser.parseCode("<?php\nvar_dump(jdtounix(2465712));\nvar_dump(jdtounix((int)(PHP_INT_MAX / 86400 + 2440588)));\ntry {\n    var_dump(jdtounix((int)(PHP_INT_MAX / 86400 + 2440589)));\n} catch (ValueError $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
