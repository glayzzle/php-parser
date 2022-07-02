// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_abstract_class.phpt
  it("Unserializing an abstract class should fail", function () {
    expect(parser.parseCode("<?php\n$payload = 'O:23:\"RecursiveFilterIterator\":0:{}';\ntry {\n    var_dump(unserialize($payload));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
