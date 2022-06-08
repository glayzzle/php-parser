// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_offsetGet_missing_object.phpt
  it("Check that SplObjectStorage::offsetGet throws exception when non-existing object is requested", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\n$o1 = new stdClass();\ntry {\n    $s->offsetGet($o1);\n} catch (UnexpectedValueException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
