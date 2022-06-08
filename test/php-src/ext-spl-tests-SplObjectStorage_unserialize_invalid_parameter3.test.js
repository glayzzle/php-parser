// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_unserialize_invalid_parameter3.phpt
  it("Check that SplObjectStorage::unserialize doesn't throws exception when empty string passed", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\ntry {\n    $s->unserialize('');\n} catch(UnexpectedValueException $e) {\n    echo $e->getMessage();\n}\n?>\nDone")).toMatchSnapshot();
  });
});
