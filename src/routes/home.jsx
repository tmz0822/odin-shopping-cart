import styled from 'styled-components';
import homepageRightImage from '../assets/homepageright.webp';

export default function Home() {
  return (
    <ImageContainer>
      <Image
        src={homepageRightImage}
        alt="Fashion boutique with mannequins, clothing racks, and shoppers."
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 810px;
  object-fit: cover;
`;
