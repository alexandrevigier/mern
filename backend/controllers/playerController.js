import mongoose from 'mongoose';
import playerSchema from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

export const add = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, createdPlayer) => {
    if (err) {
      res.send(err);
    }

    res.json(createdPlayer);
  });
};

export const getAll = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send('an error occured while trying to get players');
    }

    res.send(players);
  });
};

export const getById = (req, res) => {
  Player.findById(req.params.id, (error, player) =>{
    if(error){
      res.send('an error occured while trying to get a player');
    }

    res.json(player);
  });
};