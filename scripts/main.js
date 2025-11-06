Hooks.once('diceSoNiceReady', dice3d => {
  dice3d.addSystem({
    id: "graveDiggers", name: "Doomsong Gravediggers",
  }, "preferred");
  
  dice3d.addSystem({
    id: "heresy", name: "Doomsong Heresy",
  }, "preferred");
  
  dice3d.addColorset({
    name: 'dgd',
    category: 'Doomsong',
    description: 'Doomsong Gravediggers Die and Coin',
    foreground: '#2c2c2c',
    background: '#767772',
    outline: 'none',
    texture: 'none',
    material: 'metal',
  });

  dice3d.addColorset({
    name: 'heresy',
    category: 'Doomsong',
    description: 'Doomsong Heresy Die and Coin',
    foreground: '#ffffff',
    background: '#1c1c1c',
    outline: 'none',
    texture: 'marble',
    material: 'stone',
  });

  dice3d.addDicePreset({
    system: 'graveDiggers',
    colorset: 'dgd',
    type: 'd6',
    labels: [
      'modules/doomsong-dice/textures/gravediggers/gravediggers_1.webp',
      'modules/doomsong-dice/textures/gravediggers/gravediggers_2.webp',
      'modules/doomsong-dice/textures/gravediggers/gravediggers_3.webp',
      'modules/doomsong-dice/textures/gravediggers/gravediggers_4.webp',
      'modules/doomsong-dice/textures/gravediggers/gravediggers_5.webp',
      'modules/doomsong-dice/textures/gravediggers/gravediggers_6.webp',
    ]
  });

  dice3d.addDicePreset({
    system: 'graveDiggers',
    colorset: 'dgd',
    type: 'd2',
    modelFile: "modules/doomsong-dice/models/Doomcoin.glb",
  });
  
  dice3d.addDicePreset({
    system: 'graveDiggers',
    colorset: 'dgd',
    type: 'dc',
    modelFile: "modules/doomsong-dice/models/Doomcoin.glb",
  });

  dice3d.addDicePreset({
    system: 'heresy',
    colorset: 'heresy',
    type: 'd6',
    labels: [
      'modules/doomsong-dice/textures/heresy/heresy_1.webp',
      'modules/doomsong-dice/textures/heresy/heresy_2.webp',
      'modules/doomsong-dice/textures/heresy/heresy_3.webp',
      'modules/doomsong-dice/textures/heresy/heresy_4.webp',
      'modules/doomsong-dice/textures/heresy/heresy_5.webp',
      'modules/doomsong-dice/textures/heresy/heresy_6.webp',
    ]
  });

  dice3d.addDicePreset({
    system: 'heresy',
    colorset: 'heresy',
    type: 'd2',
    modelFile: "modules/doomsong-dice/models/Doomcoin.glb",
  });
  
  dice3d.addDicePreset({
    system: 'heresy',
    colorset: 'heresy',
    type: 'dc',
    modelFile: "modules/doomsong-dice/models/Doomcoin.glb",
  });
})
