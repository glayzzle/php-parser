// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/003.phpt
  it("bzread() tests", function () {
    expect(parser.parseCode("<?php\n$fd = bzopen(__DIR__.\"/003.txt.bz2\",\"r\");\nvar_dump(bzread($fd, 0));\ntry {\n    var_dump(bzread($fd, -10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(bzread($fd, 1));\nvar_dump(bzread($fd, 2));\nvar_dump(bzread($fd, 100000));\n?>")).toMatchSnapshot();
  });
});
