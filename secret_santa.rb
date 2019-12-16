require "base64"

class SecretSanta
  PLAYERS = ["anais", "laura", "pauline", "zoe", "ben", "alexandre"]

  def self.execute
    game = {}
    players = PLAYERS.shuffle
    players.each_with_index.map do |val, index|
      game[val] = players[index - 1]
    end
    game.each { |key, value| game[key] = Base64.encode64(value) }
    puts game
  end
end

SecretSanta.execute
