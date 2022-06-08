// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug74954.phpt
  it("Bug #74954 (crash after update of generator yielding from finished generator)", function () {
    expect(parser.parseCode("<?php\nfunction from() {\n        yield 1;\n        throw new Exception();\n}\nfunction gen($gen) {\n        try {\n                var_dump(yield from $gen);\n        } catch (Exception $e) { print \"Caught exception!\\n$e\\n\"; }\n}\n$gen = from();\n$gens[] = gen($gen);\n$gens[] = gen($gen);\nforeach ($gens as $g) {\n        $g->current();\n}\ndo {\n        foreach ($gens as $i => $g) {\n                $g->next();\n        }\n} while($gens[0]->valid());\n?>")).toMatchSnapshot();
  });
});
