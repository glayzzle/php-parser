// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_weakness.phpt
  it("The weak part of the WeakMap", function () {
    expect(parser.parseCode("<?php\n$map = new WeakMap;\n// This is doing to be inserted into the map and immediately removed again\n$map[new stdClass] = 1;\nvar_dump($map);\n$obj = new stdClass;\n$map[$obj] = 2;\nvar_dump($map);\nunset($obj);\nvar_dump($map);\necho \"\\nDestructor in WeakMap value:\\n\";\n$obj = new stdClass;\n$map[$obj] = new class {\n    public function __destruct() {\n        echo \"Dtor!\\n\";\n    }\n};\necho \"Before unset:\\n\";\nunset($obj);\necho \"After unset:\\n\";\nvar_dump($map);\necho \"\\nDestroying map with live object:\\n\";\n$obj = new stdClass;\n$map[$obj] = 3;\nunset($map);\nvar_dump($obj);\necho \"\\nObject freed by GC:\\n\";\n$map = new WeakMap;\n$obj = new stdClass;\n$obj->obj = $obj;\n$map[$obj] = 4;\nunset($obj);\nvar_dump($map);\ngc_collect_cycles();\nvar_dump($map);\necho \"\\nStoring object as own value:\\n\";\n$map = new WeakMap;\n$obj = new stdClass;\n$map[$obj] = $obj;\nunset($obj);\nvar_dump($map);\nunset($map);\necho \"\\nStoring map in itself:\\n\";\n$map = new WeakMap;\n$map[$map] = $map;\nvar_dump($map);\nunset($map);\n?>")).toMatchSnapshot();
  });
});
