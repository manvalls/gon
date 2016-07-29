var tg = Symbol(),
    handler;

function gon(){
  return new Proxy(getTarget(),handler);
}

function getTarget(){
 function tg(){}
 tg.list = [];
 return tg;
}

gon.apply = function(target,gon,thisArg){
  var func,args;

  if(!(gon && target)) return;
  if(!gon[tg]) return;
  for([func,args] of gon[tg].list) func.apply(target,[...args,thisArg]);
  return target;
};

handler = {

  get: function(target,property,receiver){
    var proxy;

    if(property == tg) return target;
    proxy = gon();
    target.list.push([getAndApply,[property,proxy]]);
    return proxy;
  },

  set: function(target,property,value,receiver){
    target.list.push([setProp,[property,value]]);
  },

  apply: function(target,thisArg,args){
    var proxy = gon();
    target.list.push([callAndApply,[args,proxy]]);
    return proxy;
  }

};

// Modifiers

function getAndApply(prop,proxy){
  gon.apply(this[prop],proxy,this);
}

function callAndApply(args,proxy,thisArg){
  thisArg = thisArg || global;
  gon.apply(this.apply(thisArg,args),proxy);
}

function setProp(property,value){
  this[property] = value;
}

/*/ exports /*/

module.exports = gon;
