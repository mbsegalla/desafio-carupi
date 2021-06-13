import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaArrowCircleLeft } from 'react-icons/fa';
import { getLocalGamesList } from '../../utils/localStorage';
import { Content, Card, Image, Title, Span, Info, Type, InfoContent, Back } from './styles';

function GameDetail({ match }) {
  const [game, setGame] = useState({});

  const gameId = match.params.id;

  useEffect(() => {
    if (gameId) {
      const foundedGame = (getLocalGamesList() || {}).find((g) => g.id.toString() === gameId);
      setGame(foundedGame);
    }
  }, [gameId]);

  return (
    <Content>
      <Back>
        <Link to="/">
          <FaArrowCircleLeft />Voltar á página anterior
        </Link>
      </Back>
      {game && game.id ? (
        <Card>
          {game.background_image && (
            <Image
              src={game.background_image}
              alt={game.name}
            />
          )}
          {game.name && (
            <Title>{game.name}</Title>
          )}
          <InfoContent>
            <Info>
              <Type>{game.genres.length > 1 ? 'Gêneros: ' : 'Gênero: '}</Type>
              {game.genres.map((genre) => (
                <Span>{genre.name}{game.genres.length > 1 ? ',' : ''}&nbsp;</Span>
              ))}
            </Info>
            <Info>
              <Type>{game.platforms.length > 1 ? 'Plataformas: ' : 'Plataforma: '}</Type>
              {game.platforms.map((p) => (
                <Span>{p.platform.name}{game.platforms.length > 1 ? ',' : ''}&nbsp;</Span>
              ))}
            </Info>
          </InfoContent>
        </Card>
      ) : <></>}
    </Content>
  );
}

export default GameDetail;
