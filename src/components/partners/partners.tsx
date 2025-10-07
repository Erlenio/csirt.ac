import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { PartnerItem } from "./PartnerItem";
import { EmblaOptionsType } from "embla-carousel";


export const Partners: React.FC = () => {

    const partners = [
        {
            id: 1,
            name: "Africa CERT",
            imageUrl: '/imagens/parceiros/africacert.png'
        },
        {
            id: 2,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/first.png"
        },
        {
            id: 3,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/cais.png"
        },
        {
            id: 4,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/certrts.png"
        },
        {
            id: 5,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/cncs.png"
        },
        {
            id: 6,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/csirtcedia.png"
        },
        {
            id: 7,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/csirtgov.png"
        },
        {
            id: 8,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/team_cymru.png"
        },
        {
            id: 9,
            name: "Firtt",
            imageUrl: "/imagens/parceiros/tf-csirt.png"
        }
    ];

    const options: EmblaOptionsType = { loop: true }

    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true , stopOnFocusIn: true, speed: 0.5 }),
    ])
    /*const [isPlaying, setIsPlaying] = useState(false)

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play
        playOrStop()
    }, [emblaApi])*/

    /*useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        /*setIsPlaying(autoScroll.isPlaying())
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])*/

    return (
        <section className="w-full px-[9%] py-10">
            <h2 className="mx-auto w-fit text-2xl text-primary font-bold mb-2">Nossos parceiros</h2>
            <p className="mx-auto w-fit mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illo rem accusamus mollitia.</p>

            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {partners.map((it, index) => (
                            <PartnerItem item={it} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}