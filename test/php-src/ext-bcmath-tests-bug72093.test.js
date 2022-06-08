// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug72093.phpt
  it("Bug 72093: bcpowmod fails on negative scale and corrupts _one_ definition", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpowmod(1, 0, 128, -200));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bcpowmod(1, 1.2, 1, 1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
