import * as S from "./styles";

type CardProps = {
  image?: string;
  name?: string;
};

export const Card: React.FC<CardProps> = ({ image, name }) => {
  return (
    <>
      <S.Container className="flex flex-col items-center p-3 cursor-pointer">
        <img src={image} style={{ width: "200px", height: "250px" }} />
        <p className="pt-1">{name}</p>
      </S.Container>
    </>
  );
};
