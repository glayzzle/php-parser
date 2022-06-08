// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_to_array_nonscalar_keys.phpt
  it("Tests iterator_to_array() with non-scalar keys", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield \"foo\" => 0;\n    yield 1     => 1;\n    yield 2.5   => 2;\n    yield null  => 3;\n    yield []    => 4;\n    yield new stdClass => 5;\n}\ntry {\n    var_dump(iterator_to_array(gen()));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
