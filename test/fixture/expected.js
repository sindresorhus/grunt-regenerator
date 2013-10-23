function range(max, step) {
  var count, i;

  return wrapGenerator(function($ctx) {
    while (1) switch ($ctx.next) {
    case 0:
      count = 0;
      step = step || 1;
      i = 0;
    case 3:
      if (!(i < max)) {
        $ctx.next = 10;
        break;
      }

      count++;
      $ctx.next = 7;
      return i;
    case 7:
      i += step;
      $ctx.next = 3;
      break;
    case 10:
      $ctx.rval = count;
      delete $ctx.thrown;
      $ctx.next = 14;
      break;
    case 14:
      return $ctx.stop();
    }
  }, this);
}

var gen = range(20, 3), info;

while (!(info = gen.next()).done) {
  console.log(info.value);
}

console.log("steps taken: " + info.value);

console.log('concat');
