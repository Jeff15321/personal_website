import React from 'react';
import styled from 'styled-components';

interface BentoComponentProps {
  title: string;
  description: string;
  imageUrl: string;
  width: string;
  height: string;
}

const BentoComponent: React.FC<BentoComponentProps> = ({ title, description, imageUrl, width, height }) => {
  return (
    <BentoContainer width={width} height={height}>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </BentoContainer>
  );
};

// Styled Components
const BentoContainer = styled.div<{ width: string; height: string }>`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default BentoComponent; 