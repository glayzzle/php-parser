// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70918.phpt
  it("Bug #70918 (Segfault using static outside of class scope)", function () {
    expect(parser.parseCode("<?php\ntry {\n    static::x;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    parent::x;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    self::x;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    new static;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    static::x();\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    static::$i;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
