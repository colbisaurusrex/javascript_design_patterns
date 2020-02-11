/* Singleton Pattern */

/* TLDR; In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system. The Singleton pattern is thus known because it restricts instantiation of a class to a single object. */

const mySingleton = (() => {
  let instance;
  const init = () => {
    const privateMethod = () => console.log("this is a private method");
    const privateVariable = "Private Variable";

    return {
      publicMethod: () => console.log("this is a public method"),
      publicVariable: "Public Variable",
      getPrivateVariable: () => privateVariable,
      getInstance: () => {
        if (!instance) {
          // This is important. This ensures only one instance is ever created
          return init();
        }
        return instance;
      }
    };
  };
})();

/*
    Notes:
        -  Singletons differ from static classes (or objects) as we can delay their initialization, generally be- cause they require some information that may not be available during initialization time.
        - There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
        - The sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.
        - While the Singleton has valid uses, often when we find ourselves needing it in Java- Script, it’s a sign that we may need to reevaluate our design. The presence of the Singleton is often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a code base.
*/
