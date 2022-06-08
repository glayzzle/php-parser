// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81512.phpt
  it("Bug #81512: Unexpected behavior with arrays and JIT", function () {
    expect(parser.parseCode("<?php\n$pipe = [['val1'],['val2'],];\nfor ($i = 0; $i < 30; ++$i) {\n        echo \"$i \";\n        if (!is_pipeline($pipe)) {\n                echo 'ERROR ';\n        }\n}\nfunction is_pipeline($pipeline): bool {\n        foreach ($pipeline as $stage) {\n                if (!is_array($stage)) {\n                        return false; // must never happen\n                }\n                $stage = (array) $stage;\n                reset($stage);\n        }\n        return true;\n}\n?>")).toMatchSnapshot();
  });
});
