// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_001.phpt
  it("Test typed properties basic operation", function () {
    expect(parser.parseCode("<?php\nvar_dump(new class(1, 2.2, true, [\"four\"], new stdClass) {\n    public int $int;\n    public float $float;\n    public bool $bool;\n    public array $array;\n    public stdClass $std;\n    public iterable $it;\n    public function __construct(int $int, float $float, bool $bool, array $array, stdClass $std) {\n        $this->int = $int;\n        $this->float = $float;\n        $this->bool = $bool;\n        $this->array = $array;\n        $this->std = $std;\n        $this->it = $array;\n    }\n});\n?>")).toMatchSnapshot();
  });
});
