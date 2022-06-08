// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug80719.phpt
  it("Bug #80719: Iterating after failed ArrayObject::setIteratorClass() causes Segmentation fault", function () {
    expect(parser.parseCode("<?php\n$array = new ArrayObject([42]);\ntry {\n    $array->setIteratorClass(FilterIterator::class);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nforeach ($array as $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
