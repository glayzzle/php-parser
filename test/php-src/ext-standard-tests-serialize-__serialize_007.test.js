// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_007.phpt
  it("No packed -> mixed reallocation while populating __unserialize() array", function () {
    expect(parser.parseCode("<?php\n$payload = 'O:13:\"ArrayIterator\":2:{i:0;i:0;s:1:\"x\";R:2;}';\ntry {\n    var_dump(unserialize($payload));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
