// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug79432.phpt
  it("Bug #79432 (spl_autoload_call() with non-string argument violates assertion)", function () {
    expect(parser.parseCode("<?php\ntry {\n    spl_autoload_call([]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
