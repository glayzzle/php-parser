// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_overloaded_object_incompatible.phpt
  it("Objects with overloaded get_properties are incompatible with ArrayObject", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject([1, 2, 3]);\ntry {\n    $ao->exchangeArray(new SplFixedArray);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
