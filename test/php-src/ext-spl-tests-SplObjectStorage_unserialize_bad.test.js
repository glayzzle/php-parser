// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_unserialize_bad.phpt
  it("SPL: Test that serialized blob contains unique elements (CVE-2010-2225)", function () {
    expect(parser.parseCode("<?php\n$badblobs = array(\n'x:i:2;i:0;,i:1;;i:0;,i:2;;m:a:0:{}',\n'x:i:3;O:8:\"stdClass\":0:{},O:8:\"stdClass\":0:{};R:2;,i:1;;O:8:\"stdClass\":0:{},r:2;;m:a:0:{}',\n'x:i:3;O:8:\"stdClass\":0:{},O:8:\"stdClass\":0:{};r:2;,i:1;;O:8:\"stdClass\":0:{},r:2;;m:a:0:{}',\n'x:i:1;O:8:\"stdClass\":0:{},N;;m:s:40:\"1234567890123456789012345678901234567890\"',\n);\nforeach($badblobs as $blob) {\ntry {\n  $so = new SplObjectStorage();\n  $so->unserialize($blob);\n  var_dump($so);\n} catch(UnexpectedValueException $e) {\n    echo $e->getMessage().\"\\n\";\n}\n}\necho \"DONE\\n\";\n?>")).toMatchSnapshot();
  });
});
