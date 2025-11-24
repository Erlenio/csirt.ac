import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Item{
    id: number;
    name: string;
    imageUrl: string | StaticImageData;
}

interface PartnerItemProps{
    item: Item
}

export const PartnerItem : React.FC<PartnerItemProps> = ({item}) => {
    return (
        <Link href={"#"} className="embla_slide bg-transparent flex items-center justify-center p-2 rounded-md duration-300">
            <Image alt={item.name} src={item.imageUrl} width="128" height="128" className="w-32 h-32 object-fill" />
        </Link>
    )
}