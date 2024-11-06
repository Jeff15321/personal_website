import React from 'react';
import BentoComponent from '../components/BentoComponent';
import styled from 'styled-components';
import Terminal from '../components/Terminal';
const BentoPage: React.FC = () => {
  const bentoItems = [
    {
      title: 'Sushi',
      description: 'Delicious sushi rolls with fresh fish.',
      imageUrl: '/images/sushi.jpg',
      width: '300px',
      height: '200px',
    },
    {
      title: 'Ramen',
      description: 'Hearty ramen with rich broth and toppings.',
      imageUrl: '/images/ramen.jpg',
      width: '300px',
      height: '300px',
    },
    {
      title: 'Tempura',
      description: 'Crispy tempura vegetables and shrimp.',
      imageUrl: '/images/tempura.jpg',
      width: '400px',
      height: '200px',
    },
    {
      title: 'Bento Box',
      description: 'A traditional Japanese bento box.',
      imageUrl: '/images/bento_box.jpg',
      width: '200px',
      height: '400px',
    },
    {
      title: 'Onigiri',
      description: 'Rice balls filled with various ingredients.',
      imageUrl: '/images/onigiri.jpg',
      width: '300px',
      height: '300px',
    },
    {
      title: 'Miso Soup',
      description: 'Warm miso soup with tofu and seaweed.',
      imageUrl: '/images/miso_soup.jpg',
      width: '200px',
      height: '200px',
    },
  ];

  return (
    <div className='bento-container'>
        <div className='col-left'>
            <div className="row row1">
                <div className="row-col left"></div>
                <div className="row-col flex-col right">
                    <div className="row-col medium-long"></div>
                    <div className="row-col small-long"></div>
                </div>
            </div>

            <div className="row row2">
                <div className="row-col small-tall"></div>
                <div className="row-col medium-long"></div>
            </div>
        </div>
        <div className='col-right'>
            <div className="row top"></div>
            <div className="row bottom"><Terminal height={100} width={100}/></div>
        </div>
      
    </div>
  )
}

//   return (
//     <Container>
//       <Header>Bento Styled Website</Header>
//       <Grid>
//         {bentoItems.map((item, index) => (
//           <BentoComponent
//             key={index}
//             title={item.title}
//             description={item.description}
//             imageUrl={item.imageUrl}
//             width={item.width}
//             height={item.height}
//           />
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export default BentoPage;
