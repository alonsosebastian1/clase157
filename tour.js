AFRAME.registerComponent("tour",{
    init:function(){
        this.placeContainer = this.El;
        this.createCards();
    },
    createCards:function(){
        const thumbNailsRef=[{
            id:"tag-mahal",
            tittle:"Tag Mahal",
            url:"assets/taj_mahal.png"
        },
        {
            id:"budapest",
            tittle:"Budapest",
            url:"assets/budapest.jpg"
        },
        {
            id:"paris",
            tittle:"Paris",
            url:"assets/paris.jpg"
        },
        {
            id:"new-york",
            tittle:"Nueva York",
            url:"assets/new_york_city.png"
        }];
        var previewsxposition = -60;
        for(var item of thumbNailsRef){
            const posX=previewsxposition+25;
            const posY=10;
            const posZ=-40;
            const position={x:posX,y:posY,z:posZ};
            previewsxposition=posX;
            const borderEl=this.createBorder(position,item.id);
            const thumbNails = this.createTumbnails(item);
            borderEl.appendChild(thumbNails);
            const tittleEl=this.createTittleEl(position,item);
            borderEl.appendChild(tittleEl);
            this.placeContainer.appendChild(borderEl);
        }
    },
    createBorder:function(position,id){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        });
        entityEl.setAttribute("position",position);
        entityEl.setAttribute("material",{
            color:"black",
            opacity:1
        });
        return entityEl;
    },
    createTumbnails:function(item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:9,
        });
        entityEl.setAttribute("material",{
            src:item.url
        });
        return entityEl;
    },
    createTittleEl:function(position,item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"black",
            value:item.tittle
        });
        const elposition = position;
        elposition.y = -20;
        entityEl.setAttribute("position",position);
        entityEl.setAttribute("visible",true);
        return entityEl;
    }
})