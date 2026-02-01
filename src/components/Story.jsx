import React, {useRef} from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import Button from './Button'

const Story = () => {
    const frameRef = useRef('null');

    const handleMouseLeave = ( ) => {
        const element = frameRef.current;
        gsap.to(element, {
            duration:0.3,
            rotateX:0, 
            rotateY:0,
            ease:'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e; 
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

         gsap.to(element, {
            duration:0.3,
            rotateX, rotateY, transformPerspective:500,
            ease:'power1.inOut'
        })

        
    }
    
  return (
    <section id="story" className="w-screen bg-black min-h-dvh text-blue-50">
        <div className="flex flex-col items-center py-10 pb-24 size-full">
            <p className="text-sm uppercase font-general md:text-[10px]">the multiversal ip world</p>

            <div className="relative size-full">
                <AnimatedTitle 
                    title="The st<b>o</b>ry of <br />hidden real<b>m</b>"
                    sectionId="#story"
                    containerClass="mt-5 pointers-events-none mix-blend-difference relative z-10"
                />
                <div className="story-img-container">
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                
                                src="/img/entrance.webp"
                                alt="entrance"
                                className='object-container'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full -mt-80 md:-mt-64 md:me-44 md:justify-end">
                <div classname="flex flex-col items-center h-full w-fit md:items-start">
                    <p className='max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start'>Where realms converge, lies Zentry and the boundless pillar. Discovers its secrets and shape your fate amidst infinite opportunities.</p>
                    
                    <Button id="realm-button" title="discover prologue" containerClass="mt-5" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story