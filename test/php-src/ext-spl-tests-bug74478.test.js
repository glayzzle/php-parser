// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug74478.phpt
  it("Bug #74478: null coalescing operator failing with SplFixedArray", function () {
    expect(parser.parseCode("<?php\nclass MyFixedArray extends \\SplFixedArray\n{\n    public function offsetExists($name): bool {\n        echo \"offsetExists($name)\\n\";\n        return parent::offsetExists($name);\n    }\n    public function offsetGet($name): mixed {\n        echo \"offsetGet($name)\\n\";\n        return parent::offsetGet($name);\n    }\n    public function offsetSet($name, $value): void {\n        echo \"offsetSet($name)\\n\";\n        parent::offsetSet($name, $value);\n    }\n    public function offsetUnset($name): void {\n        echo \"offsetUnset($name)\\n\";\n        parent::offsetUnset($name);\n    }\n}\n$fixedData = new MyFixedArray(10);\nvar_dump(isset($fixedData[0][1][2]));\nvar_dump(isset($fixedData[0]->foo));\nvar_dump($fixedData[0] ?? 42);\nvar_dump($fixedData[0][1][2] ?? 42);\n$fixedData[0] = new MyFixedArray(10);\n$fixedData[0][1] = new MyFixedArray(10);\nvar_dump(isset($fixedData[0][1][2]));\nvar_dump($fixedData[0][1][2] ?? 42);\n?>")).toMatchSnapshot();
  });
});
