import React from 'react';
import { Container, CardHeader, CardHeaderInfo, CardContent, Avatar, Title } from './style'

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function Card() {

  return (    
    <Container>
        <CardHeader>
            <CardHeaderInfo>
                <Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png" />
                <Title>Visual Designer</Title>
            </CardHeaderInfo>
            <MdFavoriteBorder />
        </CardHeader>

        <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit diam, tincidunt vel viverra at, accumsan non ex. Donec eleifend felis sed odio sodales imperdiet. 
        </CardContent>
    </Container>
  );
}

export default Card;
