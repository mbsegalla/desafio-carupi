import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import getGamesApi from '../../services';
import { saveLocalGamesList } from '../../utils/localStorage';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1.5rem',
    textAlign: 'center',
  },
  media: {
    height: 140,
  },
  buttonContent: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function Cards() {
  const classes = useStyles();
  
  const [games, SetGames] = useState([]);

  useEffect(() => {
    const getGames = (async () => {
      const response = await getGamesApi();
      if (response) {
        saveLocalGamesList(response);
        SetGames(response);
      }
    });
    getGames();
  }, []);

  return (
    <>
      {Object.values(games).map((game) => (
        <>
          {game && game.id && (
            <Card className={classes.root} key={game.id}>
              <Link to={`/details/${game.id}`}>
                <CardActionArea>
                  {game.background_image && (
                    <CardMedia
                      key={game.id}
                      className={classes.media}
                      image={game.background_image}
                      title={game.name}
                    />
                  )}
                  <CardContent>
                    {game.name && (
                      <Typography gutterBottom variant="h5" component="h2">
                        {game.name}
                      </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions className={classes.buttonContent}>
                <Link to={`/details/${game.id}`}>
                  <Button>
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          )}
        </>
      ))}
    </>
  );
}

export default Cards;
