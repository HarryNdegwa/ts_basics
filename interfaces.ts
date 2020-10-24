// an interface is a blueprint of a class/object. It defines variable methods events etc but
// none of this is implemented. It is the responsibility of the class to declare them
// an interface can extend another interface,or extend more than one interface

interface video {
  //this interface is a blueprint of an object
  name: string;
  likes: number;
  views: number;
  doSomething: () => string;
}

let myVideo: video = {
  name: "Typescript for beginners",
  likes: 10,
  views: 10,
  doSomething: () => {
    return "Helloo World";
  },
};

console.log(myVideo.name);
