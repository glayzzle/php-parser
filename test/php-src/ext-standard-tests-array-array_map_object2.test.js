// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_object2.phpt
  it("Test array_map() function : object functionality - with non-existent class and method", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_map() for following object functionalities:\n *   1) non-existent class\n *   2) existent class and non-existent function\n */\necho \"*** Testing array_map() :  with non-existent class and method ***\\n\";\nclass SimpleClass\n{\n  public $var1 = 1;\n  public function square($n) {\n    return $n * $n;\n  }\n  public static function cube($n) {\n    return $n * $n * $n;\n  }\n}\necho \"-- with non-existent class --\\n\";\ntry {\n    var_dump( array_map(array('non-existent', 'square'), array(1, 2)) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"-- with existent class and non-existent method --\\n\";\ntry {\n    var_dump( array_map(array('SimpleClass', 'non-existent'), array(1, 2)) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
