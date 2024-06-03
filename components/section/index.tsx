import Image from "next/image";
import { GridContainer } from "../grid";
import IconFile from '/public/icon-file.svg'

export function SectionHero() {
    return (
        <section className="w-full h-section-hero bg-green-primary border-t border-t-green-border pt-16">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font text-green-actived mb-4">Novo curso focado em programação</h3>
                    <h1 className="text-white text-7xl">Destrave as suas habilidades</h1>
                    <div>
                        <button>
                            <Image 
                                src={IconFile} 
                                alt="iconfile" 
                            />
                            <span>Assinar lista de espera</span>
                        </button>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}