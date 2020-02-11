/* Observer Pattern */

/* -------- Observer List------- */
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.Add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function() {
  this.observerList = [];
};

ObserverList.prototype.Count = function() {
  return this.observerList.length;
};

ObserverList.prototype.Get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.Insert = function(obj, index) {
  var pointer = -1;
  if (index === 0) {
    this.observerList.unshift(object);
    pointer = index;
  } else if (index === this.observerList.length) {
    this.observerList.push(obj);
    pointer = index;
  }
  return pointer;
};

ObserverList.prototype.IndexOf = function(obj, startIndex) {
  var i = startIndex,
    pointer = -1;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }
    i++;
  }
  return pointer;
};

ObserverList.prototype.RemoveAt = function(index) {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length - 1) {
    this.observerList.pop();
  }
};

// I guess this is a simple utility and not intended to be a method of ObserverList
function extend(extension, obj) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

/* -------- Subject ------- */

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer) {
  this.observers.Add(observer);
};

Subject.prototype.RemoveObserver = function(observer) {
  this.observers.RemoveAt(this.observerList.IndexOf(observer, 0));
};

Subject.prototype.Notify = function(context) {
  var observerCount = this.observers.Count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.Get(i).Update(context);
  }
};

/* -------- Observer ------- */

function Observer() {
    this.Update = function() {}
}
/*
    Notes:
        - The Observer is a design pattern in which an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state
        - Requires that the observer(or object) wishing to receive topic notifications must subscribe this intererest to the object firing the event (the subject)
*/
