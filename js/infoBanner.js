AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default:"", type: "string" },
  },
  update:function(){
    this.createBanner()
  },
  createBanner: function () {
    postersInfo={
      comic25:{
        banner_url:"./assets/26eje.jpg",
        title:"Una ataque mortifero(2019)",
        released_year:"2019",
        description:"Sonic tiene que unir fuerzas con el dr.eggman y pelear contra sus amigos transformados en zombots mientras piensan en un plan para revetir el efecto del metalvirus"
      },
      comic26:{
        banner_url:"./assets/27eje.jpg",
        title:"Todo o nada(2019)",
        released_year:"2019",
        description:"Los equipos de busqueda luchan en diferentes zonas contra los deadly six para conseguir las esmeraldas del caos antes de que sea muy tarde pero se estan quedando sin opciones ni tiempo y para ganar tendran que hacer sacrificios"
      },
      comic27:{
        banner_url:"./assets/28eje.jpg",
        title:"La lucha de sus vidas(2019)",
        released_year:"2019",
        description:"Los equipos han vencido a varios de los deadly six y algunos regresan con las esmeraldas pero otros solo envian la esmeralda porque han sido infectados mientras que zavok a llegado al lugar donde sonic y los sobrevivientes se escondian."
      },
      comic28:{
        banner_url:"./assets/29eje.jpg",
        title:"La batalla final parte 1(2019)",
        released_year:"2019",
        description:"La infeccion de Sonic empieza a descontrolarse, mientras mas amigos comienzan a infectarse mientras pelean contra los zombots para darles mas tiempo a sonic y silver de poner en marcha su plan para vencer a zavok, quien se ha hecho mas poderoso."
      }
    }
    const {itemId} = this.data
    const fondo = document.querySelector("#backgroundImage")
    const entidad = document.createElement("a-entity")
    entidad.setAttribute("visible", true)
    entidad.setAttribute("id", `${itemId}-banner` )
    entidad.setAttribute("geometry", {
      primitive:"plane",
      width:0.9,
      height:1
    })
    entidad.setAttribute("material", {
      color:"#000"
    })
    entidad.setAttribute("position", {x:0, y:0.1, z:-1})
    const item=postersInfo[itemId]
    const image=this.createImageBitmap(item)
    const title=this.createTitle(item)
    const description=this.createDescription(item)
    entidad.appendChild(image)
    entidad.appendChild(title)
    entidad.appendChild(description)
    fondo.appendChild(entidad)
  },
  createImageBitmap:function(item){
    const imagen = document.createElement("a-entity")
    imagen.setAttribute("visible", true) 
    imagen.setAttribute("geometry", {
      primitive:"plane",
      width:1.5,
      height:1.6,
    })  
    imagen.setAttribute("material", {
      src:item.banner_url
    })
    imagen.setAttribute("position", {x:0, y:-0.09, z:0.04})
    return imagen
  },
  createTitle:function(item){
    const titulo = document.createElement("a-entity")
    titulo.setAttribute("visible", true)
    titulo.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width: 1.5,
      color:"white",
      value:item.title
    }) 
    titulo.setAttribute("position", {x:-1.1, y:.62, z:0.05})
    return titulo
  },
  createDescription:function(item){
    const descripccion = document.createElement("a-entity")
    descripccion.setAttribute("visible", true)
    descripccion.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width: 0.9,
      color:"white",
      value:item.description
    }) 
    descripccion.setAttribute("position", {x:1.18, y:-0.1, z:0.05})
    return descripccion
  }
  });