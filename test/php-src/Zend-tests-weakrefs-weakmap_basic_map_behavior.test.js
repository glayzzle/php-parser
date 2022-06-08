// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_basic_map_behavior.phpt
  it("Basic WeakMap behavior (as a map)", function () {
    expect(parser.parseCode("<?php\n$map = new WeakMap;\nvar_dump(count($map));\n$obj = new stdClass;\n$obj->value = 1;\n$obj2 = new stdClass;\n$obj2->value = 2;\n$map[$obj] = $obj2;\nvar_dump(count($map));\nvar_dump($map);\nvar_dump(isset($map[$obj]));\nvar_dump(!empty($map[$obj]));\nvar_dump($map[$obj]);\n$map[$obj] = 42;\nvar_dump($map);\nvar_dump(isset($map[$obj]));\nvar_dump(!empty($map[$obj]));\nvar_dump($map[$obj]);\n$map[$obj] = false;\nvar_dump($map);\nvar_dump(isset($map[$obj]));\nvar_dump(!empty($map[$obj]));\nvar_dump($map[$obj]);\n$map[$obj] = null;\nvar_dump($map);\nvar_dump(isset($map[$obj]));\nvar_dump(!empty($map[$obj]));\nvar_dump($map[$obj]);\nunset($map[$obj]);\nvar_dump($map);\nvar_dump(isset($map[$obj]));\nvar_dump(!empty($map[$obj]));\ntry {\n    var_dump($map[$obj]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// It's okay to unset an object that's not in the map.\nunset($map[new stdClass]);\necho \"\\nIndirect modification:\\n\";\n$map[$obj] = [];\n$map[$obj][] = 42;\n$map[$obj2] = 41;\n$map[$obj2]++;\nvar_dump($map);\necho \"\\nMethods:\\n\";\nvar_dump($map->offsetSet($obj2, 43));\nvar_dump($map->offsetGet($obj2));\nvar_dump($map->offsetExists($obj2));\nvar_dump($map->count());\nvar_dump($map->offsetUnset($obj2));\nvar_dump($map->count());\n?>")).toMatchSnapshot();
  });
});
