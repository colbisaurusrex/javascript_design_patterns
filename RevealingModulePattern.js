/* Revealing Module Pattern */
/*
    TLDR; just an improved version of module pattern.
    The difference is you define all functions and variiables in the private scope, but return an an
    anonymous object with pointers to the private functionality we want to reveal to the public.
*/
// https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2

const revealingModule = (() => {
  const name = "Colby";
  const location = "West Virgiinia";

  const privateGetName = () => {
    return `My name is ${name}`;
  };

  const privateGetLocation = () => {
    return `My location is ${location}`;
  };

  const publicGetInfo = () => {
    privateGetName();
    privateGetNameI();
  };
  return {
    getInfo: publicGetInfo
  };
})();

/*
    Notes:
        - Advantages:
            - makes it easier to tell at the end of the module which of our functions and variables may be accessed publicly, which eases readability
        - Disadvantages:
            - A disadvantage of this pattern is that if a private function refers to a public function, that public function can’t be overridden if a patch is necessary
            - As a result of this, modules created with the Revealing Module pattern may be more fragile than those created with the original Module pattern, so care should be taken during usage
*/
