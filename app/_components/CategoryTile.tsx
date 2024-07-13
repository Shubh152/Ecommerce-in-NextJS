import { Heading,Image } from "@chakra-ui/react";

export default function CategoryTile({prop}){
    return (
        <div>
            <Heading as='b' zIndex='1' width='300px' paddingX='20px' paddingY='20px' position='absolute'>{prop.title}</Heading>
            <Image opacity='70%' fit='cover' height={prop.height} width={prop.width} borderRadius='xl' src={prop.imgUrl}/>
        </div>
    );
}