var APP_DATA = {
  "scenes": [
    {
      "id": "0-porteira",
      "name": "Porteira",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.084581321519277,
        "pitch": -0.020677325094439425,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.009541448062305946,
          "pitch": 0.19095160455532323,
          "rotation": 0,
          "target": "1-trilha_casa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-trilha_casa",
      "name": "Trilha_casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.00008000029999877256,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.01768271222951512,
          "pitch": 0.20148891719617623,
          "rotation": 0,
          "target": "2-frente_casa"
        },
        {
          "yaw": 3.0907535562599726,
          "pitch": 0.3205240465311263,
          "rotation": 0,
          "target": "0-porteira",
          "targetViewParameters": {
            "yaw": -2.3545538240861337,
          }

        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-frente_casa",
      "name": "Frente_casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0012516354000080554,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.16496542587461605,
          "pitch": 0.20028576059845804,
          "rotation": 19.63495408493622,
          "target": "3-sala"
        },
        {
          "yaw": 1.36294040486964,
          "pitch": 0.225521269783858,
          "rotation": 0,
          "target": "14-patio_gramado",
          "targetViewParameters": {
            "yaw": -0.3795892641162535,
          }
        },
        {
          "yaw": -0.9950505153419051,
          "pitch": 0.12405349010075639,
          "rotation": 0.7853981633974483,
          "target": "10-quiosque",
          "targetViewParameters": {
            "yaw": 1.3076470848296804,
          }
        },
        {
          "yaw": 2.6480635554874574,
          "pitch": 0.3653708121077326,
          "rotation": 0.4,
          "target": "1-trilha_casa",
          "targetViewParameters": {
            "yaw": 3.09400726907592,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.166268263310263,
          "pitch": 0.4762880227273776,
          "rotation": 0,
          "target": "4-sala_lareira"
        },
        {
          "yaw": 2.91575991585972,
          "pitch": 0.5064863735685154,
          "rotation": 5.497787143782138,
          "target": "2-frente_casa",
          "targetViewParameters": {
            "yaw": 2.728888390409704,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala_lareira",
      "name": "Sala_lareira",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7178246662615173,
          "pitch": 0.3887110938749547,
          "rotation": 0.5,
          "target": "5-hall_quartos"
        },
        {
          "yaw": -3.0165905655242042,
          "pitch": 0.4066366737350009,
          "rotation": 0,
          "target": "3-sala",
          "targetViewParameters": {
            "yaw": -3.042317716824739,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall_quartos",
      "name": "Hall_quartos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1466029910204103,
          "pitch": 0.3100937715396288,
          "rotation": 0.5,
          "target": "6-quarto_01"
        },
        {
          "yaw": -0.3162031214286216,
          "pitch": 0.2666513037668814,
          "rotation": 4.71238898038469,
          "target": "7-quarto_02"
        },
        {
          "yaw": 1.269097687791783,
          "pitch": 0.4090277574110388,
          "rotation": 0,
          "target": "8-cozinha"
        },
        {
          "yaw": -3.155024909739006,
          "pitch": 0.4090277574110388,
          "rotation": -0.3,
          "target": "4-sala_lareira",
          "targetViewParameters": {
            "yaw": 1.7983729396530554,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-quarto_01",
      "name": "Quarto_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1375050005593454,
          "pitch": 0.40587343140282073,
          "rotation": 0,
          "target": "5-hall_quartos",
          "targetViewParameters": {
            "yaw": 1.3528843278077982,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quarto_02",
      "name": "Quarto_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9343153944506604,
          "pitch": 0.42509597986466297,
          "rotation": 0.7853981633974483,
          "target": "5-hall_quartos",
          "targetViewParameters": {
            "yaw": 3.0634023188805664,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0960699388265542,
          "pitch": 0.3962483243103456,
          "rotation": 0,
          "target": "9-area_externa"
        },
        {
          "yaw": -2.9501115305588375,
          "pitch": 0.45112398028826917,
          "rotation": -0.5,
          "target": "5-hall_quartos",
          "targetViewParameters": {
            "yaw": -1.724436979682224,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-area_externa",
      "name": "Area_externa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14984607139670914,
          "pitch": 0.2267079123721487,
          "rotation": 0,
          "target": "11-piscina"
        },
        {
          "yaw": -1.0614580831358342,
          "pitch": 0.13067841042087736,
          "rotation": 0,
          "target": "10-quiosque"
        },
        {
          "yaw": 1.692691773219627,
          "pitch": 0.343753568176993,
          "rotation": 0,
          "target": "13-campo_futebol",
          "targetViewParameters": {
            "yaw": -1.2053144546466719,
          }
        },
        {
          "yaw": 2.712373449985815,
          "pitch": 0.2892295222293839,
          "rotation": 0,
          "target": "14-patio_gramado"
        },
        {
          "yaw": 0.8025771008252729,
          "pitch": 0.1639705804107372,
          "rotation": 0,
          "target": "12-pomar"
        },
        {
          "yaw": -2.2487476468738254,
          "pitch": 0.3725160713330098,
          "rotation": 0,
          "target": "8-cozinha",
          "targetViewParameters": {
            "yaw": 2.2413421487191787,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-quiosque",
      "name": "Quiosque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.976954340450373,
          "pitch": 0.2688320849174559,
          "rotation": 0,
          "target": "9-area_externa",
          "targetViewParameters": {
            "yaw": 2.156120165692373,
          }
        },
        {
          "yaw": -1.7625751273160155,
          "pitch": 0.41891424092434093,
          "rotation": 0,
          "target": "2-frente_casa",
          "targetViewParameters": {
            "yaw": 2.022103901081003,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9012172016798026,
          "pitch": 0.27274260163595443,
          "rotation": 0,
          "target": "12-pomar"
        },
        {
          "yaw": 2.794080400578462,
          "pitch": 0.6203313499067615,
          "rotation": 7.0685834705770345,
          "target": "9-area_externa",
          "targetViewParameters": {
            "yaw": -2.3487066173794595,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pomar",
      "name": "Pomar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2179308704347296,
          "pitch": 0.25505347775878917,
          "rotation": 0,
          "target": "11-piscina",
          "targetViewParameters": {
            "yaw": -1.9236363974938264,
          }
        },
        {
          "yaw": -2.8018722856063043,
          "pitch": 0.33001719198269974,
          "rotation": 0,
          "target": "13-campo_futebol",
          "targetViewParameters": {
            "yaw": 0.8786028803788035,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-campo_futebol",
      "name": "Campo_futebol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17324168941644658,
          "pitch": 0.2758773128692802,
          "rotation": 0,
          "target": "14-patio_gramado",
          "targetViewParameters": {
            "yaw": 0.6108652244271386,
          }
        },
        {
          "yaw": 2.6256268048613993,
          "pitch": 0.16827595919836114,
          "rotation": 0,
          "target": "11-piscina",
          "targetViewParameters": {
            "yaw": -0.8557998905362396,
          }
        },
        {
          "yaw": -2.3583841328744235,
          "pitch": 0.33898078157654155,
          "rotation": 0,
          "target": "12-pomar"
        },
        {
          "yaw": 1.7953093215604152,
          "pitch": 0.27040001226189503,
          "rotation": 0,
          "target": "9-area_externa",
          "targetViewParameters": {
            "yaw": -1.9623226240330744,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-patio_gramado",
      "name": "Patio_gramado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23260639240495706,
          "pitch": 0.27306782872046576,
          "rotation": 0,
          "target": "15-churrasqueira"
        },
        {
          "yaw": -0.39638322648279534,
          "pitch": 0.1858179920854397,
          "rotation": 0,
          "target": "16-lago",
          "targetViewParameters": {
            "yaw": -0.3755384264636099,
          }
        },
        {
          "yaw": 2.554910300651372,
          "pitch": 0.18352653543201747,
          "rotation": 0,
          "target": "2-frente_casa",
          "targetViewParameters": {
            "yaw": -1.7761651880206237,
          }
        },
        {
          "yaw": -2.1924263741384067,
          "pitch": 0.18820151805737417,
          "rotation": 0,
          "target": "13-campo_futebol",
          "targetViewParameters": {
            "yaw": -2.6664850304779204,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-churrasqueira",
      "name": "Churrasqueira",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3920331588104933,
          "pitch": 0.4323984569002288,
          "rotation": 0,
          "target": "16-lago",
          "targetViewParameters": {
            "yaw": -1.3647641094424472,
          }
        },
        {
          "yaw": -3.043315857235246,
          "pitch": 0.396569595322692,
          "rotation": 0,
          "target": "14-patio_gramado",
          "targetViewParameters": {
            "yaw": -2.8689183106417318,
          }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-lago",
      "name": "Lago",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8712484718682418,
          "pitch": 0.4355724895343229,
          "rotation": 0,
          "target": "15-churrasqueira",
          "targetViewParameters": {
            "yaw": 1.6198281375875654,
          }
        },
        {
          "yaw": 2.909699259764036,
          "pitch": 0.34917692964515723,
          "rotation": 0,
          "target": "14-patio_gramado",
          "targetViewParameters": {
            "yaw": 2.4917850827171115,
          }
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tour_360_Rancho_Morro_Grande",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
