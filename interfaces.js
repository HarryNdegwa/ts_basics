// an interface is a blueprint of a class/object. It defines variable methods events etc but
// none of this is implemented. It is the responsibility of the class to declare them
var myVideo = {
    name: "Typescript for beginners",
    likes: 10,
    views: 10,
    doSomething: function () {
        return "Helloo World";
    }
};
console.log(myVideo.name);
