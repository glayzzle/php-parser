// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_unserialize_invalid_parameter2.phpt
  it("Check that SplObjectStorage::unserialize throws exception when numeric value passed", function () {
    expect(parser.parseCode("<?php\n$data_provider = array(\n    12345,\n    1.2345,\n    PHP_INT_MAX,\n    'x:rubbish', // rubbish after the 'x:' prefix\n    'x:i:2;O:8:\"stdClass\":0:{},s:5:\"value\";;m:a:0:{}',\n);\nforeach($data_provider as $input) {\n    $s = new SplObjectStorage();\n    try {\n        $s->unserialize($input);\n    } catch(UnexpectedValueException $e) {\n        echo $e->getMessage() . PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
