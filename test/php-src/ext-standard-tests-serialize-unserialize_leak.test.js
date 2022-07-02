// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_leak.phpt
  it("Unserialize leak in SplObjectStorage", function () {
    expect(parser.parseCode("<?php\n$payload = 'C:16:\"SplObjectStorage\":113:{x:i:2;O:8:\"stdClass\":1:{},a:2:{s:4:\"prev\";i:2;s:4:\"next\";O:8:\"stdClass\":0:{}};r:7;,R:2;s:4:\"next\";;r:3;};m:a:0:{}}';\ntry {\n    var_dump(unserialize($payload));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
