const galleryContainer=document.querySelector(".galeryCantainer");
const galleryControlesCantainer=document.querySelector(".galeryControls");
const galleryItem=document.querySelectorAll(".galeryItem");
const images=document.querySelectorAll(".img");
const galleryControls=['prev', 'next'];


class Carousel{

  constructor(cantainer,items,controls){
    this.carouelCantainer=cantainer;
    this.carouelControls=controls;
    this.carouelArray=[...items];
    this.addKeyboardNavigation();
    this.addScrollNavigation();
  }

  updateGallery(){
    this.carouelArray.forEach(el=>{
      el.classList.remove("item1")
      el.classList.remove("item2")
      el.classList.remove("item3")
      el.classList.remove("item4")
      el.classList.remove("item5")
      el.classList.remove("item6")
      el.classList.remove("item7")
    });

    this.carouelArray.slice(0,7).forEach((el,i)=>{
      el.classList.add(`item${i+1}`)
    })
  }
  setCurrentState(direction){
    if(direction.className=='galleryprev'){
      this.carouelArray.unshift(this.carouelArray.pop());
    }else{
      this.carouelArray.push(this.carouelArray.shift());
    }
    this.updateGallery()
  }

  setControls(){
    this.carouelControls.forEach(control=>{
      galleryControlesCantainer.appendChild(document.createElement('button')).className=`gallery${control}`;
      document.querySelector(`.gallery${control}`).innerText=control
    })
  }

  addKeyboardNavigation(){
    document.addEventListener("keydown",(event)=>{
       if(event.key==='ArrowRight'){
        this.setCurrentState({className:'gallerynext'});
       }else if(event.key==='ArrowLeft'){
        this.setCurrentState({className:'galleryprev'});
       }
    })
  }

  addScrollNavigation(){
    this.carouelCantainer.addEventListener("wheel",(event)=>{
      if(event.deltaY >0){
        this.setCurrentState({className:'gallerynext'});
      }else{
        this.setCurrentState({className:'galleryprev'});
      }
    })
  }
  useControls(){
    const triggers =[...galleryControlesCantainer.childNodes];
    triggers.forEach(control =>{
      control.addEventListener('click',e =>{
        e.preventDefault();
        this.setCurrentState(control)
      });
    });
  }

  imageContent(){
    let show='';
galleryItem.forEach(item=>{
  const content = item.querySelector(".content");
  item.addEventListener("click",()=>{
    this.updateGallery()
      if(item.className=="galeryItem item4"){
        content.classList.toggle("showContent")
      }else{
        alert("Scroll to project please")
      }

  })
})

  }
}


const exampleCarousel= new Carousel(galleryContainer,galleryItem,galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.imageContent();


