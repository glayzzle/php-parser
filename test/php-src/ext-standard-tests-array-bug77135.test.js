// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug77135.phpt
  it("Test extract() with $this", function () {
    expect(parser.parseCode("<?php\nclass Extract\n{\n    public function run(): void\n    {\n        $options = [\n            'EXTR_OVERWRITE' => EXTR_OVERWRITE,\n            'EXTR_SKIP' => EXTR_SKIP,\n            'EXTR_PREFIX_SAME' => EXTR_PREFIX_SAME,\n            'EXTR_PREFIX_ALL' => EXTR_PREFIX_ALL,\n            'EXTR_PREFIX_INVALID' => EXTR_PREFIX_INVALID,\n            'EXTR_IF_EXISTS' => EXTR_IF_EXISTS,\n            'EXTR_PREFIX_IF_EXISTS' => EXTR_PREFIX_IF_EXISTS,\n        ];\n        foreach ($options as $name => $flags) {\n            echo \"{$name}\\n\";\n            $this->handle($name, $flags);\n            $this->handle(\"{$name}_REFS\", $flags | EXTR_REFS);\n            echo \"\\n\";\n        }\n    }\n    private function handle(string $name, int $flags): void\n    {\n        $array = [\"this\" => \"value\"];\n        try {\n            $result = extract($array, $flags, \"x\");\n            echo \"  extract() = {$result}\\n\";\n            echo \"  \\$this = \" . get_class($this) . \"\\n\";\n            echo \"  \\$v_this = \" . (isset($x_this) ? $x_this : \"NULL\") . \"\\n\";\n        } catch (\\Throwable $e) {\n            echo \"  Exception: \" . $e->getMessage() . \"\\n\";\n        }\n    }\n}\n(new Extract)->run();\n?>")).toMatchSnapshot();
  });
});
