// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_gcdext.phpt
  it("gmp_gcdext() basic tests", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(\"34293864345\");\n$n1 = gmp_init(\"23434293864345\");\n$a = array(\n    array(123,45),\n    array(4341,9734),\n    array(23487,333),\n    array(-234234,-123123),\n    array(-100,-2234),\n    array(345,\"34587345\"),\n    array(345,\"0\"),\n    array(\"345556456\",345873),\n    array(\"34545345556456\",\"323432445873\"),\n    array($n, $n1),\n    );\nforeach ($a as $val) {\n    $r = gmp_gcdext($val[0],$val[1]);\n    $check = gmp_add(gmp_mul($val[0],$r['s']), gmp_mul($val[1],$r['t']));\n    var_dump(gmp_strval($r['g']));\n    var_dump(gmp_strval($check));\n}\ntry {\n    var_dump(gmp_gcdext($val[0], array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_gcdext(array(), array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
