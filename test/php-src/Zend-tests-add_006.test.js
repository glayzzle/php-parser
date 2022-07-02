// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/add_006.phpt
  it("adding numbers to strings", function () {
    expect(parser.parseCode("<?php\n$i = 75636;\n$s1 = \"this is a string\";\n$s2 = \"876222numeric\";\n$s3 = \"48474874\";\n$s4 = \"25.68\";\ntry {\n    $c = $i + $s1;\n    var_dump($c);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$c = $i + $s2;\nvar_dump($c);\n$c = $i + $s3;\nvar_dump($c);\n$c = $i + $s4;\nvar_dump($c);\ntry {\n    $c = $s1 + $i;\n    var_dump($c);\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$c = $s2 + $i;\nvar_dump($c);\n$c = $s3 + $i;\nvar_dump($c);\n$c = $s4 + $i;\nvar_dump($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
