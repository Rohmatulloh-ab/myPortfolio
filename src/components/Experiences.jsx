import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
const Experiences = () => {
  return (<>
  
  
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5,delay:1}}
      className="my-20 text-center text-4xl">Experience</motion.h1>
    </div>
    <div>
        
            {EXPERIENCES && EXPERIENCES.length > 0 ? (
                EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.5,delay:1}}
                        className="w-full lg:w-1/4"><p className="mb-2 text-sm text-neutral-400">{experience.year}</p></motion.div> 
                       <div className="w-full max-w-xl lg:w-3/4">
                       <motion.h6
                       whileInView={{opacity:1 , x:0}}
                       initial={{opacity:0, x:100}}
                       transition={{duration:0.5,delay:1}}
                       className="mb-2 font-semibold ">{experience.role} - <span className="text-red-400">{experience.company}</span></motion.h6>
                       <motion.p
                       whileInView={{opacity:1 , x:0}}
                       initial={{opacity:0, x:-100}}
                       transition={{duration:0.5,delay:1}}
                       className="mb-4 text-neutral-400 ">{experience.description}</motion.p>
                       {
                        experience.technologies.map((technology,index)=>(
                            <motion.span
                            whileInView={{opacity:1 , y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5,delay:1}}
                            key={index} className="mr-2 mt-4 rounded bg-neutral-900 text-sm px-2 py-1 text-green-600 gap-4 border-b border-neutral-400">{technology}</motion.span>
                        ))
                       }
                        </div> 
                    </div>
                ))
            ) : (
                <p>No Experiences to display</p>
            )}
            
        
    </div>
  </>
  )
}

export default Experiences
