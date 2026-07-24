export interface Player {
  id: string;
  username: string;
  level: number;
  wins: number;
  losses: number;
  elo: number;
  avatar?: string;
}

export interface Character {
  id: string;
  name: string;
  series: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  stats: CharacterStats;
  skills: Skill[];
}

export interface CharacterStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  sp: number;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  damage: number;
  cooldown: number;
  type: 'attack' | 'defense' | 'heal' | 'buff';
}

export interface Battle {
  id: string;
  roomId: string;
  player1: BattlePlayer;
  player2: BattlePlayer;
  status: 'waiting' | 'active' | 'finished';
  currentTurn: 'player1' | 'player2';
  winner?: string;
}

export interface BattlePlayer {
  id: string;
  username: string;
  character: Character;
  health: number;
  maxHealth: number;
  sp: number;
  maxSp: number;
}

export interface Leaderboard {
  rank: number;
  player: Player;
  wonStreak: number;
  totalMatches: number;
  winRate: number;
}
