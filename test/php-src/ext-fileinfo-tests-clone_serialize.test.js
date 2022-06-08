// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/clone_serialize.phpt
  it("Cloning and serializing finfo is not supported", function () {
    expect(parser.parseCode("<?php\n$finfo = new finfo;\nvar_dump($finfo->buffer(\"Test string\"));\ntry {\n    $finfo2 = clone $finfo;\n    var_dump($finfo2->buffer(\"Test string\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $finfo3 = unserialize(serialize($finfo));\n    var_dump($finfo3->buffer(\"Test string\"));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
