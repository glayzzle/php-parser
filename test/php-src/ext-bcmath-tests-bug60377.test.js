// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug60377.phpt
  it("bcscale related problem on 64bits platforms", function () {
    expect(parser.parseCode("<?php\ntry {\n    $var48 = bcscale(634314234334311);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$var67 = bcsqrt(0);\n$var414 = bcadd(0,-1,10);\n?>")).toMatchSnapshot();
  });
});
