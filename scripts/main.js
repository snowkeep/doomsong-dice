Hooks.once('diceSoNiceReady', dice3d => {
  dice3d.addSystem({
    id: "graveDiggers", name: "Doomsong Gravediggers",
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

  dice3d.addDicePreset({
    system: 'graveDiggers',
    colorset: 'dgd',
    type: 'd2',
    labels: [
      'modules/doomsong-dice/textures/lhmuu_coin/doomcoin-skull.webp',
      'modules/doomsong-dice/textures/lhmuu_coin/doomcoin-crown.webp',
    ]
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
})
