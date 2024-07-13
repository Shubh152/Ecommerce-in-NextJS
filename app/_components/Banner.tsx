'use client'

import {Button, Image, Text} from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

export default function Banner() {
    const router = useRouter();
    return (
        <div className='border-b  border-text'>
            <Text marginLeft='150px' marginTop='150px' as="b" zIndex='3' fontSize='4.5rem' color="brand.500" position="absolute">MAKE THE<br/> PERFECT BUYS<br/> FOR YOUR <br/>PERFECT HOME</Text>
            <Button onClick={()=>{router.push('/shop')}} marginLeft='150px' borderRadius='full' marginTop='650px' size="lg" width="300px" zIndex="2" position="absolute" display="inline" variant="solid" colorScheme='brand'>Check Best Deals</Button>
            <><Image src="/static/banner.jpg" height='900px' width="full" opacity='80%'/> </>
        </div>
    );
}