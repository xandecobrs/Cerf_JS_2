const data = {
    "situations": [
        {
            "id": 0, 
            "description": "Você está vagando num beco ao anoitecer, quando derrepente sente uma mão encostar em seu ombro",
            "options": [
              {
                "description": "você sai correndo",
                "fail": {
                "damage": 5,
                "description": "Você tropeça e bate sua cabeça com tudo na lama"
            },
            "success": {
                "bonus": 12,
                "description": "Você consegue chegar com segurança em uma pousada para descansar"
            }
        },
        {
            "description": "Você se vira",
            "fail":{
            "damage": 12,
            "description": "você toma um soco na sua face fazendo você desmaiar"
            },
            "success": {
                "bonus": 10,
                "description": "você vê que era apenas um amigo distante, ele te oferece seu elmo como presente pelos velhos tempos"
            }
        }
      ]
    },
    {
        "id": 1, 
        "description": "Você está num mercado, quando vê uma senhora ser roubada por dois garotos",
        "options": [
          {
            "description": "você persegue os garotos",
            "fail": {
            "damage": 20,
            "description": "Os garotos percebem que você está perseguindo eles e então chamam os soldados e te acusam de roubar a senhora"
        },
        "success": {
            "bonus": 25,
            "description": "Você taca uma pedra em um dos garotos, fazendo eles soltarem os pertences com medo e devolve para a senhora"
        }
    },
    {
        "description": "Você grita pelos guardas",
        "fail":{
        "damage": 1,
        "description": "Os guardas ignoram o seu chamado"
        },
        "success": {
            "bonus": 5,
            "description": "Os guardas vão até você, você conta oque ocorreu e eles partem atrás dos ladrões"
        }
    }
  ]
}
  ]
}