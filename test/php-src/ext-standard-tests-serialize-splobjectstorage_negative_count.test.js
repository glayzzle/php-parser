// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/splobjectstorage_negative_count.phpt
  it("OSS-Fuzz: Unserializing SplObjectStorage with negative number of elements", function () {
    expect(parser.parseCode("<?php\n$str = 'C:16:\"SplObjectStorage\":25:{x:i:-9223372036854775808;}';\ntry {\n    var_dump(unserialize($str));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
