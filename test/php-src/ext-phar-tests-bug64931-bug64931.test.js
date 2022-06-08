// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug64931/bug64931.phpt
  it("Bug #64931 (phar_add_file is too restrictive on filename)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n@unlink(__DIR__.\"/bug64931.phar\");\n$phar = new Phar(__DIR__.\"/bug64931.phar\");\n$phar->addFile(__DIR__.\"/src/.pharignore\", \".pharignore\");\ntry {\n    $phar->addFile(__DIR__.\"/src/.pharignore\", \".phar/gotcha\");\n} catch (Exception $e) {\n    echo \"CAUGHT: \". $e->getMessage() .\"\\n\";\n}\ntry {\n    $phar->addFromString(\".phar\", \"gotcha\");\n} catch (Exception $e) {\n    echo \"CAUGHT: \". $e->getMessage() .\"\\n\";\n}\ntry {\n    $phar->addFromString(\".phar//\", \"gotcha\");\n} catch (Exception $e) {\n    echo \"CAUGHT: \". $e->getMessage() .\"\\n\";\n}\ntry {\n    $phar->addFromString(\".phar\\\\\", \"gotcha\");\n} catch (Exception $e) {\n    echo \"CAUGHT: \". $e->getMessage() .\"\\n\";\n}\ntry {\n    $phar->addFromString(\".phar\\0\", \"gotcha\");\n} catch (ValueError $e) {\n    echo \"CAUGHT: \". $e->getMessage() .\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
