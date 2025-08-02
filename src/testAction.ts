const _js = (value: string): string {
   return value;
}

// Simple
let junk = _js('junk simple');

// Duplicated
junk = _js('junk dublicated');
junk = _js('junk duplicated');

// Two on one line
let testing = true ? _js('junk one') : _js('junk two');

// Two duplicated on one line 
testing = true ? _js('true junk') : _js('false junk');

// With params
junk = _js('Search for a %1', 'tool');
junk = _js('Search for a %1 and %2', 'tool', 'manual');

// Found - These should not be included in the comment.
junk = _js('Time Required');
junk = _js('Guide');


// TODO: DOUBLE QUOTES ISN'T WORKING YET

// TODO: __p ISN"T WORKING YET
// junk = __p(1, '%1 day ago', '%1 days ago', `1`);
// junk = _js('%1 day ago');
// junk = _js('%1 days ago');
