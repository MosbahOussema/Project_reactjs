import ChiefCard from "./ChiefCard"


export default function ChiefsSection(){
  const chiefs =[
    {
      name: "Mosbah Wess",
      img: "/img/top-chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
  },
  {
      name: "Hélène Darroze",
      img: "/img/top-chiefs/img_2.jpg",
      recipesCount: "01",
      cuisine: "Tunisia",
  },
  {
      name: "Selim Bedoui",
      img: "/img/top-chiefs/img_6.jpg",
      recipesCount: "13",
      cuisine: "Italian",
  },
  {
      name: "Chris Brown",
      img: "/img/top-chiefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American"
  },
  {
      name: "Blake Lively",
      img: "/img/top-chiefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French"
  },
  {
      name: "Hmed Satour" ,
      img: "/img/top-chiefs/img_3.jpg",
      recipesCount: "04",
      cuisine: "Indian"
  } 
  ]
  return(

    <div className="section chiefs">
       <h1 className="title">Our Top Chiefs</h1>
     <div className="top-chiefs-contrainer">
          {/*<ChiefCard />
          <ChiefCard />
          <ChiefCard />
          <ChiefCard />
          <ChiefCard />
          <ChiefCard />
          <ChiefCard />*/}
          {chiefs.map(chief => <ChiefCard key={chief.name} chief={chief}/> )}

     </div>

    </div>
  )

}