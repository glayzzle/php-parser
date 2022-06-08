// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sysvshm/tests/002.phpt
  it("shm_attach() tests", function () {
    expect(parser.parseCode("<?php\n$key = ftok(__FILE__, 't');\ntry {\n    shm_attach(-1, 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    shm_attach(0, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    shm_attach(123, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    shm_attach($key, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    shm_attach($key, 0);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($s = shm_attach($key, 1024));\nshm_remove($s);\nvar_dump($s = shm_attach($key, 1024));\nshm_remove($s);\nvar_dump($s = shm_attach($key, 1024, 0666));\nshm_remove($s);\nvar_dump($s = shm_attach($key, 1024));\nshm_remove($s);\nvar_dump($s = shm_attach($key));\nshm_remove($s);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
