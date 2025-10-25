export default{
  "site": {
    "title": "Yoshi Wang",
    "subtitle": "portfolio作品集",
    "description": "简介描述",
    "interview": "Entretien pour le magazine du Centre Pompidou ici",
    "logo": {
      "src": "/images/36367.jpg",
      "alt": "Logo描述",
      "width": 80,
      "height": 80
    },
    "welcomeImages": [
      {
        // 远程地址
        "src": "/images/welcome/3334.jpg",
        "alt": "图片描述信息",
        "width": 1200,
      },
    ],
    "contact": {
      "name": "王晓汀",
      "email": "165746826@qq.com",
      "phone": "18810198323"
    },
    "about": {
      "title": "About me 关于我",
      "content": [
        "我的介绍内容1",
        "我的介绍内容2",
        "我的介绍内容3"
      ],
      "skills": [
        "技能1",
        "技能2",
        "技能3",
        "技能4",
        "技能5"
      ],
      "experience": [
        {
          "title": "经历一",
          "period": "2018 - 至今",
          "description": "Collaborations avec magazines, institutions culturelles et projets personnels"
        },
        {
          "title": "经历二",
          "period": "2016 - 2018",
          "description": "Travail avec des photographes reconnus sur des projets commerciaux et artistiques"
        }
      ],
      "images": [
        {
          "src": "/images/about/portrait.svg",
          "alt": "Portrait de Loïc Froissart",
          "width": 300,
          "height": 400
        },
        {
          "src": "/images/about/workspace.svg",
          "alt": "Espace de travail",
          "width": 500,
          "height": 300
        }
      ]
    }
  },
  "navigation": [
    { "id": "menu", "label": "Aller au menu", "type": "anchor", "target": "#menu" },
    { "id": "content", "label": "Aller au contenu", "type": "anchor", "target": "#content" }
  ],
  "projects": [
    { 
      "id": "centre-pompidou", 
      "title": "项目一", 
      "featured": false,
      "description": "项目描述可以自己写",
      "year": "2021",
      "type": "Book",
      "images": [
        {
          "src": "/images/centre-pompidou/image1.svg",
          "alt": "Centre Pompidou - Vue d'ensemble",
          "width": 800,
          "height": 600
        },
        {
          "src": "/images/centre-pompidou/image2.svg",
          "alt": "Centre Pompidou - Détail architectural",
          "width": 600,
          "height": 800
        },
        {
          "src": "/images/centre-pompidou/image3.svg",
          "alt": "Centre Pompidou - Intérieur",
          "width": 800,
          "height": 400
        }
      ]
    },
    { 
      "id": "mairie-paris", 
      "title": "项目二",
      "description": "项目描述",
      "type": "Institutional"
    },
    { 
      "id": "m-le-monde", 
      "title": "M le Monde",
      "description": "Collaboration avec M le Monde, le magazine du quotidien Le Monde.",
      "type": "Press"
    },
    { 
      "id": "focus-vif", 
      "title": "Focus Vif",
      "description": "Travail éditorial pour Focus Vif.",
      "type": "Press"
    },
    { 
      "id": "zeit-leo", 
      "title": "Zeit Leo",
      "description": "Projet pour Zeit Leo, magazine jeunesse allemand.",
      "type": "Press"
    },
    { 
      "id": "ville-bondy", 
      "title": "Ville de Bondy",
      "description": "Projet municipal pour la ville de Bondy.",
      "type": "Institutional"
    },
    { 
      "id": "jour-ogres", 
      "title": "Le jour où les ogres",
      "description": "Projet créatif autour du thème des ogres.",
      "type": "Creative"
    },
    { 
      "id": "telerama", 
      "title": "Télérama",
      "description": "Collaboration avec le magazine culturel Télérama.",
      "type": "Press"
    },
    { 
      "id": "canal-saint-martin", 
      "title": "36 vues du canal Saint Martin",
      "description": "Série photographique sur le canal Saint Martin à Paris.",
      "type": "Photography",
      "images": [
        {
          "src": "/images/canal-saint-martin/canal1.svg",
          "alt": "Canal Saint Martin - Vue panoramique",
          "width": 1000,
          "height": 400
        },
        {
          "src": "/images/canal-saint-martin/canal2.svg",
          "alt": "Canal Saint Martin - Écluses",
          "width": 700,
          "height": 500
        },
        {
          "src": "/images/canal-saint-martin/canal3.svg",
          "alt": "Canal Saint Martin - Reflets",
          "width": 600,
          "height": 600
        },
        {
          "src": "/images/canal-saint-martin/canal4.svg",
          "alt": "Canal Saint Martin - Promenade",
          "width": 800,
          "height": 600
        }
      ]
    },
    { 
      "id": "petite-enfance", 
      "title": "Mois de la petite enfance",
      "description": "Projet dédié à la petite enfance.",
      "type": "Educational"
    },
    { 
      "id": "topo", 
      "title": "TOPO",
      "description": "Collaboration avec TOPO magazine.",
      "type": "Press"
    },
    { 
      "id": "ma-cabane", 
      "title": "Ma cabane",
      "description": "Projet créatif autour du thème de la cabane.",
      "type": "Creative"
    },
    { 
      "id": "lille", 
      "title": "Lille",
      "description": "Projet réalisé à Lille.",
      "type": "Regional"
    }
  ]
}
