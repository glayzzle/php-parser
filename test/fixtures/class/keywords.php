{
  "parser": {
    "extractDoc": true,
    "php7": true
  }
}
<?php
final class foo extends bar implements bim, bam, boum {
  const FOO = "azerty";
  public static $var;
  public function __construct(array $data = null) {
    $this->data = $data;
  }
  const list = "bar";
  public function new($foo = self::list) {
    return $this::list;
  }
  protected $foo;
  private $bar;
  function foobar() {}
}
abstract class bar {
  use A, B {
    B::smallTalk insteadof A;
    A::bigTalk insteadof B, C;
    B::bigTalk as public talk;
    B::bigTalk as protected talk;
    B::bigTalk as private talk;
    A::new as list;
    list as new;
  }
  /**
   * Some informations
   */
  abstract protected function &foo() : bar;
}
