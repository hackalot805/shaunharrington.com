const _js = (value: string): string {
   return value;
}

      let junk = _js('junk edited');
      const testing = true ? _js('true junk') : _js('false junk');
      junk = _js('junk new');
      junk = _js('junk new');
      const testing = true ? _js('true junk') : _js('false junk');
      junk = _js('Time Required');
      junk = _js('Guide');
      junk = _js('Search for a %1');

      // TODO: DOUBLE QUOTES ISN"T WORKING YET

      // TODO: __p ISN"T WORKING YET
      // junk = __p(1, '%1 day ago', '%1 days ago', `1`);
      // junk = _js('%1 day ago');
      // junk = _js('%1 days ago');
