 
let config = {
    type: Phaser.AUTO,
    width:  800,
    height: 400,
    parent: "container",
    backgroundColor: '#392542',
   scale: {
       autoCenter: Phaser.Scale.CENTER_HORIZONTALY
   },
   scene: [{
        create: create
   }]
};
function create() {
    this.add.text(350,200, "It works!");
    
  }

new Phaser.Game(config);
