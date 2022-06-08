// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_getHash.phpt
  it("SplObjectStorage::getHash implementation", function () {
    expect(parser.parseCode("<?php\n$s = new SplObjectStorage();\n$o1 = new Stdclass;\n$o2 = new Stdclass;\n$s[$o1] = \"some_value\\n\";\necho $s->offsetGet($o1);\nclass MySplObjectStorage extends SplObjectStorage {\n    #[ReturnTypeWillChange]\n    public function getHash($obj) {\n        return 2;\n    }\n}\ntry {\n    $s1 = new MySplObjectStorage;\n    $s1[$o1] = \"foo\";\n} catch(Exception $e) {\n    echo \"caught 1\\n\";\n}\nclass MySplObjectStorage2 extends SplObjectStorage {\n    public function getHash($obj): string {\n        throw new Exception(\"foo\");\n        return \"asd\";\n    }\n}\ntry {\n    $s2 = new MySplObjectStorage2;\n    $s2[$o2] = \"foo\";\n} catch(Exception $e) {\n    echo \"caught 2\\n\";\n}\nclass MySplObjectStorage3 extends SplObjectStorage {\n    public function getHash($obj): string {\n        return \"asd\";\n    }\n}\n$s3 = new MySplObjectStorage3;\n$s3[$o1] = $o1;\nvar_dump($s3[$o1]);\n$s3[$o2] = $o2;\nvar_dump($s3[$o1] === $s3[$o2]);\n?>")).toMatchSnapshot();
  });
});
