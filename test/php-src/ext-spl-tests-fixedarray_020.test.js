// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_020.phpt
  it("SPL: FixedArray: fromArray/toArray + get_properties", function () {
    expect(parser.parseCode("<?php\n$a = array(1=>'foo', 2=>'bar', 0=>'gee');\n$fa = SplFixedArray::fromArray($a, false);\nvar_dump(count($fa), $fa->toArray() === array_values($a));\n$fa = SplFixedArray::fromArray($a, true);\nvar_dump(count($fa), $fa->toArray() === $a, $fa->toArray() === (array)$fa);\ntry {\n    echo \"From Array with string keys, no preserve\\n\";\n    SplFixedArray::fromArray(array(\"foo\"=>\"bar\"), false);\n    echo \"No exception\\n\";\n} catch (Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    echo \"From Array with string keys, preserve\\n\";\n    SplFixedArray::fromArray(array(\"foo\"=>\"bar\"), true);\n    echo \"No exception\\n\";\n} catch (Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
