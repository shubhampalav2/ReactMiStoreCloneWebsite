import "../styles/NavOptios.css"
import HotItemCard from "./HotItemCard.js"
const NavOptios = ({miPhones,miPhonesCover,redmiPhones,redmiPhonesCover,tv,tvCover,laptop,laptopCover,fitnessAndLifeStyle,fitnessAndLifeStyleCover,home,homeCover,audio,audioCover,accessories,accessoriesCover}) => {
    return (
      <div className="navOptions">
  
  
       {/* -----------2nd */}
       <div>
              {miPhones && miPhones.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
              {redmiPhones && redmiPhones.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
              {tv && tv.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
  
              {laptop && laptop.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
  
              {fitnessAndLifeStyle && fitnessAndLifeStyle.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}

            {home && home.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}

              
            {audio && audio.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}

{accessories && accessories.map((item,index)=>(
               <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
                     
              ))}
              <p></p>
  
  {/* <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" /> */}
  
              </div>
      </div>
    )
  }



// const NavOptios = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

//    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
//    const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
//    const [tvToggle,setTvToggle] = useState(false);
//    const [laptopToggle,setLaptopToggle] = useState(false);
//    const [fitnessToggle,setFitnessToggle] = useState(false);
//    const [homeToggle,setHomeToggle] = useState(false);
//    const [audioToggle,setAudioToggle] = useState(false);
//    const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

//    useEffect(() => {
     
//     if(window.location.pathname === "/miphones"){
//         return   setMiPhoneToggle(true)
//        }
//      if(window.location.pathname === "/#redmiphones"){
//         return   setRedmiPhoneToggle(true)
//        }
//        if(window.location.pathname === "/#tv"){
//         return   setTvToggle(true)
//        }
//        if(window.location.pathname === "/#laptops"){
//         return   setLaptopToggle(true)
//        }
//        if(window.location.pathname === "/#lifestyle"){
//         return  setFitnessToggle(true)
//        }
//        if(window.location.pathname === "/#home"){
//         return  setHomeToggle(true)
//        }
//        if(window.location.pathname === "/#audio"){
//         return  setAudioToggle(true)
//        }
       
//        if(window.location.pathname === "/#accessories"){
//         return  setAccessoriesToggle(true)
//        }

       
//    }, [])

//     return (
//         <div className="navOptions"> 

//             {miPhoneToggle?   miPhones.map((item)=>(

//                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//               )) : null }
            
      
//             {redmiPhoneToggle?   redmiPhones.map((item)=>(

//                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//            )) : null }
     

//             {tvToggle ?   tv.map((item)=>(

//                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//            )) : null }

//            {laptopToggle ?   laptop.map((item)=>(

//               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//            )) : null }
     
   

//             {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

//               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//            )) : null }
     

//                {homeToggle ?   home.map((item)=>(

//                    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//               )) : null }
     
     

//             {audioToggle ?   audio.map((item)=>(

//              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//             )) : null }
     

//             {accessoriesToggle ?   accessories.map((item)=>(

//                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
//              )) : null }
     
//         </div>
//     )
// }

export default NavOptios;