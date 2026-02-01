import { Children } from "react"
import { TiLocationArrow } from "react-icons/ti"
import { useRef, useState } from "react"

const BentoTilt = ({children, className = ''}) => {

    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();
    
    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current
        .getBoundingClientRect();

        const relativeX = ( e.clientX - left) / width;
        const relativeY = ( e.clientY - left) / height;

        const tiltX = (relativeY - 0.5 ) * 7;
        const tiltY = (relativeX - 0.5 ) * -7;
        
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform)
    }
    
    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle }}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description}) =>{
    return (
        <div className="relative size-full ">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute top-0 left-0 object-cover object-center size-full"
            />
            <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 text-xs max-w-34 md:text-base">{description}</p>
                    )}
                </div>
            </div>
            {title}
        </div>
    )
}
function Features() {
  return (
    <section className='bg-black pb-52'>
        <div className="container px-3 mx-auto md:px-10">
            <div className = "px-5 py-32">
                <p className="text-lg font-circular-web text-blue-50">Into the Metagame Layer</p>
            
            <p className= "max-w-md text-lg opacity-50 font-circular-web text-blue-50">
                Immerse yourself in a rich and ever-expanding universe where a vibrant array of converge into an interconnected overlay experiece on your world.
            </p>
            </div>
        

        <BentoTilt className="relative w-full overflow-hidden rounded-md border-hsla mb-7 h-96 md:h-[65vh]">
            <BentoCard
                src="videos/feature-1.mp4"
                title={<>radi<b>n</b>t</>}
                description="A cross-platform metagame app, turning your activities accross web2 and web3 games into a rewarding adventure."
                
            />
        </BentoTilt>
        
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
            <BentoTilt className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">

                <BentoCard 
                    src="videos/feature-2.mp4"
                    title={<>zig<b>ma</b></>}
                    description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
                />
            </BentoTilt>
            
            <BentoTilt className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
                <BentoCard 
                    src="videos/feature-3.mp4"
                    title={<>n<b>e</b>xus</>}
                    description="A gamified social hub, adding a new dimension of paly to social interaction for web3 communities."
                />
                
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <BentoCard 
                    src="videos/feature-4.mp4"
                    title={<>az<b>u</b>l</>}
                    description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                />
            </BentoTilt>
            
            <div className="bento-tilt_2">
                <div className="flex-col justify-between p-5 fkex size-full bg-violet-300 ">
                    <h1 className="text-black bento-title special-font max-w-64">
                        M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
                    </h1>
                    <TiLocationArrow className="m-5 scale-[5] self-end" />
                </div> 
            </div>

            <div className="bento-tilt_2">
                <video 
                    src="videos/feature-5.mp4"
                    loop
                    muted
                    autoPlay
                    className="object-cover object-center size-full"
                />
            </div>
            
        </div>
        
        </div>
    </section>
  )
}

export default Features