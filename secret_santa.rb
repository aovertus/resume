require "base64"

class SecretSanta
  PLAYERS = ["mickael", "anais", "nicolas", "lydia", "alexandre", "morgane", "aurelien", "julie", "zoe"]

  def self.execute
    game = {}
    PLAYERS.map do |val|
      game[val] = (PLAYERS - [val] - game.values).sample
    end
    game.each { |key, value| game[key] = Base64.encode64(value) }
    puts game
  end
end

SecretSanta.execute
